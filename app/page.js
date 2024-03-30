import React from 'react'
import './globals.css'
import Getstarted from "@/components/getstarted/page";
import Whyus from "@/components/whyus/page";
import Clientpage from "@/components/clientpage/page";
import LeadtosignuporUpOrIn from "@/components/leadtosignuporin/page";
import Signinclient from "@/app/signinclient/page";

import Lawyerdiscription from "@/components/lawyerdiscription/page";
import SignupClient from "@/app/signupclient/page";
import WhyThisTypePlatforme from "@/components/whyus/page";
import WhyUs from "@/components/clientpage/page";
import Consigerjuridique from "@/components/consigerjuridique/page";
import Avocatpage from "@/components/avocat/page";
import UserAfterSignUp from "@/components/userAfterSignUp/page";
import ListesDesConsegerJuridique from "@/app/listesDesConsegerJuridique/page";
import Signinavocat from "@/app/sgnInAvocat/page";
import Avocatsettingpage from "@/components/avocatSetingPage/page";
import LawyerdiscriptionForClient from '@/components/lawyerdiscription/page';
import Signuplawyer from '@/app/signuplawer/page';

const page = () => {
  return (

<div className='w-full h-full'>
      <Getstarted></Getstarted>
      <WhyThisTypePlatforme></WhyThisTypePlatforme>
     <WhyUs></WhyUs>
     <LeadtosignuporUpOrIn></LeadtosignuporUpOrIn>
<ListesDesConsegerJuridique></ListesDesConsegerJuridique>

     {/* <Avocatpage></Avocatpage>
 <Avocatsettingpage></Avocatsettingpage>
     <LawyerdiscriptionForClient></LawyerdiscriptionForClient>
     <Consigerjuridique></Consigerjuridique> */}
     {/* <Signinclient></Signinclient> */}
     {/* <SignupLawyer></SignupLawyer> */}
{/* <Signinclient></Signinclient> */}
     {/* <UserAfterSignUp></UserAfterSignUp> */}
{/* <Signinavocat></Signinavocat> */}

</div>



  )
}

export default page