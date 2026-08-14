import React from 'react';
import '../css/CraftVendors.css';

const vendors = [
  {
    id: 1,
    name: 'Madelyn Yang',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/craft1.fa1cd8fee79e2252c899.webp',
  },
  {
    id: 2,
    name: 'Cooke Crafts',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/craft2.4012d28cdd103ad59caa.webp',
  },
  {
    id: 3,
    name: 'Lowell Murray',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/craft3.9efba2db966317113c52.webp',
  },
  {
    id: 4,
    name: 'Emily Williams',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/craft4.cb007d41a024b5a66a83.webp',
  },
  {
    id: 5,
    name: 'Wolfe Designs',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/img1.5ed8009d9da913a50db3.webp',
  },
  {
    id: 6,
    name: 'Clementine Jewelry',
    type: 'Local Vendor',
    website: 'https://yoursite.com/',
    instagram: 'https://www.instagram.com/',
    image:
      'https://website-d45a5.firebaseapp.com/static/media/nm1.2aefd18c21ecf4c983e1.webp',
  },
];

function CraftVendors() {
  return (
    <main className="craft-vendors-page">
      
      {/* Craft Vendors Header */}
      <header className="craft-vendors-header">
        <div className="craft-vendors-content">
          <h1>Vendors</h1>
         </div>
      </header>
      <br /> <br />

      {/* Vendor Information */}
      <section className="vendors-section">
        <div className="vendors-info-grid">
          {vendors.map((vendor) => (
            <div className="vendor-info" key={vendor.id}>
              <h2>{vendor.name}</h2>

              <p className="vendor-type">
                {vendor.type}
              </p>

              <div className="vendor-links">
                <a
                  href={vendor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>

                <a
                  href={vendor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div><br /> <br />

        {/* Image Gallery */}
        <div className="vendors-gallery-grid">
          {vendors.map((vendor) => (
            <div className="gallery-item" key={vendor.id}>
              <img
                src={vendor.image}
                alt={vendor.name}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Become Vendor */}
      <section className="become-vendor-section">
        <div className="become-vendor-title">
          <h1>Become A Vendor</h1>
        </div>

        <div className="become-vendor-content">
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
      </section>

    </main>
  );
}

export default CraftVendors;