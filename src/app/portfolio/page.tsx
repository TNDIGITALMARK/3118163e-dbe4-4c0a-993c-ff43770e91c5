'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { X } from 'lucide-react';

type Category = 'all' | 'weddings' | 'portraits' | 'commercial' | 'engagement';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Category;
  title: string;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/generated/hero-couple-field.jpg', alt: 'Couple in field', category: 'weddings', title: 'Golden Hour Wedding' },
    { id: 2, src: '/generated/wedding-ceremony.jpg', alt: 'Wedding ceremony', category: 'weddings', title: 'Outdoor Ceremony' },
    { id: 3, src: '/generated/family-portrait.jpg', alt: 'Family portrait', category: 'portraits', title: 'Family Session' },
    { id: 4, src: '/generated/commercial-headshot.jpg', alt: 'Business headshot', category: 'commercial', title: 'Corporate Headshot' },
    { id: 5, src: '/generated/engagement-couple.jpg', alt: 'Engagement photo', category: 'engagement', title: 'Urban Engagement' },
    { id: 6, src: '/generated/photographer-profile.jpg', alt: 'Photographer portrait', category: 'portraits', title: 'Creative Portrait' },
    // Additional duplicates for demonstration
    { id: 7, src: '/generated/hero-couple-field.jpg', alt: 'Sunset wedding', category: 'weddings', title: 'Sunset Romance' },
    { id: 8, src: '/generated/wedding-ceremony.jpg', alt: 'Wedding vows', category: 'weddings', title: 'Exchanging Vows' },
    { id: 9, src: '/generated/family-portrait.jpg', alt: 'Family outdoors', category: 'portraits', title: 'Lifestyle Family' },
  ];

  const categories = [
    { id: 'all' as Category, label: 'All', count: galleryImages.length },
    { id: 'weddings' as Category, label: 'Weddings', count: galleryImages.filter(img => img.category === 'weddings').length },
    { id: 'portraits' as Category, label: 'Portraits', count: galleryImages.filter(img => img.category === 'portraits').length },
    { id: 'commercial' as Category, label: 'Commercial', count: galleryImages.filter(img => img.category === 'commercial').length },
    { id: 'engagement' as Category, label: 'Engagement', count: galleryImages.filter(img => img.category === 'engagement').length },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="container">
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-text">
              Explore our collection of beautiful moments captured with passion and precision.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="container">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  {category.label}
                  <span className="filter-count">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openLightbox(image)}
                >
                  <div className="gallery-image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-title">{image.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="lightbox-image"
              />
              <div className="lightbox-title">{lightboxImage.title}</div>
            </div>
          </div>
        )}
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
        .portfolio-hero {
          padding: 80px 0 60px;
          background-color: hsl(var(--color-light-section));
          text-align: center;
        }

        .portfolio-hero-title {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .portfolio-hero-text {
          font-size: 1.25rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 700px;
          margin: 0 auto;
        }

        /* Filter Section */
        .filter-section {
          padding: 40px 0;
          background-color: hsl(var(--background));
          border-bottom: 1px solid hsl(var(--border));
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-button {
          background-color: transparent;
          color: hsl(var(--foreground));
          border: 2px solid hsl(var(--border));
          padding: 10px 24px;
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-button:hover {
          border-color: hsl(var(--foreground));
        }

        .filter-button.active {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border-color: hsl(var(--primary));
        }

        .filter-count {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 60px 0 80px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 4px;
          aspect-ratio: 3/2;
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7));
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-title {
          font-family: var(--font-serif);
          font-size: 1.125rem;
          font-weight: 600;
          color: hsl(var(--color-text-white));
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .lightbox-close {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: none;
          border: none;
          color: hsl(var(--color-text-white));
          cursor: pointer;
          transition: opacity 0.2s ease;
          z-index: 1001;
        }

        .lightbox-close:hover {
          opacity: 0.7;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: calc(90vh - 100px);
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 600;
          color: hsl(var(--color-text-white));
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .portfolio-hero-title {
            font-size: 2.5rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .filter-buttons {
            gap: 0.75rem;
          }

          .filter-button {
            padding: 8px 16px;
            font-size: 0.875rem;
          }
        }

        @media (max-width: 640px) {
          .portfolio-hero {
            padding: 60px 0 40px;
          }

          .portfolio-hero-title {
            font-size: 2rem;
          }

          .gallery-section {
            padding: 40px 0 60px;
          }

          .lightbox {
            padding: 1rem;
          }

          .lightbox-close {
            top: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
