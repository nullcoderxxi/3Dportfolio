import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(13, 17, 23, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,245,212,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.05 }}
        style={{
          fontWeight: 700,
          fontSize: '22px',
          color: '#00f5d4',
          textDecoration: 'none',
          fontFamily: 'monospace',
          textShadow: '0 0 15px rgba(0,245,212,0.6)',
        }}
      >
        {'<AS />'}
      </motion.a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="hidden md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: '#a0aec0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'color 0.2s',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#00f5d4')}
            onMouseLeave={(e) => (e.target.style.color = '#a0aec0')}
          >
            {l.label}
          </a>
        ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,245,212,0.6)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '8px 20px',
            border: '1px solid #00f5d4',
            borderRadius: '8px',
            color: '#00f5d4',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
            boxShadow: '0 0 12px rgba(0,245,212,0.3)',
            transition: 'all 0.2s',
          }}
        >
          Hire Me
        </motion.a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: '#00f5d4',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            background: 'rgba(13,17,23,0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,245,212,0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#a0aec0',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '10px 20px',
              border: '1px solid #00f5d4',
              borderRadius: '8px',
              color: '#00f5d4',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
