import { motion } from 'framer-motion';

function Cover({ data }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linen">
      <img className="absolute inset-0 h-full w-full object-cover" src={data.image} alt="웨딩 커버" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-stoneText/55" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative z-10 flex min-h-screen flex-col justify-end px-8 pb-16 text-white"
      >
        <p className="mb-5 text-xs tracking-[0.34em]">WEDDING INVITATION</p>
        <h1 className="font-serif text-[42px] font-medium leading-tight">
          {data.groom}
          <span className="mx-3 text-2xl">&</span>
          {data.bride}
        </h1>
        <div className="mt-8 h-px w-16 bg-white/70" />
        <p className="mt-8 text-sm tracking-[0.18em]">{data.date}</p>
        <p className="mt-2 text-sm">{data.time}</p>
        <p className="mt-5 text-sm text-white/88">{data.venue}</p>
      </motion.div>
    </section>
  );
}

export default Cover;
