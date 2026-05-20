import { motion } from 'framer-motion';

function IntroSplash({ data }) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="mx-auto grid min-h-screen w-full max-w-[480px] place-items-center overflow-hidden bg-paper px-8 text-center shadow-soft"
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute left-1/2 top-24 h-24 w-px origin-top bg-sand"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
          className="font-script text-[78px] leading-none text-stoneText"
        >
          Dreamland
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
          className="mt-8"
        >
          <p className="text-sm text-mutedText">
            {data.groom} <span className="mx-2 text-sand">|</span> {data.bride}
          </p>
          <p className="mt-3 text-[11px] tracking-[0.28em] text-mutedText">{data.date}</p>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
          className="mt-12 h-px w-20 origin-center bg-sand"
        />
      </div>
    </motion.section>
  );
}

export default IntroSplash;
