import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="section-container hero-content" data-aos="fade-up">
        <p className="hero-kicker">Modern Breakfast Spot</p>
        <h1>Fresh Breakfast & Morning Favorites</h1>
        <p>
          Start your day with fluffy pancakes, wholesome omelettes, avocado
          toast, and comforting bites in a warm, stylish space.
        </p>
        <a href="#menu" className="btn-primary hero-btn">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;
