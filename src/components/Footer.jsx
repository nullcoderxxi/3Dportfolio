import { motion } from 'framer-motion';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Footer() {
  return (
    <footer style={{
      background: '#080c11',
      borderTop: '1px solid rgba(0,245,212,0.1)',
      padding: '48px 24px 32px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          {/* Logo */}
          <div>
            <p style={{
              fontWeight: 700,
              fontSize: '22px',
              color: '#00f5d4',
              fontFamily: 'monospace',
              textShadow: '0 0 15px rgba(0,245,212,0.4)',
              marginBottom: '6px',
            }}>
              {'<AS />'}
            </p>
            <p style={{ color: '#718096', fontSize: '13px' }}>Full Stack MERN Developer</p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ color: '#718096', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = '#00f5d4')}
                onMouseLeave={(e) => (e.target.style.color = '#718096')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ color: '#4a5568', fontSize: '13px' }}>
            Built with ❤️ by{' '}
            <span style={{ color: '#00f5d4', fontWeight: 600 }}>Amandeep Singh</span>
            {' '}using React.js + Three.js
          </p>
          <p style={{ color: '#4a5568', fontSize: '13px' }}>© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
