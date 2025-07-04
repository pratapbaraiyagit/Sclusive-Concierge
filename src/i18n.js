// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Navigation
      Home: "Home",
      About: "About",
      "About Us": "About Us",
      "Signature Services": "Signature Services",
      "Client Portal": "Client Portal",
      "Client Portal Login": "Client Portal Login",
      "Contact Us": "Contact Us",
      "Contact us": "Contact us",

      // Hero Section
      "Experience bespoke concierge":
        "Experience bespoke concierge services tailored to your lifestyle",
      "services tailored to your lifestyle":
        "services tailored to your lifestyle",
      "Benefits of concierge services": "Benefits of concierge services",
      "Private Concierge S'Clusive": "Private Concierge S'Clusive",
      "A life of effortless elegance": "A life of effortless elegance",
      "S'Clusive offers ultra-personalized, discreet, and world-class lifestyle management to those who demand the extraordinary. Our services provide privileged access to a life of seamless elegance.":
        "S'Clusive offers ultra-personalized, discreet, and world-class lifestyle management to those who demand the extraordinary. Our services provide privileged access to a life of seamless elegance.",
      "Our Services": "Our Services",
      "Learn More": "Learn More",

      // Services
      "Personal Shopping": "Personal Shopping",
      "Event Planning & VIP Access": "Event Planning & VIP Access",
      "Event Planning & VIP Event Access": "Event Planning & VIP Event Access",
      "Luxury Travel & Stay": "Luxury Travel & Stay",
      "Corporate Concierge": "Corporate Concierge",
      "Wellness & Lifestyle Management": "Wellness & Lifestyle Management",
      "At S’Clusive, we don’t just plan, we anticipate your every desire. Our mission is to simplify the extraordinary!":
        "At S’Clusive, we don’t just plan, we anticipate your every desire. Our mission is to simplify the extraordinary!",

      // About Section
      "Our Brand Story": "Our Brand Story",
      "Founded on the belief that premium services should be seamless, S'Clusive brings decades of elite expertise to its clients.":
        "Founded on the belief that premium services should be seamless, S'Clusive brings decades of elite expertise to its clients.",
      "As dedicated partners, we are more than just a concierge service - we are your privileged access to a life without limits.":
        "As dedicated partners, we are more than just a concierge service - we are your privileged access to a life without limits.",
      "At S'Clusive, we don't just plan, we anticipate. We don't just serve, we orchestrate. Our mission is to simplify the extraordinary.":
        "At S'Clusive, we don't just plan, we anticipate. We don't just serve, we orchestrate. Our mission is to simplify the extraordinary.",
      "Our Vision": "Our Vision",
      "Our Values": "Our Values",
      "Our Bespoke Services": "Our Bespoke Services",
      "Become a S'CLUSIVE Member": "Become a S'CLUSIVE Member",
      "We'd Love to Hear From You": "We'd Love to Hear From You",
      Story: "Story",
      "Our team is committed to anticipating your needs, ensuring discretion, and transforming every request into an exceptional experience.":
        "Our team is committed to anticipating your needs, ensuring discretion, and transforming every request into an exceptional experience.",
      "Your privileged access to a life without limits.":
        "Your privileged access to a life without limits.",
      "Our Brand": "Our Brand",
      // Our: "Our",
      "The Co-Founders of S'clusive": "The Co-Founders of S'clusive",
      "These principles guide every interaction and decision we make, ensuring excellence in all aspects of our service.":
        "These principles guide every interaction and decision we make, ensuring excellence in all aspects of our service.",

      // Values
      "Total Discretion": "Total Discretion",
      "Personalized Services": "Personalized Services",
      "Impeccable Taste": "Impeccable Taste",
      "Global Reach, Local Refinement": "Global Reach, Local Refinement",

      // Experience
      "A seamless and premium experience from start to finish":
        "A seamless and premium experience from start to finish",
      Testimonials: "Testimonials",
      "The team at S'Clusive anticipated our every need before we even had to ask.":
        "The team at S'Clusive anticipated our every need before we even had to ask.",
      "A seamless, first-class experience from start to finish.":
        "A seamless, first-class experience from start to finish.",
      "S'Clusive couldn't have planned our trip better. Everything was perfect!":
        "S'Clusive couldn't have planned our trip better. Everything was perfect!",
      "— Distinguished Member": "— Distinguished Member",
      "— Executive Client": "— Executive Client",
      "— Private Member": "— Private Member",

      // Form
      "Want to enquire about our services?":
        "Want to enquire about our services?",
      "Fill out the form below.": "Fill out the form below.",
      "We will get back to you within 24 hours.":
        "We will get back to you within 24 hours.",
      "Send Us a Message": "Send Us a Message",
      "Please use the form below for general inquiries or partnership opportunities. We aim to respond within 24 hours.":
        "Please use the form below for general inquiries or partnership opportunities. We aim to respond within 24 hours.",
      "Full Name *": "Full Name *",
      "Enter your full name": "Enter your full name",
      "Email Address *": "Email Address *",
      "Enter your email address": "Enter your email address",
      "Phone Number": "Phone Number",
      "Enter your phone number (optional)":
        "Enter your phone number (optional)",
      "Your Message *": "Your Message *",
      "Tell us about your needs and how we can assist you...":
        "Tell us about your needs and how we can assist you...",
      "Attach File (Optional)": "Attach File (Optional)",
      "Choose File": "Choose File",
      "No file chosen": "No file chosen",
      "Max file size 5MB (PDF, JPG, PNG, DOC)":
        "Max file size 5MB (PDF, JPG, PNG, DOC)",
      "Send Message": "Send Message",

      // CTA
      "Do you want quick assistance?": "Do you want quick assistance?",
      "Ready to start your adventure with S'CLUSIVE?":
        "Ready to start your adventure with S'CLUSIVE?",
      "Ready to experience the unparalleled?":
        "Ready to experience the unparalleled?",
      "Experience the Extraordinary": "Experience the Extraordinary",
      "Enquire Now": "Enquire Now",
      "Discover how S'Clusive can simplify your life. Your journey to a life without limits starts here.":
        "Discover how S'Clusive can simplify your life. Your journey to a life without limits starts here.",
      "Ready to Experience Unparalleled Luxury?":
        "Ready to Experience Unparalleled Luxury?",
      "Learn more about how S'CLUSIVE can simplify the extraordinary for you. Your journey to a life without limits begins here.":
        "Learn more about how S'CLUSIVE can simplify the extraordinary for you. Your journey to a life without limits begins here.",
      "Contact Us Today": "Contact Us Today",
      "Explore Our Services": "Explore Our Services",
      "Discover the story behind S'Clusive — a world where discretion, personalization, and excellence are our standards.":
        "Discover the story behind S'Clusive — a world where discretion, personalization, and excellence are our standards.",

      // Client Area
      "Client Area": "Client Area",
      "Access your private client account":
        "Access your private client account",
      "Submit and track your requests with your dedicated concierge.":
        "Submit and track your requests with your dedicated concierge.",
      "Access your dashboard": "Access your dashboard",
      "Submit and track your service needs with your lifestyle manager.":
        "Submit and track your service needs with your lifestyle manager.",

      // Company Info
      "Private Concierge": "Private Concierge",
      "Elevating the luxury experience": "Elevating the luxury experience",

      // Welcome
      "Welcome to the website": "Welcome to the website",
      "This is a multilingual site. Use the dropdown to switch languages.":
        "This is a multilingual site. Use the dropdown to switch languages.",

      // Services Page
      Services: "Services",
      Bespoke: "Bespoke",
      "We take pride in offering bespoke services tailored to your unique needs. Whether you require a restaurant reservation, a ticket to an exclusive event, a VIP transfer by car or private jet, or even full vacation planning, we are here to assist you.":
        "We take pride in offering bespoke services tailored to your unique needs. Whether you require a restaurant reservation, a ticket to an exclusive event, a VIP transfer by car or private jet, or even full vacation planning, we are here to assist you.",
      "Discover the art of exclusive living with S'CLUSIVE.":
        "Discover the art of exclusive living with S'CLUSIVE.",
      "A World of Possibilities at Your": "A World of Possibilities at Your",
      Fingertips: "Fingertips",
      "Our comprehensive suite of services is designed to anticipate your every need and transform your desires into extraordinary experiences.":
        "Our comprehensive suite of services is designed to anticipate your every need and transform your desires into extraordinary experiences.",

      // Service Categories
      "Lifestyle Management": "Lifestyle Management",
      "From daily essentials to rare requests, we make the impossible feel effortless with our comprehensive lifestyle management services.":
        "From daily essentials to rare requests, we make the impossible feel effortless with our comprehensive lifestyle management services.",
      "Personal Shopping (gifting, sourcing rare items)":
        "Personal Shopping (gifting, sourcing rare items)",
      "Reservations (restaurants, events, transportation)":
        "Reservations (restaurants, events, transportation)",
      "Real Estate (buying, selling, & managing properties)":
        "Real Estate (buying, selling, & managing properties)",
      "Private Staffing (Coach, Nanny, Private Chef)":
        "Private Staffing (Coach, Nanny, Private Chef)",
      "Interior Design & Architecture": "Interior Design & Architecture",

      "Exclusive Villas & Hotels, Private Jet Charter, curated journeys — we handle every detail of your travel experience.":
        "Exclusive Villas & Hotels, Private Jet Charter, curated journeys — we handle every detail of your travel experience.",
      "Reservations (flights, hotel, transportation)":
        "Reservations (flights, hotel, transportation)",
      "Tailored Trip Planning (work or personal)":
        "Tailored Trip Planning (work or personal)",
      "Michelin-Starred Restaurant Reservations":
        "Michelin-Starred Restaurant Reservations",
      "Seasonal & Long-Term Rentals": "Seasonal & Long-Term Rentals",
      "Private Jet & Yacht Charter Services":
        "Private Jet & Yacht Charter Services",

      "Event Planning": "Event Planning",
      "Whether it's a private dinner or a corporate gala, we plan moments to remember with flawless execution.":
        "Whether it's a private dinner or a corporate gala, we plan moments to remember with flawless execution.",

      "Elevate executive life with regular support, from business travel to personalized gifting and corporate event planning.":
        "Elevate executive life with regular support, from business travel to personalized gifting and corporate event planning.",

      // Service Features
      "What's Included:": "What's Included:",
      "- Show less": "- Show less",
      "more services": "more services",

      // Stats & Beyond Section
      Beyond: "Beyond",
      Expectations: "Expectations",
      "Our services extend far beyond the ordinary. From arranging private museum viewings to securing last-minute reservations at the world's most exclusive restaurants, we turn the impossible into reality.":
        "Our services extend far beyond the ordinary. From arranging private museum viewings to securing last-minute reservations at the world's most exclusive restaurants, we turn the impossible into reality.",
      "Global Support": "Global Support",
      "Countries Served": "Countries Served",
      "Success Rate": "Success Rate",

      // CTA
      "Ready to Experience": "Ready to Experience",
      Unparalleled: "Unparalleled",
      "Luxury?": "Luxury?",
      "Our team is ready to curate your next extraordinary moment. Let us transform your vision into an unforgettable reality.":
        "Our team is ready to curate your next extraordinary moment. Let us transform your vision into an unforgettable reality.",
      "Start Your Request": "Start Your Request",
      "Speak to an Advisor": "Speak to an Advisor",

      // Membership Page
      "Become a": "Become a",
      Member: "Member",
      "Access a world of unparalleled luxury and personalized service. Experience the ultimate in convenience, access, and discretion.":
        "Access a world of unparalleled luxury and personalized service. Experience the ultimate in convenience, access, and discretion.",
      "View Membership Tiers": "View Membership Tiers",
      "Why Choose": "Why Choose",
      "S'Clusive membership opens the door to a universe of tailored experiences, global connections, and dedicated support that transforms how you live.":
        "S'Clusive membership opens the door to a universe of tailored experiences, global connections, and dedicated support that transforms how you live.",

      // Membership Benefits
      "Dedicated Concierge": "Dedicated Concierge",
      "A single point of contact available to anticipate and fulfill your every need, 24/7 worldwide support.":
        "A single point of contact available to anticipate and fulfill your every need, 24/7 worldwide support.",
      "Exclusive Access": "Exclusive Access",
      "Gain privileged entry to sold-out events, private clubs, and bespoke opportunities worldwide.":
        "Gain privileged entry to sold-out events, private clubs, and bespoke opportunities worldwide.",
      "Global Network": "Global Network",
      "Leverage our extensive network of luxury partners, from private jet charters to Michelin-starred chefs.":
        "Leverage our extensive network of luxury partners, from private jet charters to Michelin-starred chefs.",
      "Unrivaled Discretion": "Unrivaled Discretion",
      "All services are delivered with the utmost confidentiality and professionalism.":
        "All services are delivered with the utmost confidentiality and professionalism.",

      // Membership Tiers
      "Choose Your": "Choose Your",
      Experience: "Experience",
      "Select the membership tier that perfectly aligns with your lifestyle and aspirations.":
        "Select the membership tier that perfectly aligns with your lifestyle and aspirations.",
      Essentiel: "Essentiel",
      "Convenience and Class": "Convenience and Class",
      "/year": "/year",
      "Dedicated Concierge Support": "Dedicated Concierge Support",
      "Priority Reservations": "Priority Reservations",
      "Access to Core Services": "Access to Core Services",
      "Business Hours Support": "Business Hours Support",
      "24/7 Global Support": "24/7 Global Support",
      "VIP Event Invitations": "VIP Event Invitations",
      "Personal Shopping Services": "Personal Shopping Services",
      "Get Started": "Get Started",
      "Perfect for those seeking essential luxury services with professional concierge support.":
        "Perfect for those seeking essential luxury services with professional concierge support.",
      Signature: "Signature",
      "Elevated, 24/7 VIP Support": "Elevated, 24/7 VIP Support",
      "Access to All Core Services": "Access to All Core Services",
      "Curated Travel Planning": "Curated Travel Planning",
      "Most Popular": "Most Popular",
      "Our most comprehensive package with full access to luxury lifestyle management.":
        "Our most comprehensive package with full access to luxury lifestyle management.",
      Privée: "Privée",
      "Discreet, Ultra-Luxury Access": "Discreet, Ultra-Luxury Access",
      "By Invitation": "By Invitation",
      "Bespoke Concierge & Management": "Bespoke Concierge & Management",
      "Unrestricted Global Access": "Unrestricted Global Access",
      "Off-Market Opportunities": "Off-Market Opportunities",
      "Dedicated Elite Team": "Dedicated Elite Team",
      "Crisis Management & Security": "Crisis Management & Security",
      "Exclusive Partnership Benefits": "Exclusive Partnership Benefits",
      "Ultra-Luxury Experiences": "Ultra-Luxury Experiences",
      "Request Invitation": "Request Invitation",
      "The pinnacle of luxury lifestyle management for discerning individuals.":
        "The pinnacle of luxury lifestyle management for discerning individuals.",
      "MOST POPULAR": "MOST POPULAR",
      "Need help choosing the right membership tier?":
        "Need help choosing the right membership tier?",
      "Trusted by Discerning Individuals Worldwide":
        "Trusted by Discerning Individuals Worldwide",
      "S'CLUSIVE has transformed how I experience luxury. Their attention to detail and ability to anticipate my needs before I even express them is simply extraordinary. It's not just a service—it's a partnership in living life to the fullest.":
        "S'CLUSIVE has transformed how I experience luxury. Their attention to detail and ability to anticipate my needs before I even express them is simply extraordinary. It's not just a service—it's a partnership in living life to the fullest.",
      "Distinguished S'CLUSIVE Member": "Distinguished S'CLUSIVE Member",
      "Ready to": "Ready to",
      Elevate: "Elevate",
      "Your Lifestyle?": "Your Lifestyle?",
      "Join the exclusive circle of S'CLUSIVE members and discover what it means to live without limits. Your extraordinary journey begins with a single step.":
        "Join the exclusive circle of S'CLUSIVE members and discover what it means to live without limits. Your extraordinary journey begins with a single step.",
      "Start Your Application": "Start Your Application",
      "Speak with an Advisor": "Speak with an Advisor",
      "Membership applications are reviewed within 48 hours":
        "Membership applications are reviewed within 48 hours",

      // Contact Page
      "We'd Love to": "We'd Love to",
      Hear: "Hear",
      "From You": "From You",
      "Send Us a": "Send Us a",
      Message: "Message",
      "Thank you for your message! We will get back to you within 24 hours.":
        "Thank you for your message! We will get back to you within 24 hours.",
      "Ready to": "Ready to",
      Connect: "Connect",
      "Available 24/7 for your convenience":
        "Available 24/7 for your convenience",
      "Prefer to Contact Us Directly?": "Prefer to Contact Us Directly?",
      "Choose your preferred method of communication for immediate assistance.":
        "Choose your preferred method of communication for immediate assistance.",
      "Email Support": "Email Support",
      "Send us detailed inquiries via email. Ideal for complex requests and formal communications.":
        "Send us detailed inquiries via email. Ideal for complex requests and formal communications.",
      "Send Email": "Send Email",
      "Phone Consultation": "Phone Consultation",
      "Speak directly with our concierge team. Schedule a call to discuss your specific requirements.":
        "Speak directly with our concierge team. Schedule a call to discuss your specific requirements.",
      "Ready to Begin Your": "Ready to Begin Your S'CLUSIVE Journey?",
      "Journey?": "Journey?",
      "We look forward to assisting you and creating extraordinary experiences.":
        "We look forward to assisting you and creating extraordinary experiences.",
      "View Services": "View Services",

      // Footer
      "Luxury Concierge Services": "Luxury Concierge Services",
      "Quick Links": "Quick Links",
      Membership: "Membership",
      Dashboard: "Dashboard",
      "Follow Us": "Follow Us",
      "All rights reserved": "All rights reserved",
      "Elevating Luxury Experiences": "Elevating Luxury Experiences",

      // Client Login
      "Email address": "Email address",
      "Enter email": "Enter email",
      Password: "Password",
      "Show password": "Show password",
      "Hide password": "Hide password",
      "Please enter both email and password":
        "Please enter both email and password",
      "Failed to log in. Please check your credentials.":
        "Failed to log in. Please check your credentials.",
      Login: "Login",
      "Logging in...": "Logging in...",
      "Forgot Password?": "Forgot Password?",
      "Request Access": "Request Access",

      // Forgot Password
      "Enter your email address and we'll send you a link to reset your password.":
        "Enter your email address and we'll send you a link to reset your password.",
      "Failed to send password reset email. Please check your email address.":
        "Failed to send password reset email. Please check your email address.",
      "Send Reset Link": "Send Reset Link",
      "Sending...": "Sending...",
      "Reset link sent! Please check your email for further instructions.":
        "Reset link sent! Please check your email for further instructions.",
      "Back to Login": "Back to Login",

      // Request Access
      "Complete the form below to request access to our exclusive client portal.":
        "Complete the form below to request access to our exclusive client portal.",
      "Password *": "Password *",
      "Confirm Password *": "Confirm Password *",
      "Company (Optional)": "Company (Optional)",
      "Tell us about your concierge needs...":
        "Tell us about your concierge needs...",
      "Show confirm password": "Show confirm password",
      "Hide confirm password": "Hide confirm password",
      "Passwords do not match": "Passwords do not match",
      "Password must be at least 6 characters long":
        "Password must be at least 6 characters long",
      "An account with this email already exists":
        "An account with this email already exists",
      "Failed to create account. Please try again.":
        "Failed to create account. Please try again.",
      "Creating Account...": "Creating Account...",
      "Submit Request": "Submit Request",
      "Your account has been created successfully! You can now log in to access your dashboard.":
        "Your account has been created successfully! You can now log in to access your dashboard.",

      // Client Dashboard
      Welcome: "Welcome",
      "Valued Member": "Valued Member",
      Logout: "Logout",
      "My Requests": "My Requests",
      Itineraries: "Itineraries",
      Privileges: "Privileges",
      Messaging: "Messaging",
      "Account Settings": "Account Settings",
      "Submit New Request": "Submit New Request",
      "New Request": "New Request",
      "Select Request Type *": "Select Request Type *",
      "Travel Booking": "Travel Booking",
      "Restaurant Reservation": "Restaurant Reservation",
      Transportation: "Transportation",
      Other: "Other",
      "Describe your request in detail...":
        "Describe your request in detail...",
      Cancel: "Cancel",
      "Please fill in all required fields":
        "Please fill in all required fields",
      "Request submitted successfully!": "Request submitted successfully!",
      "Failed to submit request. Please try again.":
        "Failed to submit request. Please try again.",
      "Loading requests...": "Loading requests...",
      Created: "Created",
      Pending: "Pending",
      Confirmed: "Confirmed",
      "In Progress": "In Progress",
      Booked: "Booked",
      "No active requests found.": "No active requests found.",
      "View your upcoming bookings and detailed travel plans.":
        "View your upcoming bookings and detailed travel plans.",
      Dates: "Dates",
      "No upcoming itineraries.": "No upcoming itineraries.",
      "Explore your current perks and exclusive offers as a S'CLUSIVE member.":
        "Explore your current perks and exclusive offers as a S'CLUSIVE member.",
      "No special privileges currently available.":
        "No special privileges currently available.",
      "Direct chat with your dedicated lifestyle manager.":
        "Direct chat with your dedicated lifestyle manager.",
      You: "You",
      Support: "Support",
      "No messages yet. Start a conversation with your lifestyle manager.":
        "No messages yet. Start a conversation with your lifestyle manager.",
      "Type your message...": "Type your message...",
      "Failed to send message. Please try again.":
        "Failed to send message. Please try again.",
      "Manage your personal information and preferences.":
        "Manage your personal information and preferences.",
      "Full Name": "Full Name",
      Email: "Email",
      "Email cannot be changed. Contact support if you need to update your email.":
        "Email cannot be changed. Contact support if you need to update your email.",
      Phone: "Phone",
      Preferences: "Preferences",
      "Tell us about your preferences (dietary restrictions, seating preferences, etc.)":
        "Tell us about your preferences (dietary restrictions, seating preferences, etc.)",
      "Save Changes": "Save Changes",
      "Account updated successfully!": "Account updated successfully!",
      "Failed to update account. Please try again.":
        "Failed to update account. Please try again.",

      // Language
      Language: "Language",
    },
  },
  fr: {
    translation: {
      // Navigation
      Home: "Accueil",
      About: "Découvrir",
      "About Us": "Notre Histoire",
      "Signature Services": "Nos Services Signature",
      "Client Portal": "Espace Client",
      "Client Portal Login": "Connexion Espace Client",
      "Contact Us": "Contactez-nous",
      "Contact us": "Contactez-nous",

      // Hero Section
      "Experience bespoke concierge":
        "Bénéficiez de services de conciergerie sur mesure, adaptés à votre style de vie.",
      "services tailored to your lifestyle": "adaptée à votre style de vie",
      "Benefits of concierge services": "Bénéficiez… de conciergerie",
      "Private Concierge S'Clusive": "La conciergerie privée S'Clusive",
      "A life of effortless elegance": "une vie d'élégance sans effort",
      "S'Clusive offers ultra-personalized, discreet, and world-class lifestyle management to those who demand the extraordinary. Our services provide privileged access to a life of seamless elegance.":
        "S'Clusive offre un accompagnement personnalisé, discret et de classe mondiale à ceux qui recherchent l'extraordinaire. Nos services offrent un accès privilégié à une vie d'élégance harmonieuse.",
      "Our Services": "Nos Services",
      "Learn More": "En Savoir Plus",

      // Services
      "Personal Shopping": "Personal Shopping",
      "Event Planning & VIP Access": "Organisation d'événements & Accès VIP",
      "Event Planning & VIP Event Access":
        "Organisation d'événements & Accès VIP",
      "Luxury Travel & Stay": "Voyages de Luxe & Séjours",
      "Corporate Concierge": "Conciergerie d'Entreprise",
      "Wellness & Lifestyle Management": "Bien être & Gestion de Style de Vie",

      // About Section
      "Our Brand Story": "Notre Histoire de Marque",
      "Founded on the belief that premium services should be seamless, S'Clusive brings decades of elite expertise to its clients.":
        "Fondée sur la conviction que les services haut de gamme doivent être transparents, S'Clusive apporte des décennies d'expertise d'élite à ses clients.",
      "As dedicated partners, we are more than just a concierge service - we are your privileged access to a life without limits.":
        "En tant que partenaires dévoués, nous sommes plus qu'un simple service de conciergerie - nous sommes votre accès privilégié à une vie sans limites.",
      "At S'Clusive, we don't just plan, we anticipate. We don't just serve, we orchestrate. Our mission is to simplify the extraordinary.":
        "Chez S'Clusive, nous ne faisons pas que planifier, nous anticipons. Nous ne faisons pas que servir, nous orchestrons. Notre mission est de simplifier l'extraordinaire.",
      "Our Vision": "Notre Vision",
      "Our Values": "Nos Valeurs",
      "Become a S'CLUSIVE Member": "Devenez Membre de S'CLUSIVE",
      "Our Bespoke Services": "Nos Services Sur Mesure",
      "We'd Love to Hear From You": "Nous Aimerions Avoir De Vos Nouvelles",
      Story: "Histoire",
      "Our team is committed to anticipating your needs, ensuring discretion, and transforming every request into an exceptional experience.":
        "Notre équipe s'engage à anticiper vos besoins, assurer la discrétion et transformer chaque demande en une expérience exceptionnelle.",
      "Your privileged access to a life without limits.":
        "Votre accès privilégié à une vie sans limites.",
      "Our Brand": "Notre",
      Our: "Notre",
      "The Co-Founders of S'clusive": "Les Co-Fondateurs de S'clusive",
      "These principles guide every interaction and decision we make, ensuring excellence in all aspects of our service.":
        "Ces principes guident chaque interaction et décision que nous prenons, assurant l'excellence dans tous les aspects de notre service.",
      "As dedicated lifestyle partners, we're more than just a concierge service—we're your gateway to a life without limits.":
        "En tant que partenaires de style de vie dévoués, nous sommes plus qu'un simple service de conciergerie - nous sommes votre porte d'entrée vers une vie sans limites.",

      // Values
      "Total Discretion": "Discrétion Totale",
      "Personalized Services": "Services Personnalisés",
      "Impeccable Taste": "Goût Impeccable",
      "Global Reach, Local Refinement": "Présence mondiale, raffinement local",

      // Experience
      "A seamless and premium experience from start to finish":
        "Une expérience fluide et haut de gamme du début à la fin",
      Testimonials: "Témoignages",
      "The team at S'Clusive anticipated our every need before we even had to ask.":
        "L'équipe de S'Clusive a anticipé tous nos besoins avant même que nous ayons à demander.",
      "A seamless, first-class experience from start to finish.":
        "Une expérience fluide et haut de gamme du début à la fin.",
      "S'Clusive couldn't have planned our trip better. Everything was perfect!":
        "S'Clusive n'aurait pas pu mieux planifier notre voyage. Tout était parfait!",
      "— Distinguished Member": "— Membre Distingué",
      "— Executive Client": "— Client Exécutif",
      "— Private Member": "— Membre Privé",

      // Form
      "Want to enquire about our services?":
        "Vous souhaitez vous renseigner sur nos services?",
      "Fill out the form below.": "Remplissez le formulaire ci-dessous.",
      "We will get back to you within 24 hours.":
        "Nous vous répondrons dans les 24 heures.",
      "Send Us a Message": "Envoyez-nous un Message",
      "Please use the form below for general inquiries or partnership opportunities. We aim to respond within 24 hours.":
        "Veuillez utiliser le formulaire ci-dessous pour les demandes générales ou les opportunités de partenariat. Nous visons à répondre dans les 24 heures.",
      "Full Name *": "Nom et prénom *",
      "Enter your full name": "Entrez votre nom complet",
      "Email Address *": "Adresse Email *",
      "Enter your email address": "Entrez votre adresse email",
      "Phone Number": "Numéro de Téléphone",
      "Enter your phone number (optional)":
        "Entrez votre numéro de téléphone (optionnel)",
      "Your Message *": "Votre Message *",
      "Tell us about your needs and how we can assist you...":
        "Parlez-nous de vos besoins et de la façon dont nous pouvons vous aider...",
      "Attach File (Optional)": "Joindre un Fichier (Optionnel)",
      "Choose File": "Choisir un fichier",
      "No file chosen": "Aucun fichier choisi",
      "Max file size 5MB (PDF, JPG, PNG, DOC)":
        "Taille max 5MB (PDF, JPG, PNG, DOC)",
      "Send Message": "Envoyer le Message",

      // CTA
      "Do you want quick assistance?":
        "Vous souhaitez obtenir une assistance rapide ?",
      "Ready to start your adventure with S'CLUSIVE?":
        "Prêt à commencer votre aventure avec S'CLUSIVE?",
      "Ready to experience the unparalleled?":
        "Prêt à vivre une expérience inégalée?",
      "Experience the Extraordinary": "Vivez l'Extraordinaire",
      "Enquire Now": "Renseignez-vous Maintenant",
      "Discover how S'Clusive can simplify your life. Your journey to a life without limits starts here.":
        "Découvrez comment S'Clusive peut vous simplifier la vie. Votre voyage vers une vie sans limites commence ici.",
      "Ready to Experience Unparalleled Luxury?":
        "Prêt à Vivre un Luxe Inégalé?",
      "Learn more about how S'CLUSIVE can simplify the extraordinary for you. Your journey to a life without limits begins here.":
        "Découvrez comment S'CLUSIVE peut simplifier l'extraordinaire pour vous. Votre voyage vers une vie sans limites commence ici.",
      "Contact Us Today": "Contactez-nous Aujourd'hui",
      "Explore Our Services": "Explorez Nos Services",
      "Discover the story behind S'Clusive — a world where discretion, personalization, and excellence are our standards.":
        "Découvrez l'histoire derrière S'Clusive — un monde où la discrétion, la personnalisation et l'excellence sont nos standards.",

      // Client Area
      "Client Area": "Espace Client",
      "Access your private client account":
        "Accédez à votre compte client privé",
      "Submit and track your requests with your dedicated concierge.":
        "Soumettez et suivez vos demandes avec votre concierge dédié.",
      "Access your dashboard": "Accédez à votre tableau de bord",
      "Submit and track your service needs with your lifestyle manager.":
        "Soumettez et suivez vos besoins de service avec votre gestionnaire de style de vie.",
      "At S’Clusive, we don’t just plan, we anticipate your every desire. Our mission is to simplify the extraordinary!":
        "Chez S’Clusive, nous ne faisons pas que planifier, nous anticipons chacun de vos désirs. Notre mission est de simplifier l’extraordinaire !",
      "Discover how S'CLUSIVE can simplify the extraordinary for you. Your journey to a life without limits starts here.":
        "Découvrez comment S'CLUSIVE peut simplifier l'extraordinaire pour vous. Votre voyage vers une vie sans limites commence ici.",

      // Company Info
      "Private Concierge": "Conciergerie Privée",
      "Elevating the luxury experience":
        "Sublimer l'expérience du haut de gamme",

      // Welcome
      "Welcome to the website": "Bienvenue sur le site web",
      "This is a multilingual site. Use the dropdown to switch languages.":
        "Ceci est un site multilingue. Utilisez le menu déroulant pour changer de langue.",

      // Services Page
      Services: "Services",
      Bespoke: "Sur Mesure",
      "We take pride in offering bespoke services tailored to your unique needs. Whether you require a restaurant reservation, a ticket to an exclusive event, a VIP transfer by car or private jet, or even full vacation planning, we are here to assist you.":
        "Nous sommes fiers de vous proposer des services sur mesure, adaptés à vos besoins spécifiques. Que vous ayez besoin d'une réservation de restaurant, d'un billet pour un événement exclusif, d'un transfert VIP en voiture ou en jet privé, ou même d'une planification complète de vos vacances, nous sommes là pour vous accompagner.",
      "Discover the art of exclusive living with S'CLUSIVE.":
        "Découvrez l'art de vivre exclusif avec S'CLUSIVE.",
      "A World of Possibilities at Your":
        "Un Monde de Possibilités à Portée de",
      Fingertips: "Main",
      "Our comprehensive suite of services is designed to anticipate your every need and transform your desires into extraordinary experiences.":
        "Notre gamme complète de services est conçue pour anticiper tous vos besoins et transformer vos désirs en expériences extraordinaires.",

      // Service Categories
      "Lifestyle Management": "Gestion de Style de Vie",
      "From daily essentials to rare requests, we make the impossible feel effortless with our comprehensive lifestyle management services.":
        "Des besoins quotidiens essentiels aux demandes rares, nous faisons en sorte que l'impossible semble sans effort grâce à nos services complets de gestion du style de vie.",
      "Personal Shopping (gifting, sourcing rare items)":
        "Personal Shopping (cadeaux, recherche d'articles rares)",
      "Reservations (restaurants, events, transportation)":
        "Réservations (restaurants, événements, transport)",
      "Real Estate (buying, selling, & managing properties)":
        "Immobilier (achat, vente et gestion de propriétés)",
      "Private Staffing (Coach, Nanny, Private Chef)":
        "Personnel Privé (Coach, Nounou, Chef Privé)",
      "Interior Design & Architecture": "Design Intérieur et Architecture",

      "Exclusive Villas & Hotels, Private Jet Charter, curated journeys — we handle every detail of your travel experience.":
        "Villas et hôtels exclusifs, location de jet privé, voyages organisés : nous gérons chaque détail de votre expérience de voyage.",
      "Reservations (flights, hotel, transportation)":
        "Réservations (vols, hôtel, transport)",
      "Tailored Trip Planning (work or personal)":
        "Planification de Voyage Sur Mesure (professionnel ou personnel)",
      "Michelin-Starred Restaurant Reservations":
        "Réservations de Restaurants Étoilés Michelin",
      "Seasonal & Long-Term Rentals": "Locations Saisonnières et Long Terme",
      "Private Jet & Yacht Charter Services":
        "Services d'Affrètement de Jets Privés et Yachts",

      "Event Planning": "Organisation d'Événements",
      "Whether it's a private dinner or a corporate gala, we plan moments to remember with flawless execution.":
        "Qu'il s'agisse d'un dîner privé ou d'un gala d'entreprise, nous planifions des moments inoubliables avec une exécution sans faille.",

      "Elevate executive life with regular support, from business travel to personalized gifting and corporate event planning.":
        "Améliorez la vie des cadres grâce à un soutien régulier, des voyages d’affaires aux cadeaux personnalisés et à la planification d’événements d’entreprise.",

      // Service Features
      "What's Included:": "Ce qui est Inclus :",
      "- Show less": "- Voir moins",
      "more services": "autres services",

      // Stats & Beyond Section
      Beyond: "Au-delà des",
      Expectations: "Attentes",
      "Our services extend far beyond the ordinary. From arranging private museum viewings to securing last-minute reservations at the world's most exclusive restaurants, we turn the impossible into reality.":
        "Nos services vont bien au-delà de l'ordinaire. De l'organisation de visites privées de musées à la réservation de dernière minute dans les restaurants les plus exclusifs du monde, nous transformons l'impossible en réalité.",
      "Global Support": "Support Mondial",
      "Countries Served": "Pays Desservis",
      "Success Rate": "Taux de Réussite",

      // CTA
      "Ready to Experience": "Prêt à Vivre",
      Unparalleled: "Inégalé",
      "Luxury?": "Luxe ?",
      "Our team is ready to curate your next extraordinary moment. Let us transform your vision into an unforgettable reality.":
        "Notre équipe est prête à organiser votre prochain moment extraordinaire. Laissez-nous transformer votre vision en une réalité inoubliable.",
      "Start Your Request": "Commencer Votre Demande",
      "Speak to an Advisor": "Parler à un Conseiller",

      // Membership Page
      "Become a": "Devenez",
      Member: "Membre",
      "Access a world of unparalleled luxury and personalized service. Experience the ultimate in convenience, access, and discretion.":
        "Accédez à un univers de luxe inégalé et de services personnalisés. Vivez une expérience ultime en matière de confort, d'accessibilité et de discrétion.",
      "View Membership Tiers": "Voir les Niveaux d'Adhésion",
      "Why Choose": "Pourquoi Choisir",
      "S'Clusive membership opens the door to a universe of tailored experiences, global connections, and dedicated support that transforms how you live.":
        "L'adhésion S'Clusive ouvre la porte à un univers d'expériences sur mesure, de connexions mondiales et de soutien dévoué qui transforme votre façon de vivre.",

      // Membership Benefits
      "Dedicated Concierge": "Concierge dédié",
      "A single point of contact available to anticipate and fulfill your every need, 24/7 worldwide support.":
        "Un point de contact unique disponible pour anticiper et répondre à tous vos besoins, support mondial 24h/24 et 7j/7.",
      "Exclusive Access": "Accès Exclusif",
      "Gain privileged entry to sold-out events, private clubs, and bespoke opportunities worldwide.":
        "Obtenez un accès privilégié aux événements complets, aux clubs privés et aux opportunités sur mesure dans le monde entier.",
      "Global Network": "Réseau Mondial",
      "Leverage our extensive network of luxury partners, from private jet charters to Michelin-starred chefs.":
        "Tirez parti de notre vaste réseau de partenaires de luxe, des affrètements de jets privés aux chefs étoilés Michelin.",
      "Unrivaled Discretion": "Discrétion Inégalée",
      "All services are delivered with the utmost confidentiality and professionalism.":
        "Tous les services sont livrés avec la plus grande confidentialité et professionnalisme.",

      // Membership Tiers
      "Choose Your": "Choisissez Votre",
      Experience: "Expérience",
      "Select the membership tier that perfectly aligns with your lifestyle and aspirations.":
        "Sélectionnez le niveau d'adhésion qui s'aligne parfaitement avec votre style de vie et vos aspirations.",
      Essentiel: "Essentiel",
      "Convenience and Class": "Commodité et Classe",
      "/year": "/an",
      "Dedicated Concierge Support": "Support de Conciergerie Dédié",
      "Priority Reservations": "Réservations Prioritaires",
      "Access to Core Services": "Accès aux Services Essentiels",
      "Business Hours Support": "Support aux Heures d'Affaires",
      "24/7 Global Support": "Support Mondial 24h/24 et 7j/7",
      "VIP Event Invitations": "Invitations aux Événements VIP",
      "Personal Shopping Services": "Services de Personal Shopping",
      "Get Started": "Commencer",
      "Perfect for those seeking essential luxury services with professional concierge support.":
        "Parfait pour ceux qui recherchent des services de luxe essentiels avec un support de conciergerie professionnel.",
      Signature: "Signature",
      "Elevated, 24/7 VIP Support": "Support VIP Élevé, 24h/24 et 7j/7",
      "Access to All Core Services": "Accès à Tous les Services Essentiels",
      "Curated Travel Planning": "Planification de Voyage Organisée",
      "Most Popular": "Le Plus Populaire",
      "Our most comprehensive package with full access to luxury lifestyle management.":
        "Notre forfait le plus complet avec un accès complet à la gestion de style de vie de luxe.",
      Privée: "Privée",
      "Discreet, Ultra-Luxury Access": "Accès Ultra-Luxe Discret",
      "By Invitation": "Sur Invitation",
      "Bespoke Concierge & Management": "Conciergerie et Gestion Sur Mesure",
      "Unrestricted Global Access": "Accès Mondial Illimité",
      "Off-Market Opportunities": "Opportunités Hors Marché",
      "Dedicated Elite Team": "Équipe d'Élite Dédiée",
      "Crisis Management & Security": "Gestion de Crise et Sécurité",
      "Exclusive Partnership Benefits": "Avantages de Partenariat Exclusifs",
      "Ultra-Luxury Experiences": "Expériences Ultra-Luxe",
      "Request Invitation": "Demander une Invitation",
      "The pinnacle of luxury lifestyle management for discerning individuals.":
        "Le summum de la gestion de style de vie de luxe pour les individus exigeants.",
      "MOST POPULAR": "LE PLUS POPULAIRE",
      "Need help choosing the right membership tier?":
        "Besoin d'aide pour choisir le bon niveau d'adhésion ?",
      "Trusted by Discerning Individuals Worldwide":
        "Approuvé par des Individus Exigeants dans le Monde Entier",
      "S'CLUSIVE has transformed how I experience luxury. Their attention to detail and ability to anticipate my needs before I even express them is simply extraordinary. It's not just a service—it's a partnership in living life to the fullest.":
        "S'CLUSIVE a transformé ma façon de vivre le luxe. Leur attention aux détails et leur capacité à anticiper mes besoins avant même que je les exprime est tout simplement extraordinaire. Ce n'est pas juste un service — c'est un partenariat pour vivre pleinement la vie.",
      "Distinguished S'CLUSIVE Member": "Membre Distingué de S'CLUSIVE",
      "Ready to": "Prêt à",
      Elevate: "Élever",
      "Your Lifestyle?": "Votre Style de Vie ?",
      "Join the exclusive circle of S'CLUSIVE members and discover what it means to live without limits. Your extraordinary journey begins with a single step.":
        "Rejoignez le cercle exclusif des membres S'CLUSIVE et découvrez ce que signifie vivre sans limites. Votre voyage extraordinaire commence par un seul pas.",
      "Start Your Application": "Commencer Votre Candidature",
      "Speak with an Advisor": "Parler avec un Conseiller",
      "Membership applications are reviewed within 48 hours":
        "Les candidatures d'adhésion sont examinées dans les 48 heures",

      // Contact Page
      "We'd Love to": "Nous Aimerions",
      Hear: "Entendre",
      "From You": "De Votre Part",
      "Send Us a": "Envoyez-nous un",
      Message: "Message",
      "Thank you for your message! We will get back to you within 24 hours.":
        "Merci pour votre message ! Nous vous répondrons dans les 24 heures.",
      "Ready to": "Prêt à",
      Connect: "Vous Connecter",
      "Available 24/7 for your convenience":
        "Disponible 24h/24 et 7j/7 pour votre commodité",
      "Prefer to Contact Us Directly?":
        "Préférez-Vous Nous Contacter Directement?",
      "Choose your preferred method of communication for immediate assistance.":
        "Choisissez votre méthode de communication préférée pour une assistance immédiate.",
      "Email Support": "Support par Email",
      "Send us detailed inquiries via email. Ideal for complex requests and formal communications.":
        "Envoyez-nous des demandes détaillées par email. Idéal pour les demandes complexes et les communications formelles.",
      "Send Email": "Envoyer un Email",
      "Phone Consultation": "Consultation Téléphonique",
      "Speak directly with our concierge team. Schedule a call to discuss your specific requirements.":
        "Parlez directement avec notre équipe de conciergerie. Planifiez un appel pour discuter de vos exigences spécifiques.",
      "Ready to Begin Your": "Prêt à commencer votre aventure avec S’CLUSIVE?",
      "Journey?": "Voyage ?",
      "We look forward to assisting you and creating extraordinary experiences.":
        "Nous avons hâte de vous aider et de créer des expériences extraordinaires.",
      "View Services": "Voir les Services",

      // Footer
      "Luxury Concierge Services": "Services de Conciergerie de Luxe",
      "Quick Links": "Liens Rapides",
      Membership: "Adhésion",
      Dashboard: "Tableau de Bord",
      "Follow Us": "Suivez-nous",
      "All rights reserved": "Tous droits réservés",
      "Elevating Luxury Experiences": "Élever les Expériences de Luxe",

      // Client Login
      "Email address": "Adresse email",
      "Enter email": "Entrez votre email",
      Password: "Mot de passe",
      "Show password": "Afficher le mot de passe",
      "Hide password": "Masquer le mot de passe",
      "Please enter both email and password":
        "Veuillez entrer votre email et votre mot de passe",
      "Failed to log in. Please check your credentials.":
        "Échec de la connexion. Veuillez vérifier vos identifiants.",
      Login: "Se connecter",
      "Logging in...": "Connexion en cours...",
      "Forgot Password?": "Mot de passe oublié ?",
      "Request Access": "Demander l'accès",

      // Forgot Password
      "Enter your email address and we'll send you a link to reset your password.":
        "Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
      "Failed to send password reset email. Please check your email address.":
        "Échec de l'envoi de l'email de réinitialisation. Veuillez vérifier votre adresse email.",
      "Send Reset Link": "Envoyer le lien de réinitialisation",
      "Sending...": "Envoi en cours...",
      "Reset link sent! Please check your email for further instructions.":
        "Lien de réinitialisation envoyé ! Veuillez consulter votre email pour plus d'instructions.",
      "Back to Login": "Retour à la connexion",

      // Request Access
      "Complete the form below to request access to our exclusive client portal.":
        "Remplissez le formulaire ci-dessous pour demander l'accès à notre portail client exclusif.",
      "Password *": "Mot de passe *",
      "Confirm Password *": "Confirmer le mot de passe *",
      "Company (Optional)": "Entreprise (Optionnel)",
      "Tell us about your concierge needs...":
        "Parlez-nous de vos besoins de conciergerie...",
      "Show confirm password": "Afficher la confirmation du mot de passe",
      "Hide confirm password": "Masquer la confirmation du mot de passe",
      "Passwords do not match": "Les mots de passe ne correspondent pas",
      "Password must be at least 6 characters long":
        "Le mot de passe doit contenir au moins 6 caractères",
      "An account with this email already exists":
        "Un compte avec cet email existe déjà",
      "Failed to create account. Please try again.":
        "Échec de la création du compte. Veuillez réessayer.",
      "Creating Account...": "Création du compte...",
      "Submit Request": "Soumettre la demande",
      "Your account has been created successfully! You can now log in to access your dashboard.":
        "Votre compte a été créé avec succès ! Vous pouvez maintenant vous connecter pour accéder à votre tableau de bord.",

      // Client Dashboard
      Welcome: "Bienvenue",
      "Valued Member": "Membre Estimé",
      Logout: "Déconnexion",
      "My Requests": "Mes Demandes",
      Itineraries: "Itinéraires",
      Privileges: "Privilèges",
      Messaging: "Messagerie",
      "Account Settings": "Paramètres du Compte",
      "Submit New Request": "Soumettre une Nouvelle Demande",
      "New Request": "Nouvelle Demande",
      "Select Request Type *": "Sélectionnez le Type de Demande *",
      "Travel Booking": "Réservation de Voyage",
      "Restaurant Reservation": "Réservation de Restaurant",
      Transportation: "Transport",
      Other: "Autre",
      "Describe your request in detail...":
        "Décrivez votre demande en détail...",
      Cancel: "Annuler",
      "Please fill in all required fields":
        "Veuillez remplir tous les champs obligatoires",
      "Request submitted successfully!": "Demande soumise avec succès !",
      "Failed to submit request. Please try again.":
        "Échec de la soumission de la demande. Veuillez réessayer.",
      "Loading requests...": "Chargement des demandes...",
      Created: "Créé",
      Pending: "En attente",
      Confirmed: "Confirmé",
      "In Progress": "En cours",
      Booked: "Réservé",
      "No active requests found.": "Aucune demande active trouvée.",
      "View your upcoming bookings and detailed travel plans.":
        "Consultez vos réservations à venir et vos plans de voyage détaillés.",
      Dates: "Dates",
      "No upcoming itineraries.": "Aucun itinéraire à venir.",
      "Explore your current perks and exclusive offers as a S'CLUSIVE member.":
        "Explorez vos avantages actuels et offres exclusives en tant que membre S'CLUSIVE.",
      "No special privileges currently available.":
        "Aucun privilège spécial actuellement disponible.",
      "Direct chat with your dedicated lifestyle manager.":
        "Chat direct avec votre gestionnaire de style de vie dédié.",
      You: "Vous",
      Support: "Support",
      "No messages yet. Start a conversation with your lifestyle manager.":
        "Aucun message pour le moment. Commencez une conversation avec votre gestionnaire de style de vie.",
      "Type your message...": "Tapez votre message...",
      "Failed to send message. Please try again.":
        "Échec de l'envoi du message. Veuillez réessayer.",
      "Manage your personal information and preferences.":
        "Gérez vos informations personnelles et préférences.",
      "Full Name": "Nom et prénom",
      Email: "Email",
      "Email cannot be changed. Contact support if you need to update your email.":
        "L'email ne peut pas être modifié. Contactez le support si vous devez mettre à jour votre email.",
      Phone: "Téléphone",
      Preferences: "Préférences",
      "Tell us about your preferences (dietary restrictions, seating preferences, etc.)":
        "Parlez-nous de vos préférences (restrictions alimentaires, préférences de siège, etc.)",
      "Save Changes": "Enregistrer les Modifications",
      "Account updated successfully!": "Compte mis à jour avec succès !",
      "Failed to update account. Please try again.":
        "Échec de la mise à jour du compte. Veuillez réessayer.",

      // Language
      Language: "Langue",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: localStorage.getItem("selectedLanguage") || "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
