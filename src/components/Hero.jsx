import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticleField from '../three/ParticleField';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0d1117',
      }}
    >
      {/* Particle Background */}
      <ParticleField />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,245,212,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: '#00f5d4',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            fontFamily: 'monospace',
          }}
        >
          Hello, World! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-1px',
          }}
        >
          Amandeep Singh
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 500,
            marginBottom: '32px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#a0aec0' }}>I'm a </span>
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'MERN Specialist', 2000,
              'Cloud Engineer', 2000,
              'React Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#00f5d4', fontWeight: 700 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            color: '#718096',
            fontSize: '16px',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '560px',
            margin: '0 auto 40px',
          }}
        >
          Building scalable, cloud-ready web applications with 3+ years of experience. Based in London, UK.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,212,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #00f5d4, #06b6d4)',
              color: '#0d1117',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 0 20px rgba(0,245,212,0.4)',
              transition: 'all 0.2s',
            }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,245,212,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              border: '1px solid #00f5d4',
              color: '#00f5d4',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              boxShadow: '0 0 12px rgba(0,245,212,0.2)',
              background: 'transparent',
              transition: 'all 0.2s',
            }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="/Amandeep_Singh_CV.docx"
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#a0aec0',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '15px',
              background: 'rgba(255,255,255,0.05)',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            ⬇ Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll down arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#00f5d4',
          fontSize: '24px',
          cursor: 'pointer',
          opacity: 0.7,
        }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        ↓
      </motion.div>
    </section>
  );
}
