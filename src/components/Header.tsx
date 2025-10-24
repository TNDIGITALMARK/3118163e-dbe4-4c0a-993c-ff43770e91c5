'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  return (
    <header className="w-full shadow-sm">
      {/* CSS Grid Container - Single Container with Two Rows */}
      <div className="header-grid">
        {/* TOPBAR ROW - Dark Charcoal Background */}
        <div className="topbar">
          <div className="container">
            <div className="topbar-content">
              {/* Left: Social Links */}
              <div className="topbar-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube size={16} />
                </a>
              </div>

              {/* Center: Contact Info */}
              <div className="topbar-contact">
                <a href="tel:5558472910" className="topbar-link">
                  <span className="topbar-icon">📞</span> (555) 847-2910
                </a>
                <a href="mailto:hello@luminousmoments.com" className="topbar-link">
                  <span className="topbar-icon">✉</span> hello@luminousmoments.com
                </a>
                <span className="topbar-link">
                  <span className="topbar-icon">🕐</span> Mon-Fri: 9AM-6PM
                </span>
              </div>

              {/* Right: Search Icon */}
              <div className="topbar-search">
                <button aria-label="Search">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN HEADER ROW - White Background */}
        <div className="main-header">
          <div className="container">
            <div className="main-header-content">
              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo - Centered */}
              <Link href="/" className="logo">
                <div className="logo-icon">
                  <MapPin size={24} />
                </div>
                <span className="logo-text">LUMINOUS VISUALS</span>
              </Link>

              {/* Desktop Navigation Menu */}
              <nav className="desktop-nav">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/services" className="nav-link">Portfolio</Link>
                <Link href="/portfolio" className="nav-link">About</Link>
                <Link href="/contact" className="nav-link">Services</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
                <Link href="/blog" className="nav-link">Blog</Link>
              </nav>

              {/* Language Selector */}
              <div className="language-selector">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="language-dropdown"
                >
                  <option value="EN">English</option>
                  <option value="ES">Spanish</option>
                  <option value="FR">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        /* === CSS GRID HEADER - SINGLE CONTAINER === */
        .header-grid {
          display: grid;
          grid-template-rows: auto auto;
          width: 100%;
        }

        /* === TOPBAR STYLES === */
        .topbar {
          background-color: hsl(var(--color-dark-charcoal));
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .topbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .topbar-social {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .topbar-social a {
          color: hsl(var(--color-text-light));
          transition: color 0.2s ease;
        }

        .topbar-social a:hover {
          color: hsl(var(--color-text-white));
        }

        .topbar-contact {
          display: flex;
          gap: 2rem;
          align-items: center;
          font-size: 0.875rem;
        }

        .topbar-link {
          color: hsl(var(--color-text-light));
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .topbar-icon {
          font-size: 1rem;
        }

        .topbar-search {
          display: flex;
        }

        .topbar-search button {
          color: hsl(var(--color-text-light));
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .topbar-search button:hover {
          color: hsl(var(--color-text-white));
        }

        /* === MAIN HEADER STYLES === */
        .main-header {
          background-color: hsl(var(--background));
          padding: 20px 0;
          border-bottom: 1px solid hsl(var(--border));
        }

        .main-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          position: relative;
        }

        /* Mobile Menu Button - Hidden on Desktop */
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: hsl(var(--foreground));
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          text-decoration: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 2px solid hsl(var(--foreground));
          border-radius: 50%;
        }

        .logo-text {
          letter-spacing: 0.05em;
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-right: auto;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: hsl(var(--foreground));
          text-decoration: none;
          transition: opacity 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: hsl(var(--foreground));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Language Selector */
        .language-selector {
          display: flex;
          align-items: center;
        }

        .language-dropdown {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 500;
          color: hsl(var(--foreground));
          background-color: transparent;
          border: 1px solid hsl(var(--border));
          border-radius: 4px;
          padding: 0.375rem 0.75rem;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .language-dropdown:hover {
          border-color: hsl(var(--foreground));
        }

        /* Mobile Menu */
        .mobile-menu {
          display: none;
          background-color: hsl(var(--background));
          border-top: 1px solid hsl(var(--border));
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
        }

        .mobile-nav-link {
          padding: 0.875rem 2rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: hsl(var(--foreground));
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .mobile-nav-link:hover {
          background-color: hsl(var(--secondary));
        }

        /* === RESPONSIVE DESIGN === */
        @media (max-width: 768px) {
          /* Topbar - Simplified on Mobile */
          .topbar-content {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }

          .topbar-contact {
            flex-direction: column;
            gap: 0.5rem;
          }

          /* Main Header */
          .mobile-menu-button {
            display: block;
          }

          .logo {
            position: relative;
            left: auto;
            transform: none;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu {
            display: block;
          }

          .language-selector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .topbar {
            padding: 8px 0;
          }

          .main-header {
            padding: 16px 0;
          }

          .logo-text {
            font-size: 1rem;
          }

          .topbar-social {
            gap: 0.75rem;
          }
        }
      `}</style>
    </header>
  );
}
