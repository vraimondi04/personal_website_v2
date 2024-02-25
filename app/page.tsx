"use client";
import Landing from "@/components/Landing";
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

const sectionNames = ['Hi, I\'\m Vincent', 'Experience', 'Projects', 'About'];

export default function Index() {
  return (
    <>
    <div className="flex h-90v sm:h-screen bg-[#171616]">
      {/* <div className="h-4/6"> */}
        <Scene sectionName={sectionNames[0]} />
      {/* </div> */}
      {/* <p className="text-4xl m-10 text-white">hi</p> */}
    </div>
    <div className="flex sm:h-screen bg-[#171616]">
      <Scene sectionName={sectionNames[1]} />
    </div>
    <div className="flex sm:h-screen bg-[#171616]">
      <Scene sectionName={sectionNames[2]} />
    </div>
    <div className="flex sm:h-screen bg-[#171616]">
      <Scene sectionName={sectionNames[3]} />
    </div>
    <Landing />
    </>
  );
}
