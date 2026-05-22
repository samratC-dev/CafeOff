import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <p>Follow us:</p>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            X
          </a>
        </div>
        <p>© {new Date().getFullYear()} Morning Bite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
