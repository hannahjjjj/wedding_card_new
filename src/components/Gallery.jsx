import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import Section from './Section.jsx';

function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const previewImages = images.slice(0, 4);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = (event) => {
    event?.stopPropagation();
    setSelectedIndex((currentIndex) => (currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length));
  };

  const showNextImage = (event) => {
    event?.stopPropagation();
    setSelectedIndex((currentIndex) => (currentIndex === null ? currentIndex : (currentIndex + 1) % images.length));
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <Section eyebrow="GALLERY" title="" className="bg-linen/70">
      <div className="grid grid-cols-2 gap-2">
        {previewImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="relative overflow-hidden rounded-md bg-sand"
            aria-label={`갤러리 사진 ${index + 1} 확대`}
          >
            <img className="aspect-square h-full w-full object-cover" src={image} alt={`웨딩 갤러리 ${index + 1}`} />
            {index === 3 && images.length > 4 && (
              <span className="absolute inset-0 grid place-items-center bg-black/35 text-lg font-medium text-white">
                +{images.length - 4}
              </span>
            )}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {selectedIndex !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center bg-black/82 p-5"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white"
              onClick={() => setSelectedIndex(null)}
              aria-label="닫기"
            >
              <FiX />
            </button>
            {hasMultipleImages && (
              <button
                type="button"
                className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl text-white"
                onClick={showPreviousImage}
                aria-label="이전 사진"
              >
                <FiChevronLeft />
              </button>
            )}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) {
                  showNextImage();
                }

                if (info.offset.x > 70) {
                  showPreviousImage();
                }
              }}
              src={selectedImage}
              alt={`확대된 웨딩 사진 ${selectedIndex + 1}`}
              className="max-h-[82vh] w-full max-w-[440px] rounded-lg object-contain"
              onClick={(event) => event.stopPropagation()}
            />
            {hasMultipleImages && (
              <button
                type="button"
                className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-3xl text-white"
                onClick={showNextImage}
                aria-label="다음 사진"
              >
                <FiChevronRight />
              </button>
            )}
            <p className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs text-white">
              {selectedIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default Gallery;
