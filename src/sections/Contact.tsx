import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  return (
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-10">
            <div className="absolute inset-0 opacity-5 -z-10" 
            style={{
              backgroundImage: `url(${grainImage.src})`
            }}
            ></div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="">
                <h2 className="font-serif text-2xl md:text-3xl">Let's create something together</h2>
                <p className='text-sm mt-2 md:text-base'>Ready to bring your next project to life? Let's connect and discuss how we can help you achieve your goals.</p>
              </div>
              <div className="">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer hover:bg-transparent hover:text-gray-900 transition-all ease-in-out duration-300 hover:scale-105">
                  <span className='font-semibold '>Contact me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
