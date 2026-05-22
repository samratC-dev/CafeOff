import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container about-grid">
        <div className="about-image-wrap" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
            alt="Warm breakfast interior"
            loading="lazy"
          />
        </div>
        <div className="about-content" data-aos="fade-up">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            Morning Bite began as a dream to build a cozy destination
            for great mornings. We prepare every plate with care, from breakfast
            classics to satisfying all-day snacks.
          </p>
          <p>
            Our space is designed for slow brunches, meaningful conversations,
            and comforting flavors. Whether you visit for a quick omelette or a
            relaxed family breakfast, we make every moment feel special.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
