"use client";
import React from "react";
import "./styles.css";
import Image from "next/image";
import image2 from "@/public/image2.jpg";

import { useRouter } from "next/navigation";

const LeadtosignuporUpOrIn = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    // <div className="main-container">
    //   {/* <div className="overlay2 w-[100rem] h-[50rem]"></div> */}

    // </div>
<div class="w-full h-full landing" id="home">
        <div class="overflow-hidden w-full h-full">
          <Image
            className="overflow-hidden w-[100rem] h-[50rem] hidden md:block"
            src={image2}
            alt="lawyer image 2"
          ></Image>
          <div class="text">
            <div class="content">
              <h1 className="main-color lg:text-7xl text-2xl pt-10 pb-10">
                Comment jeu peux utiliser cette platforme ?
              </h1>
              <p className="lg:font-size-text text-white font-bold ">
                il faut tout dabords creer un compte comme
                <span className="main-color"> un avocat</span> ou bien comme{" "}
                <span className="main-color">un Client</span> ou bien comme un{" "}
                <span className="main-color" >conseiller juridique</span>
si Vous Avez un Compte <span  className="main-color underline cursor-pointer" onClick={() => navigate("signinclient")}> Clicker Ici </span>
                  Ensuite les client se retrouve dans une page pour trouvez des
                conseillez juridique ou bien des avocats et les conseillez
                juridique dans une page pour recevez des client et modifier ces
                personnelle information et la meme chose pour les avocats des
                que vous s&apos;inscrir nous allons vous guider
              </p>
              <div className="buttons-Sign-Up">
                <button
                  className=" w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] "
                  onClick={() => navigate("signupclient")}
                >
                  Sign Up comme Un Client
                </button>

                <button
                  className="w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#C74501] "
                  onClick={() => navigate("signuplawer")}
                >
                  Sign Up comme Un Avocat
                </button>

                <button
                  className="w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#C74501] "
                  onClick={() => navigate("signuplawer")}
                >
                  Sign Up comme Un conseiller juridique
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* <ul class="bullets">
        <li></li>
        <li class="active-bullet"></li>
        <li></li>
      </ul> */}
      </div>
  );
};

export default LeadtosignuporUpOrIn;
