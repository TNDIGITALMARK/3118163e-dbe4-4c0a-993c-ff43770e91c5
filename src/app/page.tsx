import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Camera, Heart, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Hero Section - Full Screen with Overlay */}
        <section className="hero">
          <div className="hero-image-wrapper">
            <Image
              src="/generated/hero-couple-field.jpg"
              alt="Couple in golden wheat field at sunset"
              fill
              priority
              className="hero-image"
              style={{ objectFit: 'cover' }}
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">CAPTURING LIFE&apos;S<br />ARTISTRY</h1>
            <button className="hero-button">VIEW PORTFOLIO</button>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-heading">OUR SERVICES</h2>
            <div className="services-grid">
              {/* Wedding Photography */}
              <div className="service-card">
                <div className="service-icon">
                  <Heart size={40} />
                </div>
                <h3 className="service-title">WEDDINGS</h3>
                <p className="service-description">
                  Capturing the magic of your special day with timeless elegance and emotional storytelling.
                </p>
              </div>

              {/* Portrait Photography */}
              <div className="service-card">
                <div className="service-icon">
                  <Camera size={40} />
                </div>
                <h3 className="service-title">PORTRAITS</h3>
                <p className="service-description">
                  Professional family, senior, and individual portraits that celebrate your unique story.
                </p>
              </div>

              {/* Commercial Photography */}
              <div className="service-card">
                <div className="service-icon">
                  <Briefcase size={40} />
                </div>
                <h3 className="service-title">COMMERCIAL</h3>
                <p className="service-description">
                  High-quality business photography for corporate events, headshots, and product imagery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="storytelling-section">
          <div className="container">
            <div className="storytelling-grid">
              {/* Image Column */}
              <div className="storytelling-image-wrapper">
                <Image
                  src="/generated/photographer-profile.jpg"
                  alt="Professional photographer with vintage camera"
                  width={400}
                  height={400}
                  className="storytelling-image"
                />
              </div>

              {/* Content Column */}
              <div className="storytelling-content">
                <h2 className="storytelling-title">THE ART OF STORYTELLING</h2>
                <p className="storytelling-text">
                  At Luminous Moments Photography, we believe every photograph tells a story. With over a decade of experience capturing life&apos;s most precious moments, we combine artistic vision with technical excellence to create images that transcend time.
                </p>
                <p className="storytelling-text">
                  From intimate wedding ceremonies to joyful family gatherings and professional corporate events, our passion is preserving the emotions, connections, and memories that make your story unique.
                </p>
                <Link href="/about">
                  <button className="storytelling-button">LEARN MORE</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">READY TO BOOK YOUR VISUAL JOURNEY?</h2>
              <p className="cta-text">
                Let&apos;s create something beautiful together. Contact us today to discuss your photography needs.
              </p>
              <div className="cta-buttons">
                <Link href="/contact">
                  <button className="cta-button-primary">CONTACT US</button>
                </Link>
                <Link href="/portfolio">
                  <button className="cta-button-secondary">VIEW PORTFOLIO</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }

        /* === HERO SECTION === */
        .hero {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-image {
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          color: hsl(var(--color-text-white));
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: 4rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 2rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.02em;
        }

        .hero-button {
          background-color: transparent;
          color: hsl(var(--color-text-white));
          border: 2px solid hsl(var(--color-text-white));
          padding: 14px 36px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-button:hover {
          background-color: hsl(var(--color-text-white));
          color: hsl(var(--primary));
        }

        /* === SERVICES SECTION === */
        .services-section {
          padding: 100px 0;
          background-color: hsl(var(--background));
        }

        .section-heading {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: 0.05em;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .service-card {
          text-align: center;
          padding: 2rem;
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: hsl(var(--secondary));
          margin-bottom: 1.5rem;
          color: hsl(var(--foreground));
        }

        .service-title {
          font-family: var(--font-sans);
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .service-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
        }

        /* === STORYTELLING SECTION === */
        .storytelling-section {
          padding: 100px 0;
          background-color: hsl(var(--color-light-section));
        }

        .storytelling-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: center;
        }

        .storytelling-image-wrapper {
          position: relative;
        }

        .storytelling-image {
          width: 100%;
          height: auto;
          border-radius: 50%;
          box-shadow: var(--shadow-card);
        }

        .storytelling-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .storytelling-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .storytelling-text {
          font-size: 1rem;
          line-height: 1.8;
          color: hsl(var(--muted-foreground));
        }

        .storytelling-button {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border: none;
          padding: 14px 36px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: opacity 0.3s ease;
          align-self: flex-start;
        }

        .storytelling-button:hover {
          opacity: 0.85;
        }

        /* === CTA SECTION === */
        .cta-section {
          padding: 100px 0;
          background-color: hsl(var(--color-dark-charcoal));
          color: hsl(var(--color-text-white));
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }

        .cta-text {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: hsl(var(--color-text-light));
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .cta-button-primary {
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          border: none;
          padding: 14px 36px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .cta-button-primary:hover {
          opacity: 0.9;
        }

        .cta-button-secondary {
          background-color: transparent;
          color: hsl(var(--color-text-white));
          border: 2px solid hsl(var(--color-text-white));
          padding: 14px 36px;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button-secondary:hover {
          background-color: hsl(var(--color-text-white));
          color: hsl(var(--primary));
        }

        /* === RESPONSIVE DESIGN === */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .storytelling-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            height: 500px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .section-heading {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }
        }

        @media (max-width: 640px) {
          .hero {
            height: 400px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .services-section,
          .storytelling-section,
          .cta-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
}