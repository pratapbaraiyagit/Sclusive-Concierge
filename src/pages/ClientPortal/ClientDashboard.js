// src/pages/ClientPortal/ClientDashboard.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const ClientDashboard = () => {
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
      alert("Please fill in all required fields");
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

      setNewRequestData({ type: "", details: "" });
      setShowNewRequestForm(false);
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Error creating request:", error);
      alert("Failed to submit request. Please try again.");
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
      alert("Failed to send message. Please try again.");
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
      alert("Account updated successfully!");
    } catch (error) {
      console.error("Error updating account:", error);
      alert("Failed to update account. Please try again.");
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

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 -15px",
    },
    col3: {
      flex: "0 0 25%",
      padding: "0 15px",
      minWidth: "250px",
    },
    col9: {
      flex: "0 0 75%",
      padding: "0 15px",
      minWidth: "500px",
    },
    nav: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      padding: "1rem",
      marginBottom: "2rem",
    },
    navItem: {
      display: "block",
      padding: "12px 16px",
      marginBottom: "8px",
      borderRadius: "8px",
      textDecoration: "none",
      color: "#142F2E",
      backgroundColor: "#FFFFFF",
      border: "1px solid #e9ecef",
      transition: "all 0.3s ease",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      width: "100%",
      textAlign: "left",
    },
    navItemActive: {
      backgroundColor: "#F8CD4D",
      color: "#142F2E",
      fontWeight: "600",
      border: "1px solid #F8CD4D",
    },
    card: {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      padding: "2rem",
      marginBottom: "2rem",
    },
    btn: {
      display: "inline-block",
      padding: "10px 20px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "14px",
      textAlign: "center",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },
    btnPrimary: {
      backgroundColor: "#F8CD4D",
      color: "#142F2E",
    },
    btnOutline: {
      backgroundColor: "transparent",
      color: "#142F2E",
      border: "2px solid #142F2E",
    },
    listItem: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #e9ecef",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    formControl: {
      width: "100%",
      padding: "10px 12px",
      border: "2px solid #e9ecef",
      borderRadius: "6px",
      fontSize: "14px",
      fontFamily: "Poppins, sans-serif",
      marginBottom: "1rem",
      boxSizing: "border-box",
    },
    textarea: {
      minHeight: "100px",
      resize: "vertical",
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "requests":
        return (
          <div style={styles.card}>
            <h2 style={{ color: "#F8CD4D", marginBottom: "1rem" }}>
              My Requests
            </h2>
            <p style={{ color: "#142F2E", marginBottom: "1.5rem" }}>
              Submit and track your service needs with your lifestyle manager.
            </p>

            {!showNewRequestForm ? (
              <button
                onClick={() => setShowNewRequestForm(true)}
                style={{
                  ...styles.btn,
                  ...styles.btnPrimary,
                  marginBottom: "2rem",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#e0b43e")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#F8CD4D")
                }
              >
                Submit New Request
              </button>
            ) : (
              <div
                style={{
                  marginBottom: "2rem",
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ color: "#142F2E", marginBottom: "1rem" }}>
                  New Request
                </h4>
                <div style={{ marginBottom: "1rem" }}>
                  <select
                    value={newRequestData.type}
                    onChange={(e) =>
                      setNewRequestData({
                        ...newRequestData,
                        type: e.target.value,
                      })
                    }
                    style={styles.formControl}
                  >
                    <option value="">Select Request Type *</option>
                    <option value="Travel Booking">Travel Booking</option>
                    <option value="Restaurant Reservation">
                      Restaurant Reservation
                    </option>
                    <option value="Personal Shopping">Personal Shopping</option>
                    <option value="Event Planning">Event Planning</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <textarea
                    value={newRequestData.details}
                    onChange={(e) =>
                      setNewRequestData({
                        ...newRequestData,
                        details: e.target.value,
                      })
                    }
                    placeholder="Describe your request in detail..."
                    rows={4}
                    style={{ ...styles.formControl, resize: "vertical" }}
                  />
                </div>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                    onClick={handleNewRequest}
                    style={{ ...styles.btn, ...styles.btnPrimary }}
                  >
                    Submit Request
                  </button>
                  <button
                    onClick={() => {
                      setShowNewRequestForm(false);
                      setNewRequestData({ type: "", details: "" });
                    }}
                    style={{ ...styles.btn, ...styles.btnOutline }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {loading ? (
              <p style={{ color: "#142F2E" }}>Loading requests...</p>
            ) : requests.length > 0 ? (
              <div>
                {requests.map((req) => (
                  <div key={req.id} style={styles.listItem}>
                    <div>
                      <h5 style={{ color: "#142F2E", marginBottom: "0.5rem" }}>
                        {req.type}
                      </h5>
                      <small
                        style={{
                          color: "#6c757d",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {req.details}
                      </small>
                      <small style={{ color: "#6c757d" }}>
                        Created: {formatDate(req.createdAt)}
                      </small>
                    </div>
                    <span
                      style={{
                        backgroundColor: getStatusColor(req.status),
                        color: "#FFFFFF",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>No active requests found.</p>
            )}
          </div>
        );

      case "itineraries":
        return (
          <div style={styles.card}>
            <h2 style={{ color: "#F8CD4D", marginBottom: "1rem" }}>
              Itineraries
            </h2>
            <p style={{ color: "#142F2E", marginBottom: "1.5rem" }}>
              View your upcoming bookings and detailed travel plans.
            </p>
            {itineraries.length > 0 ? (
              <div>
                {itineraries.map((itinerary) => (
                  <div key={itinerary.id} style={styles.listItem}>
                    <div>
                      <h5 style={{ color: "#142F2E", marginBottom: "0.5rem" }}>
                        {itinerary.title}
                      </h5>
                      <small
                        style={{
                          color: "#6c757d",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Dates: {itinerary.dates}
                      </small>
                      <small style={{ color: "#6c757d" }}>
                        Created: {formatDate(itinerary.createdAt)}
                      </small>
                    </div>
                    <span
                      style={{
                        backgroundColor: getStatusColor(itinerary.status),
                        color: "#FFFFFF",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {itinerary.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>No upcoming itineraries.</p>
            )}
          </div>
        );

      case "privileges":
        return (
          <div style={styles.card}>
            <h2 style={{ color: "#F8CD4D", marginBottom: "1rem" }}>
              Privileges
            </h2>
            <p style={{ color: "#142F2E", marginBottom: "1.5rem" }}>
              Explore your current perks and exclusive offers as a S'CLUSIVE
              member.
            </p>
            {privileges.length > 0 ? (
              <div>
                {privileges.map((priv) => (
                  <div key={priv.id} style={styles.listItem}>
                    <div>
                      <h5 style={{ color: "#142F2E", marginBottom: "0.5rem" }}>
                        {priv.title}
                      </h5>
                      <small style={{ color: "#6c757d" }}>
                        {priv.description}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#142F2E" }}>
                No special privileges currently available.
              </p>
            )}
          </div>
        );

      case "messaging":
        return (
          <div style={styles.card}>
            <h2 style={{ color: "#F8CD4D", marginBottom: "1rem" }}>
              Messaging
            </h2>
            <p style={{ color: "#142F2E", marginBottom: "1.5rem" }}>
              Direct chat with your dedicated lifestyle manager.
            </p>
            <div
              style={{
                border: "2px solid #e9ecef",
                borderRadius: "8px",
                padding: "1.5rem",
                minHeight: "200px",
                backgroundColor: "#f8f9fa",
                marginBottom: "1rem",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {messages.length > 0 ? (
                <div>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      style={{
                        marginBottom: "1rem",
                        padding: "0.5rem",
                        backgroundColor:
                          msg.sender === "client" ? "#e3f2fd" : "#fff3e0",
                        borderRadius: "8px",
                        borderLeft: `4px solid ${
                          msg.sender === "client" ? "#2196f3" : "#ff9800"
                        }`,
                      }}
                    >
                      <small style={{ color: "#6c757d", fontSize: "12px" }}>
                        {msg.sender === "client" ? "You" : "Support"} -{" "}
                        {formatDate(msg.createdAt)}
                      </small>
                      <p style={{ margin: "0.5rem 0 0 0", color: "#142F2E" }}>
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    color: "#6c757d",
                    textAlign: "center",
                    marginTop: "4rem",
                  }}
                >
                  No messages yet. Start a conversation with your lifestyle
                  manager.
                </p>
              )}
            </div>
            <div>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message..."
                style={{
                  ...styles.formControl,
                  ...styles.textarea,
                }}
              />
              <button
                style={{ ...styles.btn, ...styles.btnPrimary, width: "100%" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#e0b43e")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#F8CD4D")
                }
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
        );

      case "account":
        return (
          <div style={styles.card}>
            <h2 style={{ color: "#F8CD4D", marginBottom: "1rem" }}>
              Account Settings
            </h2>
            <p style={{ color: "#142F2E", marginBottom: "1.5rem" }}>
              Manage your personal information and preferences.
            </p>
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "#142F2E",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={accountData.name}
                  onChange={(e) => handleAccountUpdate("name", e.target.value)}
                  style={styles.formControl}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "#142F2E",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={accountData.email}
                  onChange={(e) => handleAccountUpdate("email", e.target.value)}
                  style={styles.formControl}
                  disabled
                />
                <small style={{ color: "#6c757d" }}>
                  Email cannot be changed. Contact support if you need to update
                  your email.
                </small>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "#142F2E",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  value={accountData.phone}
                  onChange={(e) => handleAccountUpdate("phone", e.target.value)}
                  style={styles.formControl}
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "#142F2E",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Preferences
                </label>
                <textarea
                  value={accountData.preferences}
                  onChange={(e) =>
                    handleAccountUpdate("preferences", e.target.value)
                  }
                  placeholder="Tell us about your preferences (dietary restrictions, seating preferences, etc.)"
                  style={{
                    ...styles.formControl,
                    ...styles.textarea,
                  }}
                />
              </div>
              <button
                style={{ ...styles.btn, ...styles.btnPrimary }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#e0b43e")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#F8CD4D")
                }
                onClick={saveAccountChanges}
              >
                Save Changes
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#8EABA9",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              color: "#142F2E",
              fontFamily: "serif",
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "700",
              margin: 0,
            }}
          >
            Welcome, {accountData.name || "Valued Member"}!
          </h1>
          <button
            onClick={handleLogout}
            style={{
              ...styles.btn,
              ...styles.btnOutline,
              padding: "8px 16px",
              fontSize: "14px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#142F2E";
              e.target.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#142F2E";
            }}
          >
            Logout
          </button>
        </div>

        <div style={styles.row}>
          <div style={styles.col3}>
            <nav style={styles.nav}>
              {[
                { key: "requests", label: "My Requests" },
                { key: "itineraries", label: "Itineraries" },
                { key: "privileges", label: "Privileges" },
                { key: "messaging", label: "Messaging" },
                { key: "account", label: "Account Settings" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  style={{
                    ...styles.navItem,
                    ...(activeTab === item.key ? styles.navItemActive : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== item.key) {
                      e.target.style.backgroundColor = "#8EABA9";
                      e.target.style.color = "#142F2E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== item.key) {
                      e.target.style.backgroundColor = "#FFFFFF";
                      e.target.style.color = "#142F2E";
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div style={styles.col9}>{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
