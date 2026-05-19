import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown, FiCopy } from 'react-icons/fi';
import Section from './Section.jsx';
import Toast from './Toast.jsx';

function Account({ accounts }) {
  const [openSide, setOpenSide] = useState(accounts[0]?.side);
  const [toast, setToast] = useState('');

  const copyAccount = async (item) => {
    await navigator.clipboard.writeText(`${item.bank} ${item.number} ${item.holder}`);
    setToast('계좌번호가 복사되었습니다.');
    window.setTimeout(() => setToast(''), 1800);
  };

  return (
    <Section eyebrow="ACCOUNT" title="마음 전하실 곳" className="bg-linen/70">
      <div className="space-y-3">
        {accounts.map((group) => {
          const isOpen = openSide === group.side;

          return (
            <div key={group.side} className="overflow-hidden rounded-lg border border-sand/70 bg-white">
              <button
                type="button"
                onClick={() => setOpenSide(isOpen ? '' : group.side)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-serif text-lg text-stoneText">{group.side}</span>
                <FiChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 border-t border-sand/60 p-4">
                      {group.items.map((item) => (
                        <div key={`${item.bank}-${item.number}`} className="rounded-md bg-linen px-4 py-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <p className="text-sm text-stoneText">
                                {item.bank} <span className="text-mutedText">{item.holder}</span>
                              </p>
                              <p className="mt-1 text-sm tracking-wide text-mutedText">{item.number}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => copyAccount(item)}
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-stoneText text-white"
                              aria-label={`${item.holder} 계좌번호 복사`}
                            >
                              <FiCopy />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <Toast message={toast} />
    </Section>
  );
}

export default Account;
