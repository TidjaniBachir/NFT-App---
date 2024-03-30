import React from 'react'

const UserAfterSignUp = () => {
  return (
//     <!--
//     This example requires some changes to your config:

//     ```
//     // tailwind.config.js
//     module.exports = {
//       // ...
//       plugins: [
//         // ...
//         require('@tailwindcss/forms'),
//       ],
//     }
//     ```
//   -->
  <div className="main-container relative isolate overflow-hidden bg-gradient-to-tr from-[#000] to-[#ff4d00] py-16 sm:py-24 lg:py-32">
    <div className=" max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Entre le Code de votre avocat</h2>

          <div className="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6" placeholder="Entre le code ici"/>
            <button type="submit" className="flex-none rounded-md bg-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Envoyez</button>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">

            <dt className="mt-4 font-semibold text-white">Il faut que vous visitez le centre de votre avocat vous pouvez trouver un si vou n&apos;avez pas davocat</dt>
            <dd className="mt-2 leading-7 text-gray-400">
            <button className="rounded-md bg-white/5 p-10 ring-1 ring-white/10">
            clicker ici
</button>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            {/* <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
              </svg>
            </div> */}
            <dt className="mt-[-20px] font-semibold text-white"> Aprez que vous entrez le code avocat vous allez recevez tous les information concernat votre cas juruqiue avec votre avocat ,vous pouvez aussi utilisez notre application mobile</dt>
            <dd className="mt-2 leading-7 text-gray-400"><button className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
  Clickez ici si vous voulez la télécharger
</button></dd>
          </div>
        </dl>
      </div>
    </div>
    <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 style1" ></div>
    </div>
  </div>

  )
}

export default UserAfterSignUp