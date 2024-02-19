"use client";
import Landing from "@/components/Landing";
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

export default function Index() {
  return (
    <main className="flex h-screen bg-black">
      <Scene />
    </main>
  );
}
