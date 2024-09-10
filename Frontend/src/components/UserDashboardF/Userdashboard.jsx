import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Userdashboard.css";
export const Userdashboard = () => {
  const [bookedServices, setBookedServices] = useState([]); // New state for booked services
  const [currentSection, setCurrentSection] = useState("Dashboard");
  const [personalInfo, setPersonalInfo] = useState({
    name: "CharanGuru",
    address: "Keelamasi veethi, Madurai, TamilNadu",
    pincode: "625009",
    email: "charanguru04@gmail.com",
  });
  const [username, setUsername] = useState(personalInfo.name); // New state for username
  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleSavePersonalInfo = () => {
    // You can add logic here to save the personal info to a database or local storage
    setUsername(personalInfo.name);
    console.log(personalInfo);
  };
  const handleBookService = (service) => {
    setBookedServices([...bookedServices, service]);
  };
  const services = [
    {
      title: "Electrical",
      description:
        "Reliable electrical services for installations and repairs.",
    },
    {
      title: "Plumbing",
      description:
        "Expert plumbing services for residential and commercial needs.",
    },
    {
      title: "Installation",
      description:
        "Professional installation services for all types of equipment.",
    },
    {
      title: "Maintenance",
      description:
        "Regular maintenance services to keep your equipment running smoothly.",
    },
    {
      title: "Television",
      description: "Television repair and installation services.",
    },
    {
      title: "System",
      description: "Computer system repair and maintenance services.",
    },
    {
      title: "AC",
      description: "Air conditioning installation and repair services.",
    },
    {
      title: "RO",
      description: "RO water purifier installation and maintenance services.",
    },
    {
      title: "Washing Machine",
      description: "Washing machine repair and maintenance services.",
    },
    {
      title: "Refrigerator",
      description: "Refrigerator repair and maintenance services.",
    },
    {
      title: "Microwave Oven",
      description: "Microwave oven repair and maintenance services.",
    },
    {
      title: "Cleaning",
      description: "Professional cleaning services for homes and offices.",
    },
  ];
  // Render different content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case "Dashboard":
        return (
          <>
            <div className="userdash-header">
              <div className="banner"></div>
              {/* <img src={UserProfile} id="user-profile"/> */}
              <i class="fa-solid fa-circle-user"></i>
              <h3>{username}</h3>
            </div>
            <div className="personal-details">
              <h2>Personal Details</h2>
              <form>
                <label>Name</label>
                <input
                  type="text"
                  value={personalInfo.name}
                  onChange={handlePersonalInfoChange}
                />{" "}
                <br />
                <label>Email</label>
                <input type="mail" value={personalInfo.email} />
                <br />
                <label className="addr">Address</label>
                <textarea value={personalInfo.address}></textarea>
                <label>Pincode</label>
                <input type="text" id="pinc" value={personalInfo.pincode} />
              </form>
              <button onClick={handleSavePersonalInfo}>Save Changes</button>
            </div>
            <div className="booked-services">
              <h2>Ongoing Works</h2>
              <div className="ondiv">
              <ul>
                {bookedServices.map((service, index) => (
                  <li><h3 key={index}>{service.title}</h3>
                  {service.description}
                  <p>Technician</p>
                  <p>- Krish</p>
                  <button>Finished</button></li>
                ))}
              </ul>
              </div>
            </div>
          </>
        );
      case "Services":
        return (
          <div className="services-page-dash">
            <div className="services-grid-dash">
              {services.map((service, index) => (
                <div className="service-card-dash" key={index}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link to="">
                    <button onClick={() => handleBookService(service)}>
                      Book Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      case "Payment":
        return <div>Payment Content</div>;
    }
  };

  return (
    <>
      <div className="user-dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="logo">
            <i class="fa-solid fa-screwdriver-wrench"></i> LOCOS
          </h3>
          <ul>
            <li
              className={currentSection === "Dashboard" ? "active" : ""}
              onClick={() => setCurrentSection("Dashboard")}
            >
              <i class="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
            </li>
            <li
              className={currentSection === "Services" ? "active" : ""}
              onClick={() => setCurrentSection("Services")}
            >
              <i class="fa-solid fa-wrench"></i> &nbsp; Services
            </li>
            <li
              className={currentSection === "Payment" ? "active" : ""}
              onClick={() => setCurrentSection("Payment")}
            >
              <i class="fa-solid fa-sack-dollar"></i> &nbsp; Payment
            </li>
            <Link to="/">
              <li>
                <a href="#">
                  <i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
                </a>
              </li>
            </Link>
          </ul>
        </div>
        {/* Main Content */}
        <div className="main-content">{renderContent()}</div>
      </div>
    </>
  );
};
