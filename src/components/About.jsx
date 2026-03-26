import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Launched' },
  { value: '2', label: 'Countries Worked In' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" style={{ padding: '100px 24px', background: '#0d1117' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            Get to know me
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '0' }}>
            About <span style={{ color: '#00f5d4' }}>Me</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.1 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,245,212,0.2), rgba(6,182,212,0.1))',
              border: '2px solid rgba(0,245,212,0.4)',
              boxShadow: '0 0 40px rgba(0,245,212,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
              position: 'relative',
            }}>
              <span>👨‍💻</span>
              <div style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(0,245,212,0.2)',
                animation: 'pulse 2s infinite',
              }} />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.15 }}
          >
            <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Amandeep Singh
            </h3>
            <p style={{ color: '#00f5d4', fontSize: '14px', marginBottom: '16px', fontWeight: 600 }}>
              Full Stack MERN Developer
            </p>
            <p style={{ color: '#a0aec0', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
              Full-stack MERN developer with 3+ years of experience building scalable, cloud-ready web applications.
              MSc in Project Management from BPP University London. Passionate about building products that solve real problems.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['📍', 'London, UK'],
                ['🎓', 'MSc Project Management — BPP University London'],
                ['💼', '3+ Years of Professional Experience'],
                ['📧', 'amandeepsiingh22@gmail.com'],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '16px' }}>{icon}</span>
                  <span style={{ color: '#718096', fontSize: '14px' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CV Download */}
            <motion.a
              href="/Amandeep_Singh_CV.docx"
              download
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(0,245,212,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '24px',
                padding: '12px 28px',
                background: 'linear-gradient(135deg, #00f5d4, #06b6d4)',
                color: '#0d1117',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 0 18px rgba(0,245,212,0.35)',
                transition: 'all 0.2s',
              }}
            >
              ⬇ Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '60px' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(0,245,212,0.3)' }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,245,212,0.15)',
                borderRadius: '16px',
                padding: '32px 24px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#00f5d4', marginBottom: '8px', fontFamily: 'monospace' }}>
                {stat.value}
              </div>
              <div style={{ color: '#a0aec0', fontSize: '14px', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
