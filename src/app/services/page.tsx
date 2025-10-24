'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Wedding Packages',
      price: 'Starting $2,800',
      image: '/generated/wedding-ceremony.jpg',
      description: 'Full day coverage capturing every precious moment of your special day',
      features: [
        'Full Day Coverage (8-10 hours)',
        'Complimentary Engagement Session',
        'Online Gallery with Download Rights',
        '500+ Edited High-Resolution Images',
        'Second Photographer Included',
        'Custom Wedding Album (40 pages)',
      ],
    },
    {
      title: 'Portrait Sessions',
      price: '$450',
      image: '/generated/family-portrait.jpg',
      description: 'Professional family, individual, senior, and maternity portraits',
      features: [
        '1 Hour Photo Session',
        'Your Choice of Location (Studio or Outdoor)',
        '50+ Edited Digital Images',
        'Online Gallery with Sharing Options',
        'Print Release Included',
        'Wardrobe Change Allowed',
      ],
    },
    {
      title: 'Commercial Photography',
      price: 'Custom Pricing',
      image: '/generated/commercial-headshot.jpg',
      description: 'Professional business photography for all your corporate needs',
      features: [
        'Product Photography',
        'Business Headshots',
        'Corporate Event Coverage',
        'Brand Photography',
        'Same-Day Turnaround Available',
        'Usage Rights Negotiable',
      ],
    },
    {
      title: 'Special Events',
      price: '$650',
      image: '/generated/engagement-couple.jpg',
      description: 'Birthday parties, celebrations, and other special occasions',
      features: [
        '2 Hour Minimum Coverage',
        'Candid & Posed Photography',
        '150+ Edited Digital Images',
        'Online Gallery Delivery',
        'Professional Editing',
        'Add Additional Hours ($200/hr)',
      ],
    },
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container">
            <h1 className="services-hero-title">Photography Services</h1>
            <p className="services-hero-text">
              Professional photography packages designed to capture your most precious moments with artistry and excellence.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-content">
          <div className="container">
            <div className="services-packages">
              {services.map((service, index) => (
                <div key={index} className="service-package">
                  <div className="service-package-image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="package-image"
                    />
                  </div>
                  <div className="service-package-content">
                    <h2 className="service-package-title">{service.title}</h2>
                    <div className="service-package-price">{service.price}</div>
                    <p className="service-package-description">{service.description}</p>
                    <ul className="service-package-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <Check size={18} className="feature-check" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="service-package-button">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="addons-section">
          <div className="container">
            <h2 className="addons-title">Popular Add-Ons</h2>
            <div className="addons-grid">
              <div className="addon-card">
                <h3 className="addon-card-title">Additional Hours</h3>
                <div className="addon-card-price">$200/hour</div>
                <p className="addon-card-description">
                  Extend your photography coverage for those extra special moments.
                </p>
              </div>
              <div className="addon-card">
                <h3 className="addon-card-title">Premium Album</h3>
                <div className="addon-card-price">$800</div>
                <p className="addon-card-description">
                  Luxury leather-bound album with 60 pages of your favorite images.
                </p>
              </div>
              <div className="addon-card">
                <h3 className="addon-card-title">Parent Albums</h3>
                <div className="addon-card-price">$400 each</div>
                <p className="addon-card-description">
                  Matching albums for parents with 20 pages of selected images.
                </p>
              </div>
              <div className="addon-card">
                <h3 className="addon-card-title">Canvas Prints</h3>
                <div className="addon-card-price">From $150</div>
                <p className="addon-card-description">
                  Museum-quality canvas prints in various sizes for your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <h2 className="services-cta-title">Ready to Get Started?</h2>
            <p className="services-cta-text">
              Contact us today for a free consultation and custom quote for your photography needs.
            </p>
            <button className="services-cta-button">Contact Us</button>
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

        /* Hero Section */
        .services-hero {
          padding: 80px 0 60px;
          background-color: hsl(var(--color-light-section));
          text-align: center;
        }

        .services-hero-title {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .services-hero-text {
          font-size: 1.25rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 700px;
          margin: 0 auto;
        }

        /* Services Content */
        .services-content {
          padding: 80px 0;
        }

        .services-packages {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .service-package {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
          padding: 2rem;
          border-radius: 8px;
          background-color: hsl(var(--background));
          box-shadow: var(--shadow-card);
        }

        .service-package:nth-child(even) {
          grid-template-columns: 1.2fr 1fr;
        }

        .service-package:nth-child(even) .service-package-image {
          order: 2;
        }

        .service-package-image {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 400px;
        }

        .package-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }

        .service-package-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .service-package-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 700;
        }

        .service-package-price {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 600;
          color: hsl(var(--primary));
        }

        .service-package-description {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
        }

        .service-package-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9375rem;
        }

        .feature-check {
          color: hsl(var(--primary));
          flex-shrink: 0;
        }

        .service-package-button {
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

        .service-package-button:hover {
          opacity: 0.85;
        }

        /* Add-Ons Section */
        .addons-section {
          padding: 80px 0;
          background-color: hsl(var(--color-light-section));
        }

        .addons-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
        }

        .addons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .addon-card {
          background-color: hsl(var(--background));
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          box-shadow: var(--shadow-card);
        }

        .addon-card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .addon-card-price {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 700;
          color: hsl(var(--primary));
          margin-bottom: 1rem;
        }

        .addon-card-description {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
        }

        /* CTA Section */
        .services-cta {
          padding: 80px 0;
          background-color: hsl(var(--color-dark-charcoal));
          color: hsl(var(--color-text-white));
          text-align: center;
        }

        .services-cta-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .services-cta-text {
          font-size: 1.125rem;
          line-height: 1.7;
          color: hsl(var(--color-text-light));
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }

        .services-cta-button {
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

        .services-cta-button:hover {
          opacity: 0.9;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .service-package,
          .service-package:nth-child(even) {
            grid-template-columns: 1fr;
          }

          .service-package:nth-child(even) .service-package-image {
            order: 1;
          }

          .addons-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-hero-title {
            font-size: 2.5rem;
          }

          .addons-grid {
            grid-template-columns: 1fr;
          }

          .service-package-image {
            min-height: 300px;
          }
        }

        @media (max-width: 640px) {
          .services-hero {
            padding: 60px 0 40px;
          }

          .services-hero-title {
            font-size: 2rem;
          }

          .services-content,
          .addons-section,
          .services-cta {
            padding: 60px 0;
          }

          .service-package {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
