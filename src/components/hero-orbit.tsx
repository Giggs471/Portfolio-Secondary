import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({children,size,rotation,orbitDuration,shouldOrbit = false,starSpin = false,starRotate}:PropsWithChildren<{size:number;rotation:number;orbitDuration?:string;shouldOrbit?:boolean;starSpin?:boolean;starRotate?:string}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className={twMerge(shouldOrbit === true && "animate-spin")} style={{animationDuration: orbitDuration}}>
        <div className="flex items-start justify-start" style={{width: `${size}px`, height: `${size}px`, transform: `rotate(${rotation}deg)`}}> 
          <div className={twMerge(starSpin === true && "animate-spin ")} style={{animationDuration: starRotate}}>
            <div className="inline-flex " style={{transform: `rotate(${-rotation}deg)`}}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}