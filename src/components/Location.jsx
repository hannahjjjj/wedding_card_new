import { FiMapPin, FiNavigation } from 'react-icons/fi';
import Section from './Section.jsx';

function Location({ data }) {
  return (
    <Section eyebrow="LOCATION" title="오시는 길">
      <div className="overflow-hidden rounded-lg border border-sand/70 bg-white">
        <img className="h-44 w-full object-cover" src={data.mapImage} alt="지도 이미지" />
        <div className="p-6">
          <div className="flex items-start gap-3">
            <span className="mt-1 text-xl text-stoneText">
              <FiMapPin />
            </span>
            <div>
              <h3 className="font-serif text-xl text-stoneText">{data.name}</h3>
              <p className="mt-2 text-sm leading-6 text-mutedText">{data.address}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 rounded-md border border-sand bg-linen px-2 py-3 text-[12px] text-stoneText"
              >
                <FiNavigation className="shrink-0" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Location;
