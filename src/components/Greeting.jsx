import { FiMessageCircle, FiPhone } from 'react-icons/fi';
import Section from './Section.jsx';

function Greeting({ data, contacts }) {
  return (
    <Section eyebrow="INVITATION" title={data.title}>
      <p className="mx-auto max-w-sm whitespace-pre-line text-center font-serif text-[17px] leading-9 text-stoneText">
        {data.message}
      </p>
      <div className="mt-10 space-y-2 text-center text-sm text-mutedText">
        <p>{data.parents.groom}</p>
        <p>{data.parents.bride}</p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3">
        {contacts.map((contact) => (
          <div key={contact.role} className="rounded-lg border border-sand/70 bg-white px-4 py-5 text-center">
            <p className="text-xs text-mutedText">{contact.role}</p>
            <p className="mt-1 font-serif text-lg text-stoneText">{contact.name}</p>
            <div className="mt-4 flex justify-center gap-2">
              <a
                href={`tel:${contact.phone}`}
                aria-label={`${contact.role}에게 전화하기`}
                className="grid h-10 w-10 place-items-center rounded-full bg-linen text-stoneText"
              >
                <FiPhone />
              </a>
              <a
                href={`sms:${contact.phone}`}
                aria-label={`${contact.role}에게 문자하기`}
                className="grid h-10 w-10 place-items-center rounded-full bg-stoneText text-white"
              >
                <FiMessageCircle />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Greeting;
