"use client";

import { SectionHeader } from "@/components/section-header";
import { Card } from "@/components/card";
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavaIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GithubIcon from "@/assets/icons/github.svg"
import { ToolBoxItems } from "@/components/toolBoxItems";
import { CardHeader } from "@/components/CardHeader";
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolbox = [
  {
    title: 'JavaScript',
    iconType: JavaIcon ,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon ,
  },
  {
    title: 'CSS3',
    iconType: CssIcon ,
  },
  {
    title: 'REACT',
    iconType: ReactIcon ,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon 
  },
  {
    title: 'GitHub',
    iconType: GithubIcon ,
  },
  {
    title: 'TypeScript',
    iconType: GithubIcon ,
  },
];

const hobbies =[
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '🏸',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
]

export const About = () => {
  const constraintRef = useRef(null)
  return (
  <section className="py-16 lg:py-20">
    <div className="container">
      <SectionHeader
      eyebrow="A glimpse into our world" 
      title="About Us" 
      description="Learn more about who we are, what we do and what inspires us"/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="sm:grid-cols-1 grid md:grid-cols-5 gap-8">
          <Card className="h-[320px] md:col-span-2 ">
            <CardHeader title="Our Reads" description="Explore the books shaping our perspectives"/>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book cover"/>
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3">
            <CardHeader title="My Toolbox" description="Explore the technologies and tools we use to create amazing digital experiences" className=""/>
            <ToolBoxItems items={toolbox} className="" itemsWrapperClassName="animate-move-left [animation-duration:20s]"/>
            <ToolBoxItems items={toolbox} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:22s]"/>
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-5">
            <CardHeader className="p-6" title="Beyond the Code" description="Explore our interests and hobbies beyond there"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) =>(
                <motion.div className="cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top
                }}
                drag
                dragConstraints= {constraintRef}
                key={hobby.title}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
  );
};
