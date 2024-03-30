import React from 'react'
import image1 from "@/public/image1.jpg";
import Image from "next/image";
import "./styles2.css"

const Avocatsettingpage = () => {
  return (
    <div className=" page d-flex bg-gradient-to-tr from-[#000] to-[#ff4d00]">
    {/* <div className="sidebar bg-gradient-to-tr from-[#000] to-[#ff4d00] p-20 p-relative">
      <h3 className="p-relative txt-c mt-0">Elzero</h3>
      <ul>
        <li>
          <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="index.html">
            <i className="fa-regular fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href="settings.html">
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

          <Image width={100} height={100} src={image1} alt='img'></Image>
        </div>
      </div>
      {/* <!-- End Head --> */}
      <h1 className="p-relative">Vous Pouvez changer votre information</h1>
      <div className="settings-page m-20 d-grid gap-20">
        {/* <!-- Start Settings Box --> */}
        <div className="p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Site Control</h2>
          <p className="mt-0 mb-20 text-white fs-15">Control The Website If There Is Maintenance</p>
          <div className="mb-15 between-flex">
            <div>
              <span>Website Control</span>
              <p className="text-white mt-5 mb-0 fs-13">Open/Close Website And Type The Reason</p>
            </div>
            <div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <div className="toggle-switch"></div>
              </label>
            </div>
          </div>
          <textarea className="close-message p-10 rad-6 d-block w-full" placeholder="Close Message Content"></textarea>
        </div>
        {/* <!-- End Settings Box -->
        <!-- Start Settings Box --> */}
        <div className="p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">General Info</h2>
          <p className="mt-0 mb-20 text-white fs-15">General Information About Your Account</p>
          <div className="mb-15">
            <label className="fs-14 text-white d-block mb-10" for="first">First Name</label>
            <input
              className="b-none border-ccc p-10 rad-6 d-block w-full"
              type="text"
              id="first"
              placeholder="First Name"
            />
          </div>
          <div className="mb-15">
            <label className="fs-14 text-white d-block mb-5" for="last">Last Name</label>
            <input
              className="b-none border-ccc p-10 rad-6 d-block w-full"
              id="last"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="fs-14 text-white d-block mb-5" for="email">Email</label>
            <input
              className="email b-none border-ccc p-10 rad-6 w-full mr-10"
              id="email"
              type="email"
              value="o@nn.sa"
              disabled
            />
            <a className="c-blue" href="#">Change</a>
          </div>
        </div>
        {/* <!-- End Settings Box -->
        <!-- Start Settings Box --> */}
        <div className="p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Security Info</h2>
          <p className="mt-0 mb-20 text-white fs-15">Security Information About Your Account</p>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Password</span>
              <p className="text-white mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
            </div>
            <a className="button bg-blue text-white btn-shape" href="#">Change</a>
          </div>
          <div className="sec-box mb-15 between-flex">
            <div>
              <span>Two-Factor Authentication</span>
              <p className="text-white mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
            </div>
            <label>
              <input className="toggle-checkbox" type="checkbox" checked />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <div className="sec-box between-flex">
            <div>
              <span>Devices</span>
              <p className="text-white mt-5 mb-0 fs-13">Check The Login Devices List</p>
            </div>
            <a className="bg-eee c-black btn-shape" href="#">Devices</a>
          </div>
        </div>
        {/* <!-- End Settings Box -->
        <!-- Start Settings Box --> */}
        <div className="social-boxes p-20 bg-gradient-to-tr from-[#000] to-[#ff4d00] rad-10">
          <h2 className="mt-0 mb-10">Social Info</h2>
          <p className="mt-0 mb-20 text-white fs-15">Social Media Information</p>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-twitter center-flex text-white"></i>
            <input className="w-full" type="text" placeholder="Twitter Username" />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-facebook-f center-flex text-white"></i>
            <input className="w-full" type="text" placeholder="Facebook Username" />
          </div>
          <div className="d-flex align-center mb-15">
            <i className="fa-brands fa-linkedin center-flex text-white"></i>
            <input className="w-full" type="text" placeholder="Linkedin Username" />
          </div>
          <div className="d-flex align-center">
            <i className="fa-brands fa-youtube center-flex text-white"></i>
            <input className="w-full" type="text" placeholder="Youtube Username" />
          </div>
        </div>
        {/* <!-- End Settings Box -->*/}


      </div>
    </div>
  </div>
  )
}

export default Avocatsettingpage