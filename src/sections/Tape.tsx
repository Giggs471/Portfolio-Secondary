import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable"
];

export const Tape = () => {
  return (
  <div className="py-16">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment>
              {words.map(word => (
                <div className="inline-flex gap-4 items-center" key={word}>
                  <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                </div>
              ))}
            </Fragment>
          ))}
          
        </div>
      </div>
    </div>
  </div>
  );
};
