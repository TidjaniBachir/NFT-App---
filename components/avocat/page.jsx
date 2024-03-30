import React from 'react'
import image1 from "@/public/image1.jpg";
import Image from "next/image";
import "./styles.css"

const Avocatpage = () => {
  return (
    <div className=" d-flex bg-gradient-to-tr from-[#000] to-[#ff4d00]">
    {/* <div className=" bg-gradient-to-tr from-[#000] to-[#ff4d00] p-20 p-relative">
      <h3 className="p-relative txt-c mt-0">Elzero</h3>
      <ul>
        <li>
          <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href="index.html">
            <i className="fa-regular fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
            <i className="fa-solid fa-gear fa-fw"></i>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
            <i className="fa-regular fa-user fa-fw"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="projects.html">
            <i className="fa-solid fa-diagram-project fa-fw"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="courses.html">
            <i className="fa-solid fa-graduation-cap fa-fw"></i>
            <span>Courses</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="friends.html">
            <i className="fa-regular fa-circle-user fa-fw"></i>
            <span>Friends</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="files.html">
            <i className="fa-regular fa-file fa-fw"></i>
            <span>Files</span>
          </a>
        </li>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="plans.html">
            <i className="fa-regular fa-credit-card fa-fw"></i>
            <span>Plans</span>
          </a>
        </li>
      </ul>
    </div> */}
    <div className="content w-full">
      {/* <!-- Start Head --> */}
      <div className="head bg-gradient-to-tr from-[#000] to-[#ff4d00] p-15 between-flex">
        <div className="search p-relative">
          <input className="p-10" type="search" placeholder="Type A Keyword" />
        </div>
        <div className="icons d-flex align-center">
          <span className="notification p-relative">
            <i className="fa-regular fa-bell fa-lg"></i>
          </span>
          <Image  width={100} height={100} src={image1} alt='img'></Image>
        </div>
      </div>
      {/* <!-- End Head --> */}
      <h1 className="text-white p-[40px] p-relative">Voici Votre Page Avocat</h1>
      <div className="wrapper d-grid gap-20 bg-gradient-to-tr from-[#000] to-[#ff4d00]">
        {/* <!-- Start Welcome Widget --> */}
        <div className="welcome bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 txt-c-mobile block-mobile">
          <div className="intro p-20 d-flex space-between bg-eee bg-gradient-to-tr from-[#000] to-[#ff4d00]">
            <div className=''>
              <h2 className="m-0">Welcome</h2>
              <p className="text-white mt-5">Utilisateur</p>
            </div>
            <Image  width={100} height={100} src={image1} alt='img'></Image>
          </div>
          <Image  width={100} height={100} src={image1} alt='img'></Image>
          <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
            <div>Avocat Nom <span className="d-block text-white fs-14 mt-10">Avocat</span></div>
            <div>80 <span className="d-block text-white fs-14 mt-10">Nembre De Cas</span></div>
            <div>85000 DA <span className="d-block text-white fs-14 mt-10">Earned</span></div>
          </div>
          <a href="profile.html" className="visit d-block fs-14 bg-blue text-black w-fit btn-shape">Profile</a>
        </div>
        {/* <!-- End Welcome Widget -->
        <!-- Start Quick Draft Widget --> */}
        <div className="quick-draft p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Ajouter un cas </h2>
          <p className="mt-0 mb-20 text-white fs-15">Description</p>
          <form>
            <input className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" type="text" placeholder="Title" />
            <textarea className="d-block mb-20 w-full p-10 b-none bg-eee rad-6" placeholder="Your Thought"></textarea>
            <input className="save d-block fs-14 bg-blue text-black b-none w-fit btn-shape" type="submit" value="Save" />
          </form>
        </div>
        {/* <!-- End Quick Draft Widget -->
        <!-- Start Targets Widget --> */}
        <div className="targets p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Yearly Targets</h2>
          <p className="mt-0 mb-20 text-white fs-15">Targets Of The Year</p>
          <div className="target-row mb-20 blue center-flex">
            <div className="icon center-flex">
              <i className="fa-solid fa-dollar-sign fa-lg c-blue"></i>
            </div>
            <div className="details">
              <span className="fs-14 text-white">Money</span>
              <span className="d-block mt-5 mb-10 fw-bold">$20.000</span>
              <div className="progress p-relative">
                <span className="bg-blue blue style1" >
                  <span className="bg-blue">80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex orange">
            <div className="icon center-flex">
              <i className="fa-solid fa-code fa-lg c-orange"></i>
            </div>
            <div className="details">
              <span className="fs-14 text-white">Projects</span>
              <span className="d-block mt-5 mb-10 fw-bold">24</span>
              <div className="progress p-relative">
                <span className="bg-orange orange style2" >
                  <span className="bg-orange">55%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row mb-20 center-flex green">
            <div className="icon center-flex">
              <i className="fa-solid fa-user fa-lg c-green"></i>
            </div>
            <div className="details">
              <span className="fs-14 text-white">Team</span>
              <span className="d-block mt-5 mb-10 fw-bold">12</span>
              <div className="progress p-relative">
                <span className="bg-green green style3" >
                  <span className="bg-green">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Targets Widget -->
        <!-- Start Ticket Widget --> */}
        <div className="tickets p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Tickets Statistics</h2>
          <p className="mt-0 mb-20 text-white fs-15">Everything About Support Tickets</p>
          <div className="d-flex txt-c gap-20 f-wrap">
            <div className="box p-20 rad-10 fs-13 text-white">
              <i className="fa-regular fa-rectangle-list fa-2x mb-10 c-orange"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">2500</span>
              Total
            </div>
            <div className="box p-20 rad-10 fs-13 text-white">
              <i className="fa-solid fa-spinner fa-2x mb-10 c-blue"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">500</span>
              Pending
            </div>
            <div className="box p-20 rad-10 fs-13 text-white">
              <i className="fa-regular fa-circle-check fa-2x mb-10 c-green"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">1900</span>
              Closed
            </div>
            <div className="box p-20 rad-10 fs-13 text-white">
              <i className="fa-regular fa-rectangle-xmark fa-2x mb-10 c-red"></i>
              <span className="d-block c-black fw-bold fs-25 mb-5">100</span>
              Deleted
            </div>
          </div>
        </div>
        {/* <!-- End Ticket Widget -->
        <!-- Start Latest News Widget --> */}
        <div className="latest-news p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 txt-c-mobile">
          <h2 className="mt-0 mb-20">Latest News</h2>
          <div className="news-row d-flex align-center">
          <Image  width={100} height={100} src={image1} alt='img'></Image>
            <div className="info">
              <h3>Created SASS Section</h3>
              <p className="m-0 fs-14 text-white">New SASS Examples & Tutorials</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">3 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
          <Image  width={100} height={100} src={image1} alt='img'></Image>
            <div className="info">
              <h3>Changed The Design</h3>
              <p className="m-0 fs-14 text-white">A Brand New Website Design</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">5 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
          <Image  width={100} height={100} src={image1} alt='img'></Image>
            <div className="info">
              <h3>Team Increased</h3>
              <p className="m-0 fs-14 text-white">3 Developers Joined The Team</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">7 Days Ago</div>
          </div>
          <div className="news-row d-flex align-center">
          <Image  width={100} height={100} src={image1} alt='img'></Image>
            <div className="info">
              <h3>Added Payment Gateway</h3>
              <p className="m-0 fs-14 text-white">Many New Payment Gateways Added</p>
            </div>
            <div className="btn-shape bg-eee fs-13 label">9 Days Ago</div>
          </div>
        </div>
        {/* <!-- End Latest News Widget -->
        <!-- Start Tasks Widget --> */}
        <div className="tasks p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-20">Latest Tasks</h2>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Record One New Video</h3>
              <p className="m-0 text-white">Record Python Create Exe Project</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Write Article</h3>
              <p className="m-0 text-white">Write Low Level vs High Level Languages</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Finish Project</h3>
              <p className="m-0 text-white">Publish Academy Programming Project</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex done">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Attend The Meeting</h3>
              <p className="m-0 text-white">Attend The Project Business Analysis Meeting</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="task-row between-flex">
            <div className="info">
              <h3 className="mt-0 mb-5 fs-15">Finish Lesson</h3>
              <p className="m-0 text-white">Finish Teaching Flex Box</p>
            </div>
            <i className="fa-regular fa-trash-can delete"></i>
          </div>
        </div>
        {/* <!-- End Tasks -->
        <!-- Start Top Search Word Widget --> */}
        <div className="search-items p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-20">Top Search Items</h2>
          <div className="items-head d-flex space-between text-white mb-10">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span className='text-white'>Programming</span>
            <span className="bg-eee fs-13 btn-shape text-white">220</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15 text-white">
            <span className='text-white'>JavaScript</span>
            <span className="bg-eee btn-shape fs-13 text-white">180</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span className='text-white'>PHP</span>
            <span className="bg-eee btn-shape fs-13 text-white">160</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15">
            <span className='text-white'>Code</span>
            <span className="bg-eee btn-shape fs-13">145</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15 text-white">
            <span className='text-white'>Design</span>
            <span className="bg-eee btn-shape fs-13 text-white">110</span>
          </div>
          <div className="items d-flex space-between pt-15 pb-15 text-white">
            <span>Logic</span>
            <span className="bg-eee btn-shape fs-13 text-white">95</span>
          </div>
        </div>
        {/* <!-- End Top Search Word Widget -->
        <!-- Start Latest Uploads Widget --> */}
        <div className="latest-uploads p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 text-white">
          <h2 className="mt-0 mb-20 text-white">Latest Uploads</h2>
          <ul className="m-0">
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">my-file.pdf</span>
                  <span className="fs-15 text-white">Elzero</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">2.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center ">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">My-Video-File.avi</span>
                  <span className="fs-15 text-white">Admin</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">4.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">My-Psd-File.pdf</span>
                  <span className="fs-15 text-white">Osama</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">4.5mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center text-white">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">My-Zip-File.pdf</span>
                  <span className="fs-15 text-white">User</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">8.9mb</div>
            </li>
            <li className="between-flex pb-10 mb-10">
              <div className="d-flex align-center">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">My-DLL-File.pdf</span>
                  <span className="fs-15 text-white">Admin</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">4.9mb</div>
            </li>
            <li className="between-flex">
              <div className="d-flex align-center">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <div>
                  <span className="d-block text-white">My-Eps-File.pdf</span>
                  <span className="fs-15 text-white">Designer</span>
                </div>
              </div>
              <div className="bg-eee btn-shape fs-13 text-white">8.9mb</div>
            </li>
          </ul>
        </div>
        {/* <!-- End Latest Uploads Widget -->
        <!-- Start Last Project Progress Widget --> */}
        <div className="last-project p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 p-relative">
          <h2 className="mt-0 mb-20">Last Project Progress</h2>
          <ul className="m-0 p-relative">
            <li className="mt-25 d-flex align-center done text-white">Got The Project</li>
            <li className="mt-25 d-flex align-center done text-white">Started The Project</li>
            <li className="mt-25 d-flex align-center done">The Project About To Finish</li>
            <li className="mt-25 d-flex align-center current text-white">Test The Project</li>
            <li className="mt-25 d-flex align-center text-white">Finish The Project & Get Money</li>
          </ul>
          <Image  width={100} height={100} src={image1} alt='img'></Image>
        </div>
        {/* <!-- End Last Project Progress Widget -->
        <!-- Start Reminders Widget --> */}
        <div className="reminders p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 p-relative">
          <h2 className="mt-0 mb-25 text-white">Reminders</h2>
          <ul className="m-0">
            <li className="d-flex align-center mt-15">
              <span className="key bg-blue mr-15 d-block rad-half"></span>
              <div className="pl-15 blue">
                <p className="fs-14 fw-bold mt-0 mb-5 text-white">Check My Tasks List</p>
                <span className="fs-13 text-white">28/09/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15 text-white">
              <span className="key bg-green mr-15 d-block rad-half text-white"></span>
              <div className="pl-15 green">
                <p className="fs-14 fw-bold mt-0 mb-5 text-white">Check My Projects</p>
                <span className="fs-13 text-white">26/10/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-orange mr-15 d-block rad-half"></span>
              <div className="pl-15 orange">
                <p className="fs-14 fw-bold mt-0 mb-5 text-white">Call All My Clients</p>
                <span className="fs-13 text-white">05/11/2022 - 12:00am</span>
              </div>
            </li>
            <li className="d-flex align-center mt-15">
              <span className="key bg-red mr-15 d-block rad-half"></span>
              <div className="pl-15 red">
                <p className="fs-14 fw-bold mt-0 mb-5 text-white">Finish The Development Workshop</p>
                <span className="fs-13 text-white">20/12/2022 - 12:00am</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- End Reminders Widget -->
        <!-- Start Latest Post Widget --> */}
        <div className="latest-post p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 p-relative">
          <h2 className="mt-0 mb-25 text-white">Latest Post</h2>
          <div className="top d-flex align-center">
          <Image  width={100} height={100} src={image1} alt='img'></Image>
            <div className="info">
              <span className="d-block mb-5 fw-bold text-white">Osama Elzero</span>
              <span className="text-white">About 3 Hours Ago</span>
            </div>
          </div>
          <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
            You can fool all of the people some of the time, and some of the people all of the time, but you cant
            fool all of the people all of the time.
          </div>
          <div className="post-stats between-flex text-white">
            <div>
              <i className="fa-regular fa-heart"></i>
              <span className='text-white'>1.8K</span>
            </div>
            <div>
              <i className="fa-regular fa-comments"></i>
              <span className='text-white'>500</span>
            </div>
          </div>
        </div>
        {/* <!-- End Latest Post Widget -->
        <!-- Start Social Media Stats Widget --> */}
        <div className="social-media p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 p-relative">
          <h2 className="mt-0 mb-25 text-white">Social Media Stats</h2>
          <div className="box twitter p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-twitter fa-2x text-black h-full center-flex"></i>
            <span className='text-white'>90K Followers</span>
            <a className="fs-13 text-black btn-shape" href="#">Follow</a>
          </div>
          <div className="box facebook p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-facebook-f fa-2x text-black h-full center-flex"></i>
            <span className='text-white'>2M Like</span>
            <a className="fs-13 text-black btn-shape" href="#">Like</a>
          </div>
          <div className="box youtube p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-youtube fa-2x text-white h-full center-flex"></i>
            <span className='text-white'>1M Subs</span>
            <a className="fs-13 text-white btn-shape" href="#">Subscribe</a>
          </div>
          <div className="box linkedin p-15 p-relative mb-10 between-flex">
            <i className="fa-brands fa-linkedin fa-2x text-black h-full center-flex"></i>
            <span className='text-white'>70K Followers</span>
            <a className="fs-13 text-black btn-shape" href="#">Follow</a>
          </div>
        </div>
        {/* <!-- Start End Media Stats Widget --> */}
      </div>
      {/* <!-- Start Projects Table --> */}
      <div className="projects p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10 m-20">
        <h2 className="mt-0 mb-20">Projects</h2>
        <div className="responsive-table">
          <table className="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2022</td>
                <td>Ministry</td>
                <td>$5300</td>
                <td className='flex'>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                </td>
                <td>
                  <span className="label btn-shape bg-orange text-white">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Elzero Shop</td>
                <td>12 Oct 2021</td>
                <td>Elzero Company</td>
                <td>$1500</td>
                <td className='flex'>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                </td>
                <td><span className="label btn-shape bg-blue text-white">In Progress</span></td>
              </tr>
              <tr>
                <td>Bouba App</td>
                <td>05 Sep 2021</td>
                <td>Bouba</td>
                <td>$800</td>
                <td>
                <Image  width={100} height={100} src={image1} alt='img'></Image>

                </td>
                <td><span className="label btn-shape bg-green text-white">Completed</span></td>
              </tr>
              <tr>
                <td>Mahmoud Website</td>
                <td>22 May 2021</td>
                <td>Mahmoud</td>
                <td>$600</td>
                <td className='flex'>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                </td>
                <td><span className="label btn-shape bg-green text-white">Completed</span></td>
              </tr>
              <tr>
                <td>Sayed Website</td>
                <td>24 May 2021</td>
                <td>Sayed</td>
                <td>$300</td>
                <td className='flex'>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                </td>
                <td><span className="label btn-shape bg-red text-white">Rejected</span></td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2021</td>
                <td>Arena Company</td>
                <td>$2600</td>
                <td className='flex'>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                </td>
                <td><span className="label btn-shape bg-green text-white">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- End Projects Table --> */}
    </div>
  </div>
  )
}

export default Avocatpage