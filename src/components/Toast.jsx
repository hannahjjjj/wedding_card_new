import { AnimatePresence, motion } from 'framer-motion';

function Toast({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-40px)] max-w-[420px] -translate-x-1/2 rounded-full bg-stoneText px-5 py-3 text-center text-sm text-white shadow-soft"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Toast;
