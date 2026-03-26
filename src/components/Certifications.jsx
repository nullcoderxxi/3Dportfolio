import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certs = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'University of Michigan',
    platform: 'Coursera',
    emoji: '🧠',
    color: '#00f5d4',
    badge: 'ML',
  },
  {
    title: 'Networking in Google Cloud',
    issuer: 'Google',
    platform: 'Coursera',
    emoji: '☁️',
    color: '#06b6d4',
    badge: 'GCP',
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="certifications" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0d1117 0%, #0a0f16 100%)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            Credentials
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff' }}>
            <span style={{ color: '#00f5d4' }}>Certifications</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 0 40px ${cert.color}30` }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${cert.color}30`,
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background: `radial-gradient(circle, ${cert.color}15 0%, transparent 70%)`,
                borderRadius: '0 20px 0 100%',
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* Badge */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${cert.color}25, ${cert.color}10)`,
                  border: `2px solid ${cert.color}50`,
                  boxShadow: `0 0 20px ${cert.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: '30px' }}>{cert.emoji}</span>
                </div>

                <div>
                  <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: cert.color, fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>
                    {cert.issuer}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: cert.color,
                      border: `1px solid ${cert.color}40`,
                      background: `${cert.color}10`,
                    }}>
                      {cert.platform}
                    </span>
                    <span style={{
                      padding: '3px 10px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#10b981',
                      border: '1px solid #10b98140',
                      background: '#10b98110',
                    }}>
                      ✓ Verified
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
