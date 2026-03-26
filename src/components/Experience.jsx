import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Tech Fin Solutions Ltd',
    role: 'Full Stack Developer',
    period: 'Oct 2024 – Jan 2026',
    location: 'London, UK',
    color: '#00f5d4',
    points: [
      'Built reusable React + TypeScript component libraries adopted across 5+ internal products',
      'Developed WebSocket-powered live trading dashboards with real-time data feeds',
      'Implemented Jest unit tests achieving 30% reduction in production bugs',
      'Optimised REST APIs with caching strategies, improving response time by 40%',
    ],
  },
  {
    company: 'Indiap2p',
    role: 'Full Stack Developer',
    period: 'Jan 2022 – May 2024',
    location: 'Bangalore, India',
    color: '#06b6d4',
    points: [
      'Delivered 10+ product launches using the MERN stack in an agile environment',
      'Reduced page load time by 20% through code splitting and lazy loading',
      'Optimised MongoDB queries resulting in 30% faster data retrieval',
      'Integrated third-party APIs (payment gateways, SMS, email) for production features',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" style={{ padding: '100px 24px', background: '#0d1117' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            My journey
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff' }}>
            Work <span style={{ color: '#00f5d4' }}>Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '24px',
            bottom: '24px',
            width: '2px',
            background: 'linear-gradient(180deg, #00f5d4, #06b6d4, rgba(0,245,212,0))',
            borderRadius: '1px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '56px' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-44px',
                  top: '20px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 12px ${exp.color}`,
                  border: '3px solid #0d1117',
                }} />

                <motion.div
                  whileHover={{ y: -4, boxShadow: `0 0 30px ${exp.color}20` }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${exp.color}25`,
                    borderRadius: '20px',
                    padding: '28px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{exp.company}</h3>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: exp.color,
                      border: `1px solid ${exp.color}40`,
                      background: `${exp.color}10`,
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: exp.color, fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{exp.role}</p>
                  <p style={{ color: '#718096', fontSize: '13px', marginBottom: '16px' }}>📍 {exp.location}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', gap: '10px', color: '#a0aec0', fontSize: '14px', lineHeight: 1.6 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px' }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
