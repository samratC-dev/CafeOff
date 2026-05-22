import "./Testimonials.css";

const testimonials = [
  {
    name: "Riya Sharma",
    review:
      "The pancakes are always fluffy and fresh. This is now my favorite weekend breakfast spot."
  },
  {
    name: "Aditya Verma",
    review:
      "Cozy interiors, warm service, and amazing avocado toast. The outlet has the perfect morning vibe."
  },
  {
    name: "Neha Iyer",
    review:
      "Morning Bite serves the best omelette and fries combo. Clean ambience and very friendly staff."
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-container">
        <h2 className="section-title" data-aos="fade-up">
          What Guests Say
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Real experiences from our regular guests who love our breakfast and
          brunch moments.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="testimonial-card"
              data-aos={index === 1 ? "zoom-in" : "fade-up"}
            >
              <p>"{item.review}"</p>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
