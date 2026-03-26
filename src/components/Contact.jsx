import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';

const socials = [
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aman1999/' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/nullcoderxxi' },
  { icon: '📧', label: 'Email', href: 'mailto:amandeepsiingh22@gmail.com' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(0,245,212,0.2)',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', background: '#0d1117' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ color: '#00f5d4', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontFamily: 'monospace' }}>
            Let's talk
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Get In <span style={{ color: '#00f5d4' }}>Touch</span>
          </h2>
          <p style={{ color: '#718096', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.1 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,245,212,0.15)',
            borderRadius: '24px',
            padding: '40px',
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '18px' }}>
              <div>
                <label style={{ color: '#a0aec0', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Amandeep Singh"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#00f5d4'; e.target.style.boxShadow = '0 0 15px rgba(0,245,212,0.15)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,212,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <div>
                <label style={{ color: '#a0aec0', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = '#00f5d4'; e.target.style.boxShadow = '0 0 15px rgba(0,245,212,0.15)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,212,0.2)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ color: '#a0aec0', fontSize: '13px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={6}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                onFocus={(e) => { e.target.style.borderColor = '#00f5d4'; e.target.style.boxShadow = '0 0 15px rgba(0,245,212,0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(0,245,212,0.2)'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,245,212,0.5)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                width: '100%',
                padding: '15px',
                background: status === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #00f5d4, #06b6d4)',
                color: '#0d1117',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                boxShadow: '0 0 20px rgba(0,245,212,0.3)',
                transition: 'all 0.2s',
                opacity: status === 'sending' ? 0.7 : 1,
              }}
            >
              {status === 'sending' ? '⏳ Sending...' : status === 'success' ? '✅ Message Sent!' : status === 'error' ? '❌ Try Again' : '🚀 Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,245,212,0.2)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#a0aec0',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s',
                boxShadow: '0 0 10px rgba(0,245,212,0.05)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00f5d4'; e.currentTarget.style.color = '#00f5d4'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(0,245,212,0.2)'; e.currentTarget.style.color = '#a0aec0'; }}
            >
              <span style={{ fontSize: '18px' }}>{s.icon}</span>
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
