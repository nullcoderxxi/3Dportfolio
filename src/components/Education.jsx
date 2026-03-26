import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    school: 'BPP University',
    degree: 'MSc Project Management',
    period: '2024 – 2025',
    location: 'London, UK',
    color: '#00f5d4',
    emoji: '🎓',
    highlights: ['Advanced Project Management methodologies', 'Agile & Scrum frameworks', 'Risk management & stakeholder communication'],
  },
  {
    school: 'IIT Delhi',
    degree: 'BTech Computer Science',
    period: '2018 – 2022',
    location: 'Delhi, India',
    color: '#06b6d4',
    emoji: '🏛️',
    highlights: ['Data Structures & Algorithms', 'Software Engineering principles', 'Database systems & Computer Networks'],
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="education" style={{ padding: '100px 24px', background: '#0d1117' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            Academic background
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff' }}>
            <span style={{ color: '#00f5d4' }}>Education</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: `0 0 35px ${edu.color}25` }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${edu.color}25`,
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: `${edu.color}15`,
                  border: `1px solid ${edu.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                  boxShadow: `0 0 15px ${edu.color}20`,
                }}>
                  {edu.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '4px' }}>{edu.school}</h3>
                  <p style={{ color: edu.color, fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>{edu.degree}</p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#718096', fontSize: '13px' }}>📅 {edu.period}</span>
                    <span style={{ color: '#718096', fontSize: '13px' }}>📍 {edu.location}</span>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${edu.color}20`, paddingTop: '16px' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {edu.highlights.map((h) => (
                    <li key={h} style={{ display: 'flex', gap: '8px', color: '#a0aec0', fontSize: '13px', lineHeight: 1.6 }}>
                      <span style={{ color: edu.color, flexShrink: 0 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
