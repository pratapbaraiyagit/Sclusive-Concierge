// src/pages/ClientPortal/ClientDashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/AuthContext";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ClientDashboard.css";

const ClientDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("requests");
  const [messageText, setMessageText] = useState("");
  const [accountData, setAccountData] = useState({
    name: "",
    email: "",
    phone: "",
    preferences: "",
  });
  const [requests, setRequests] = useState([]);
  const [itineraries, setItineraries] = useState([]);
  const [privileges, setPrivileges] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newRequestData, setNewRequestData] = useState({
    type: "",
    details: "",
    attachment: null,
  });
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);

  const { currentUser, logout, getUserData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      fetchUserData();
      fetchRequests();
      fetchItineraries();
      fetchPrivileges();
      fetchMessages();
    }
  }, [currentUser]);

  const fetchUserData = async () => {
    try {
      const userData = await getUserData(currentUser.uid);
      if (userData) {
        setAccountData({
          name: userData.fullName || currentUser.displayName || "",
          email: userData.email || currentUser.email || "",
          phone: userData.phone || "",
          preferences: userData.preferences || "",
        });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchRequests = () => {
    if (!currentUser) return;

    const q = query(
      collection(db, "requests"),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const requestsList = [];
      querySnapshot.forEach((doc) => {
        requestsList.push({ id: doc.id, ...doc.data() });
      });
      setRequests(requestsList);
      setLoading(false);
    });

    return unsubscribe;
  };

  const fetchItineraries = () => {
    if (!currentUser) return;

    const q = query(
      collection(db, "itineraries"),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itinerariesList = [];
      querySnapshot.forEach((doc) => {
        itinerariesList.push({ id: doc.id, ...doc.data() });
      });
      setItineraries(itinerariesList);
    });

    return unsubscribe;
  };

  const fetchPrivileges = () => {
    const q = query(collection(db, "privileges"), where("active", "==", true));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const privilegesList = [];
      querySnapshot.forEach((doc) => {
        privilegesList.push({ id: doc.id, ...doc.data() });
      });
      setPrivileges(privilegesList);
    });

    return unsubscribe;
  };

  const fetchMessages = () => {
    if (!currentUser) return;

    const q = query(
      collection(db, "messages"),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesList = [];
      querySnapshot.forEach((doc) => {
        messagesList.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesList);
    });

    return unsubscribe;
  };

  const handleFileChange = (e) => {
    setNewRequestData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/portal");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleNewRequest = async () => {
    if (!newRequestData.type || !newRequestData.details) {
      alert(t("Please fill in all required fields"));
      return;
    }

    try {
      await addDoc(collection(db, "requests"), {
        userId: currentUser.uid,
        type: newRequestData.type,
        details: newRequestData.details,
        status: "Pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      setNewRequestData({ type: "", details: "", attachment: null });
      setShowNewRequestForm(false);
      alert(t("Request submitted successfully!"));
    } catch (error) {
      console.error("Error creating request:", error);
      alert(t("Failed to submit request. Please try again."));
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await addDoc(collection(db, "messages"), {
        userId: currentUser.uid,
        message: messageText,
        sender: "client",
        createdAt: new Date(),
      });

      setMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert(t("Failed to send message. Please try again."));
    }
  };

  const handleAccountUpdate = async (field, value) => {
    setAccountData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveAccountChanges = async () => {
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        fullName: accountData.name,
        phone: accountData.phone,
        preferences: accountData.preferences,
        updatedAt: new Date(),
      });
      alert(t("Account updated successfully!"));
    } catch (error) {
      console.error("Error updating account:", error);
      alert(t("Failed to update account. Please try again."));
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = date.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "#28a745";
      case "Pending":
        return "#ffc107";
      case "In Progress":
        return "#17a2b8";
      case "Booked":
        return "#007bff";
      default:
        return "#6c757d";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "requests":
        return (
          <div className="card">
            <h2 className="card-title">{t("My Requests")}</h2>
            <p className="card-description">
              {t(
                "Submit and track your service needs with your lifestyle manager."
              )}
            </p>

            {!showNewRequestForm ? (
              <button
                onClick={() => setShowNewRequestForm(true)}
                className="btnd btnd-primary"
                style={{ marginBottom: "2rem" }}
              >
                {t("Submit New Request")}
              </button>
            ) : (
              <div className="new-request-form">
                <h4 className="new-request-title">{t("New Request")}</h4>
                <div>
                  <select
                    value={newRequestData.type}
                    onChange={(e) =>
                      setNewRequestData({
                        ...newRequestData,
                        type: e.target.value,
                      })
                    }
                    className="form-control"
                  >
                    <option value="">{t("Select Request Type *")}</option>
                    <option value="Travel Booking">
                      {t("Travel Booking")}
                    </option>
                    <option value="Restaurant Reservation">
                      {t("Restaurant Reservation")}
                    </option>
                    <option value="Personal Shopping">
                      {t("Personal Shopping")}
                    </option>
                    <option value="Event Planning">
                      {t("Event Planning")}
                    </option>
                    <option value="Transportation">
                      {t("Transportation")}
                    </option>
                    <option value="Other">{t("Other")}</option>
                  </select>
                </div>
                <div>
                  <textarea
                    value={newRequestData.details}
                    onChange={(e) =>
                      setNewRequestData({
                        ...newRequestData,
                        details: e.target.value,
                      })
                    }
                    placeholder={t("Describe your request in detail...")}
                    rows={4}
                    className="form-control textarea"
                  />
                </div>
                <div>
                  <label className="form-label">
                    {t("Attach File (Optional)")}
                  </label>
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="form-control file-input"
                  />
                  <small className="form-help-text">
                    {t("Max file size 5MB (PDF, JPG, PNG, DOC)")}
                  </small>
                </div>
                <div className="form-actions">
                  <button
                    onClick={handleNewRequest}
                    className="btnd btnd-primary"
                  >
                    {t("Submit Request")}
                  </button>
                  <button
                    onClick={() => {
                      setShowNewRequestForm(false);
                      setNewRequestData({
                        type: "",
                        details: "",
                        attachment: null,
                      });
                    }}
                    className="btnd btnd-outlines"
                  >
                    {t("Cancel")}
                  </button>
                </div>
              </div>
            )}

            {loading ? (
              <p style={{ color: "#142F2E" }}>{t("Loading requests...")}</p>
            ) : requests.length > 0 ? (
              <div>
                {requests.map((req) => (
                  <div key={req.id} className="list-item">
                    <div className="list-item-content">
                      <h5>{req.type}</h5>
                      <small className="list-item-details">{req.details}</small>
                      <small className="list-item-date">
                        {t("Created")}: {formatDate(req.createdAt)}
                      </small>
                    </div>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(req.status) }}
                    >
                      {t(req.status)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>
                {t("No active requests found.")}
              </p>
            )}
          </div>
        );

      case "itineraries":
        return (
          <div className="card">
            <h2 className="card-title">{t("Itineraries")}</h2>
            <p className="card-description">
              {t("View your upcoming bookings and detailed travel plans.")}
            </p>
            {itineraries.length > 0 ? (
              <div>
                {itineraries.map((itinerary) => (
                  <div key={itinerary.id} className="list-item">
                    <div className="list-item-content">
                      <h5>{itinerary.title}</h5>
                      <small className="list-item-details">
                        {t("Dates")}: {itinerary.dates}
                      </small>
                      <small className="list-item-date">
                        {t("Created")}: {formatDate(itinerary.createdAt)}
                      </small>
                    </div>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: getStatusColor(itinerary.status),
                      }}
                    >
                      {t(itinerary.status)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>
                {t("No upcoming itineraries.")}
              </p>
            )}
          </div>
        );

      case "privileges":
        return (
          <div className="card">
            <h2 className="card-title">{t("Privileges")}</h2>
            <p className="card-description">
              {t(
                "Explore your current perks and exclusive offers as a S'CLUSIVE member."
              )}
            </p>
            {privileges.length > 0 ? (
              <div>
                {privileges.map((priv) => (
                  <div key={priv.id} className="list-item">
                    <div className="list-item-content">
                      <h5>{priv.title}</h5>
                      <small className="list-item-details">
                        {priv.description}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>
                {t("No special privileges currently available.")}
              </p>
            )}
          </div>
        );

      case "messaging":
        return (
          <div className="card">
            <h2 className="card-title">{t("Messaging")}</h2>
            <p className="card-description">
              {t("Direct chat with your dedicated lifestyle manager.")}
            </p>
            <div className="messages-container">
              {messages.length > 0 ? (
                <div>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`message-item ${
                        msg.sender === "client"
                          ? "message-client"
                          : "message-support"
                      }`}
                    >
                      <small className="message-header">
                        {msg.sender === "client" ? t("You") : t("Support")} -{" "}
                        {formatDate(msg.createdAt)}
                      </small>
                      <p className="message-content">{msg.message}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-messages">
                  {t(
                    "No messages yet. Start a conversation with your lifestyle manager."
                  )}
                </p>
              )}
            </div>
            <div>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder={t("Type your message...")}
                className="form-control textarea"
              />
              <button
                className="btnd btnd-primary btnd-full-width"
                onClick={handleSendMessage}
              >
                {t("Send Message")}
              </button>
            </div>
          </div>
        );

      case "account":
        return (
          <div className="card">
            <h2 className="card-title">{t("Account Settings")}</h2>
            <p className="card-description">
              {t("Manage your personal information and preferences.")}
            </p>
            <div>
              <div>
                <label className="form-label">{t("Full Name")}</label>
                <input
                  type="text"
                  value={accountData.name}
                  onChange={(e) => handleAccountUpdate("name", e.target.value)}
                  className="form-control"
                />
              </div>
              <div>
                <label className="form-label">{t("Email")}</label>
                <input
                  type="email"
                  value={accountData.email}
                  onChange={(e) => handleAccountUpdate("email", e.target.value)}
                  className="form-control"
                  disabled
                />
                <small className="form-help-text">
                  {t(
                    "Email cannot be changed. Contact support if you need to update your email."
                  )}
                </small>
              </div>
              <div>
                <label className="form-label">{t("Phone")}</label>
                <input
                  type="tel"
                  value={accountData.phone}
                  onChange={(e) => handleAccountUpdate("phone", e.target.value)}
                  className="form-control"
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label className="form-label">{t("Preferences")}</label>
                <textarea
                  value={accountData.preferences}
                  onChange={(e) =>
                    handleAccountUpdate("preferences", e.target.value)
                  }
                  placeholder={t(
                    "Tell us about your preferences (dietary restrictions, seating preferences, etc.)"
                  )}
                  className="form-control textarea"
                />
              </div>
              <button
                className="btnd btnd-primary"
                onClick={saveAccountChanges}
              >
                {t("Save Changes")}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="header">
          <h1 className="header-title">
            {t("Welcome")}, {accountData.name || t("Valued Member")}!
          </h1>
          <button
            onClick={handleLogout}
            className="btnd btnd-outlines logout-btnd"
          >
            {t("Logout")}
          </button>
        </div>

        <div className="row">
          <div className="col-3">
            <nav className="navs">
              {[
                { key: "requests", label: t("My Requests") },
                { key: "itineraries", label: t("Itineraries") },
                { key: "privileges", label: t("Privileges") },
                { key: "messaging", label: t("Messaging") },
                { key: "account", label: t("Account Settings") },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`navs-item ${
                    activeTab === item.key ? "navs-item-active" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="col-9">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
