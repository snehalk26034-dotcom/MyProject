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
    image: "/image (5).png",
    text: "Savor meals and snacks from our diverse selection of local food trucks.",
  },
  {
    title: "Events Schedule",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    text: "Enjoy performances and live entertainment during the event.",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="event-title">
        <div className="hero-overlay">
          <h1 id="event-title">Themeland Night</h1>
          <p>Open Every Weekend from March 1 to 31, 2025</p>
          <div className="hero-buttons">
            <button className="primary-btn" type="button"> <a href="https://www.eventbrite.com/"> GET TICKETS </a> </button>
            <button className="outline-btn" type="button"> <a href="#"> LEARN MORE</a> </button>
          </div>
        </div>
      </section>



      <section className="market-section" aria-labelledby="market-title">
        <h2 id="market-title">A Local Craft Market</h2>
        <p className="market-subtitle">
          Explore the finest local crafts and specialty items in Maryland.
        </p>

        <div className="cards-container">
          {cards.map((card) => (
            <article className="card-wrapper" key={card.title}>
              <div className="market-card">
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                 <button className="learn-btn" type="button" > <a href=""> LEARN MORE </a></button>
              </div>
             
            </article>
          ))}
        </div>
      </section><br /> <br/> <br/> <br/>

      <section className="vendor-section" aria-labelledby="vendor-title">
        <div className="vendor-content">
          <h2 id="vendor-title">Become A Vendor</h2>
          <div className="vendor-text">
            <p>
              Apply to be part of our next event! This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.
            </p>
            <button className="apply-btn" type="button">Apply Now</button>
          </div>
        </div>
      </section>
    </main>
  );
}
