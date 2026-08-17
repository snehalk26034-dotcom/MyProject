import React from "react";
import "../css/Home.css";

const cards = [
  {
    title: "500+ Vendors",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    text: "Discover a variety of unique items from local artisans and entrepreneurs.",
  },
  {
    title: "Local Food Trucks",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    text: "Savor meals and snacks from our diverse selection of local food trucks.",
  },
  {
    title: "Events Schedule",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    text: "Enjoy performances and live entertainment during the event.",
  },
];

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Themeland Night</h1>

          <h3>
            Open Every Weekend from March 1 to 31, 2025
          </h3>

          <div className="hero-buttons">
            <button className="primary-btn">GET TICKETS</button>
            <button className="outline-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Local Craft Market */}
      <section className="market-section">
        <h2>A Local Craft Market</h2>

        <p className="market-subtitle">
          Explore the finest local crafts and specialty items in Maryland.
        </p>

        <div className="cards-container">
          {cards.map((card) => (
            <div className="card-wrapper" key={card.title}>
              <div className="market-card">
                <img src={card.image} alt={card.title} />

                <h3>{card.title}</h3>

                <p>{card.text}</p>
                 <button className="learn-btn">
                LEARN MORE
              </button>
              
              </div>

             
            </div>
          ))}
        </div>
      </section>

      {/* Become Vendor */}
      <section className="vendor-section">
        <div className="vendor-content">
          <div className="vendor-title">
            <h2>Become A Vendor</h2>
          </div>

          <div className="vendor-text">
            <p>
              Apply to be part of our next event! This is a paragraph.
              You can write your own content here, and fill in the blanks.
              What's your story and where do you go from here? Tell the
              world about your business, and make this text yours.
            </p>

            <button className="apply-btn">
              Apply Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
