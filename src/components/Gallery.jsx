import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import Section from './Section.jsx';

function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Section eyebrow="GALLERY" title="우리의 순간들" className="bg-linen/70">
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-md bg-sand ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
            aria-label={`갤러리 사진 ${index + 1} 확대`}
          >
            <img className="aspect-square h-full w-full object-cover" src={image} alt={`웨딩 갤러리 ${index + 1}`} />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/82 p-5"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white"
              onClick={() => setSelectedImage(null)}
              aria-label="닫기"
            >
              <FiX />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={selectedImage}
              alt="확대된 웨딩 사진"
              className="max-h-[82vh] w-full max-w-[440px] rounded-lg object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default Gallery;
