import { motion } from 'framer-motion';

function Section({ eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`px-7 py-16 ${className}`}
    >
      {(eyebrow || title) && (
        <div className="mb-9 text-center">
          {eyebrow && <p className="mb-3 text-[11px] tracking-[0.28em] text-mutedText">{eyebrow}</p>}
          {title && <h2 className="font-serif text-2xl font-medium text-stoneText">{title}</h2>}
        </div>
      )}
      {children}
    </motion.section>
  );
}

export default Section;
