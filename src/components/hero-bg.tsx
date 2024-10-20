import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/hero-orbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroBg = () => {
    return (
        <>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" starSpin starRotate="22s">
            <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" starRotate="9s" starSpin>
            <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" starRotate="10s" starSpin>
            <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
            <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={179} shouldOrbit orbitDuration="36s">
            <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={144} shouldOrbit orbitDuration="46s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={85} shouldOrbit orbitDuration="44s">
            <span className="size-3 bg-emerald-300/10 rounded-full"></span>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
            <span className="size-2 bg-emerald-300/10 rounded-full"></span>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
            <span className="size-3 bg-emerald-300/10 rounded-full"></span>
        </HeroOrbit>
        </>
    )
}