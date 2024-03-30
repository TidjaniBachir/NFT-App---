import React from 'react'
import Image from "next/image";
import './styles.css'
import image from "@/public/image1.jpg"
const Getstarted = () => {
  return (
    <>
     <div className="main-container bg-black">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex  justify-center lg:grid" aria-label="Global">
      <div className="flex justify-between  lg:flex lg:gap-x-12 ">
        <a href="#" className="text-sm font-semibold leading-6 text-white p-4">Bienvenu</a>
        <a href="#" className="text-sm font-semibold leading-6 text-white p-4">pourqui une platforme juridique</a>
        <a href="#" className="text-sm font-semibold leading-6 text-white p-4">pourquoi nous</a>
        <a href="#" className="text-sm font-semibold leading-6 text-white p-4">S&apos;authentifier</a>
      </div>

    </nav>


    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}


  </header>

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d00] to-[#ff4d00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] style1" ></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">

      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight main-color sm:text-6xl">Bienvenu dans Avocat Enligne la premiere platforme pour trouver des avocat et des conseillers juridique  en algerie</h1>
        <p className="mt-6 text-lg leading-8 text-white">Dans cete platforme vous pouvez trouver des avocat et des conseillers juridique enligne et aussi les avocats et les conseiller juridique peux trouver des clients de nimporte ou dans lagerie </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md main-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Commencer</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white"> <span aria-hidden="true">savoir plus→</span></a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff4d00] to-[#ff4d00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] style2" ></div>
    </div>
  </div>
</div>


    </>
  )
}

export default Getstarted