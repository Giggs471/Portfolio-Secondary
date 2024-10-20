import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/section-header";
import {Card} from "@/components/card"

const portfolioProjects = [

  {
    company: "AI-SEO",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "NextJS, TypeScript, TailwindCSS" },
      { title: "Animations created using FramerMotion" },
      { title: "Increased user engagement by 70% with visually appealing elements" },
    ],
    link: "www.google.com",
    image: aiStartupLandingPage,
  },
  {
    company: "AI-SEO",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "NextJS, TypeScript, TailwindCSS" },
      { title: "Animations created using FramerMotion" },
      { title: "Increased user engagement by 70% with visually appealing elements" },
    ],
    link: "www.google.com",
    image: aiStartupLandingPage,
  },
  {
    company: "AI-SEO",
    year: "2024",
    title: "AI Startup Landing Page",
    results: [
      { title: "NextJS, TypeScript, TailwindCSS" },
      { title: "Animations created using FramerMotion" },
      { title: "Increased user engagement by 70% with visually appealing elements" },
    ],
    link: "www.google.com",
    image: aiStartupLandingPage,
  },
];

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how we help our clients achieve their goals." />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card className="px-8 pt-8 lg:pt-16 lg:px-20 pb-0 sticky" key={project.title}
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 bg-clip-text text-transparent">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 mb-4 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckIcon className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-7">
                      <span>View Project</span>
                      <ArrowIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:h-full lg:w-auto lg:absolute lg:max-w-none"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
