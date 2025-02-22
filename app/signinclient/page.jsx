import React from 'react'
import Image from "next/image";
const Signinclient = () => {
  return (
    <>

<div className='pt-64 pb-64 bg-black '>
<div class="pt-100 flex flex-col  px-6 py-12 lg:px-8 ">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">


    {/* <Image className="mx-auto h-10 w-auto"
       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="nature image"></Image> */}
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight main-color">S&apos;authentifier </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Adress Email</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-black sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-white">Mot Passe</label>
          <div class="text-sm">
            <a href="#" class="font-semibold main-color hover:text-white">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:text-black sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-gradient-to-br from-[#222221] to-[#C74501] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S&apos;authentifier</button>
      </div>
    </form>

    {/* <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p> */}
  </div>
</div>
</div>

    </>
  )
}

export default Signinclient