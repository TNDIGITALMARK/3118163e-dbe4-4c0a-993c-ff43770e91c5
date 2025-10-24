import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <MapPin size={24} />
              <span>LUMINOUS VISUALS</span>
            </div>
            <p className="footer-tagline">Capturing Your Most Precious Memories</p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="footer-column">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} />
                <a href="tel:5558472910">(555) 847-2910</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@luminousmoments.com">hello@luminousmoments.com</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>1425 Oak Street, Downtown District</span>
              </li>
              <li>
                <Clock size={16} />
                <span>Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe to get updates on our latest work and special offers.
            </p>
            <form className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Luminous Moments Photography. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: hsl(var(--color-dark-charcoal));
          color: hsl(var(--color-text-light));
          padding: 60px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Logo Section */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(var(--color-text-white));
        }

        .footer-tagline {
          font-size: 0.875rem;
          line-height: 1.6;
          color: hsl(var(--color-text-light));
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .footer-social a {
          color: hsl(var(--color-text-light));
          transition: color 0.2s ease;
        }

        .footer-social a:hover {
          color: hsl(var(--color-text-white));
        }

        /* Headings */
        .footer-heading {
          font-family: var(--font-serif);
          font-size: 1.125rem;
          font-weight: 600;
          color: hsl(var(--color-text-white));
          margin: 0;
        }

        /* Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: hsl(var(--color-text-light));
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: hsl(var(--color-text-white));
        }

        /* Contact Info */
        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-contact li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer-contact a {
          color: hsl(var(--color-text-light));
          transition: color 0.2s ease;
        }

        .footer-contact a:hover {
          color: hsl(var(--color-text-white));
        }

        /* Newsletter */
        .footer-newsletter-text {
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }

        .footer-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-newsletter-input {
          padding: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.05);
          color: hsl(var(--color-text-white));
          border-radius: 4px;
          font-size: 0.875rem;
          transition: border-color 0.2s ease;
        }

        .footer-newsletter-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.4);
        }

        .footer-newsletter-input::placeholder {
          color: hsl(var(--color-text-light));
        }

        .footer-newsletter-button {
          padding: 0.75rem 1.5rem;
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          border: none;
          border-radius: 4px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .footer-newsletter-button:hover {
          opacity: 0.9;
        }

        /* Bottom Bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.875rem;
        }

        .footer-bottom p {
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-links a {
          color: hsl(var(--color-text-light));
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: hsl(var(--color-text-white));
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-links {
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
