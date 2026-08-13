import React from "react";
import "../css/FoodVendors.css";

const vendors = [
  {
    name: "Breadbowl",
    type: "Vegan & Gluten-Free Eatery",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Harvest",
    type: "Catering Company",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Mellon",
    type: "Brunch Eatery",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Pomme & Grenadine",
    type: "French cuisine",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Milk & Flour",
    type: "French Bakery",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Hibachi Japanese",
    type: "Japanese cuisine",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Anise",
    type: "French cuisine",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Root & Stem",
    type: "Vegan & Gluten-Free Eatery",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Drift Coffee Bar",
    type: "Micro Coffee Roastery",
    website: "https://example.com",
    instagram: "https://instagram.com",
  },
];

const foodImages = [
  "/Mr.Kiran Dighe_files/food1.6d90ce666566b88d70a3.webp",
  "/Mr.Kiran Dighe_files/food2.5e9bcd38cea5150a223c.webp",
  "/Mr.Kiran Dighe_files/food3.490b562ca30789ce2aff.webp",
  "/Mr.Kiran Dighe_files/food4.e3e23827b75f34307dd5.webp",
  "/Mr.Kiran Dighe_files/food5.efc9bcd00b47713d008c.webp",
  "/Mr.Kiran Dighe_files/food6.3810287c70005af0ac8b.webp",
];

const FoodVendors = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="food-vendors-page">

      {/* HEADER */}
      <header className="vendors-header">
        <p className="small-heading">OUR FOOD COMMUNITY</p>

        <h1>Food Vendors</h1>

        <p className="header-description">
          Discover our wonderful food vendors and explore the delicious
          flavors they bring to every event.
        </p>
      </header>

      {/* VENDORS */}
      <section className="vendors-section">
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            <div className="vendor-card" key={index}>
              <h2>{vendor.name}</h2>

              <p className="vendor-type">{vendor.type}</p>

              <a
                href={vendor.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>

              <a
                href={vendor.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD GALLERY */}
      <section className="food-gallery">
        {foodImages.map((image, index) => (
          <div className="food-image" key={index}>
            <img
              src={image}
              alt={`Food vendor ${index + 1}`}
            />
          </div>
        ))}
      </section>

      {/* BECOME A VENDOR */}
      <section className="become-vendor">
        <div className="vendor-title">
          <h2>Become A Vendor</h2>
        </div>

        <div className="vendor-content">
          <p>
            Apply to be part of our next event! This is a paragraph.
            You can write your own content here, and fill in the blanks.
            What's your story and where do you go from here? Tell the
            world about your business, and make this text yours.
          </p>

          <button
            onClick={() => alert("Application form coming soon!")}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="vendors-footer">
        <p>© 2026 Food Vendors. All Rights Reserved.</p>
      </footer>

      {/* SCROLL TOP */}
      <button
        className="scroll-top"
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default FoodVendors;