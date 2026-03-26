import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#00f5d4',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React.js', 'Redux', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#06b6d4',
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'GraphQL', 'JWT Auth', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: '#818cf8',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Nginx', 'Linux', 'Serverless'],
  },
];

function SkillBadge({ name, color }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      style={{
        display: 'inline-block',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 600,
        color: color,
        border: `1px solid ${color}40`,
        background: `${color}10`,
        margin: '4px',
        cursor: 'default',
        transition: 'all 0.2s',
        whiteSpace: 'nowrap',
      }}
    >
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="skills" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0d1117 0%, #0a0f16 100%)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            What I work with
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff' }}>
            Technical <span style={{ color: '#00f5d4' }}>Skills</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: `0 0 35px ${cat.color}25` }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${cat.color}25`,
                borderRadius: '20px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  boxShadow: `0 0 15px ${cat.color}20`,
                }}>
                  {cat.icon}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '2px' }}>
                    {cat.title}
                  </h3>
                  <div style={{ width: '40px', height: '2px', background: `linear-gradient(90deg, ${cat.color}, transparent)`, borderRadius: '1px' }} />
                </div>
              </div>

              {/* Skills */}
              <div>
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} color={cat.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
