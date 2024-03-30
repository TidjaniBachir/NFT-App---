"use client"
import React from 'react'
import image1 from "@/public/image1.jpg";
import Image from "next/image";
import "./styles.css"
import { useRouter } from "next/navigation";
import Link from 'next/link'
const ListesDesConsegerJuridique = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  return (
<div className="overflow-hidden bg-gradient-to-tr from-[#000] to-[#ff4d00] py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight main-color sm:text-4xl">Trouvez Un Conseillez juridique</h2>
      <p className="mt-2 text-lg leading-8 text-white">Voici les liste des conseillez juridique</p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <div datetime="2020-03-16" className="text-white">Mar 16, 2020</div>
          <div  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</div>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <div className='text-black' href="#">
              <span className="absolute inset-0 text-black"></span>
              Boost your conversion rate
            </div>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <div >
                <span className="absolute inset-0"></span>
                Michael Foster
              </div>
            </p>
            <p className="text-white">Co-Founder / CTO</p>


          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-white">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <a className='text-black' href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-white">Co-Founder / CTO</p>

          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-white">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <a className='text-black' href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-white">Co-Founder / CTO</p>

          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-white">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <a className='text-black' href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-white">Co-Founder / CTO</p>

          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-white">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <a className='text-black' href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-white">Co-Founder / CTO</p>

          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="flex items-center gap-x-4 text-xs">
          <time datetime="2020-03-16" className="text-white">Mar 16, 2020</time>
          <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white hover:bg-gray-100">Marketing</a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
            <a className='text-black' href="#">
              <span className="absolute inset-0"></span>
              Boost your conversion rate
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">

          <Image classNameName="h-10 w-10 rounded-full bg-gray-50"  width={100} height={100} src={image1} alt='img'></Image>
          <div className="text-sm leading-6">
            <p className="font-semibold text-white">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-white">Co-Founder / CTO</p>

          </div>
        </div>
        <button  className='mt-[-30px] ml-[300px] w-[6rem] lg:w-[6rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] text-white rounded-sm' onClick={()=>navigate("ConsegerJuridiqueDescription")}>Contacter</button>
      </article>

      {/* <!-- More posts... --> */}
    </div>
  </div>
</div>


  )
}

export default ListesDesConsegerJuridique