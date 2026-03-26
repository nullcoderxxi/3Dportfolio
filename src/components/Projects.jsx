import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    name: 'Task Flow',
    stack: ['React', 'Vite', 'Framer Motion', 'Three.js'],
    desc: 'Team & task management Kanban board with drag-and-drop, spring animations, 3D effects and real-time stats.',
    color: '#00f5d4',
    emoji: '📋',
    github: 'https://github.com/nullcoderxxi/taskflow',
    demo: 'https://taskflowbyaman.netlify.app/',
  },
  {
    name: 'StockPulse',
    stack: ['React', 'Recharts', 'Framer Motion', 'Vite'],
    desc: 'Live stock market dashboard with portfolio tracking, animated charts, sector breakdown and news feed.',
    color: '#10b981',
    emoji: '📈',
    github: 'https://github.com/nullcoderxxi/stockpulse',
    demo: 'https://stockpulsebyaman.netlify.app/',
  },
  {
    name: 'DevBlog CMS',
    stack: ['React', 'GraphQL', 'MongoDB', 'Apollo', 'Three.js'],
    desc: 'Full-stack blog CMS with GraphQL API, JWT auth, admin panel, syntax highlighting and nested comments.',
    color: '#818cf8',
    emoji: '✍️',
    github: 'https://github.com/nullcoderxxi/devblog',
    demo: 'https://devblogbyaman.netlify.app/',
  },
  {
    name: 'AI Resume Builder',
    stack: ['React', 'Three.js', 'Framer Motion', 'html2pdf'],
    desc: 'AI-powered resume builder with live preview, 3 templates, score meter, AI suggestions and PDF export.',
    color: '#f59e0b',
    emoji: '🤖',
    github: 'https://github.com/nullcoderxxi/ai-resume-builder',
    demo: 'https://airesumebuilderbyaman.netlify.app/',
  },
  {
    name: 'ExpenseIQ',
    stack: ['MERN', 'Redux', 'Chart.js', 'Plaid API'],
    desc: 'Smart budget tracker with bank integration, AI-powered categorisation, and analytics.',
    color: '#06b6d4',
    emoji: '💰',
    github: 'https://github.com/nullcoderxxi/expenseiq',
    demo: '#',
  },
  {
    name: 'ChatterBox',
    stack: ['MERN', 'Socket.io', 'Redis', 'Docker'],
    desc: 'Real-time chat application with private/group rooms, online presence, and file sharing.',
    color: '#ec4899',
    emoji: '💬',
    github: 'https://github.com/nullcoderxxi/chatterbox',
    demo: '#',
  },
  {
    name: 'MedBook',
    stack: ['MERN', 'Stripe', 'AWS', 'Twilio'],
    desc: 'Healthcare appointment booking system with SMS reminders and telemedicine support.',
    color: '#f59e0b',
    emoji: '🏥',
    github: 'https://github.com/nullcoderxxi/medbook',
    demo: '#',
  },
  {
    name: 'ShopSphere',
    stack: ['MERN', 'Redux', 'Stripe', 'AWS S3'],
    desc: 'Full-featured e-commerce platform with payments, inventory management, and admin dashboard.',
    color: '#00f5d4',
    emoji: '🛒',
    github: 'https://github.com/nullcoderxxi/shopsphere',
    demo: '#',
  },
];

function ProjectCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, rotateX: 4, rotateY: 4 }}
      style={{
        background: hovered
          ? `rgba(${project.color === '#00f5d4' ? '0,245,212' : project.color === '#06b6d4' ? '6,182,212' : project.color === '#818cf8' ? '129,140,248' : project.color === '#f59e0b' ? '245,158,11' : project.color === '#10b981' ? '16,185,129' : project.color === '#ec4899' ? '236,72,153' : '0,245,212'},0.07)`
          : 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '20px',
        padding: '28px',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? `0 20px 40px ${project.color}15, 0 0 20px ${project.color}15` : 'none',
        display: 'flex',
        flexDirection: 'column',
        perspective: '1000px',
        cursor: 'default',
      }}
    >
      {/* Emoji header */}
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '14px',
        background: `${project.color}15`,
        border: `1px solid ${project.color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '26px',
        marginBottom: '18px',
        boxShadow: hovered ? `0 0 20px ${project.color}30` : 'none',
        transition: 'all 0.3s',
      }}>
        {project.emoji}
      </div>

      <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
        {project.name}
      </h3>
      <p style={{ color: '#718096', fontSize: '13px', lineHeight: 1.7, marginBottom: '18px', flexGrow: 1 }}>
        {project.desc}
      </p>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 600,
              color: project.color,
              border: `1px solid ${project.color}30`,
              background: `${project.color}0d`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <a
          href={project.demo}
          target={project.demo !== '#' ? '_blank' : undefined}
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: '9px 0',
            background: project.demo !== '#'
              ? `linear-gradient(135deg, ${project.color}, ${project.color}bb)`
              : 'rgba(255,255,255,0.06)',
            color: project.demo !== '#' ? '#0d1117' : '#4a5568',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
            textAlign: 'center',
            transition: 'all 0.2s',
            border: project.demo !== '#' ? 'none' : '1px solid rgba(255,255,255,0.08)',
            cursor: project.demo !== '#' ? 'pointer' : 'default',
          }}
        >
          {project.demo !== '#' ? '🔗 Live Demo' : '🔜 Coming Soon'}
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: '9px 0',
            border: `1px solid ${project.color}40`,
            color: project.color,
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 700,
            textAlign: 'center',
            background: 'transparent',
            transition: 'all 0.2s',
          }}
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" style={{ padding: '100px 24px', background: 'linear-gradient(180deg, #0a0f16 0%, #0d1117 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            What I've built
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff' }}>
            Featured <span style={{ color: '#00f5d4' }}>Projects</span>
          </h2>
        </motion.div>

        {inView && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 0.04} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
