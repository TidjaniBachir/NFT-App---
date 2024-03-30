import React from 'react'
import image1 from "@/public/image1.jpg";
import Image from "next/image";
import "./styles.css"
const Consigerjuridique = () => {
    return (
        <div className="overflow-hidden d-flex ">
        <div className="hidden bg-gradient-to-tr from-[#000] to-[#ff4d00] p-20 p-relative ">
          <h3 className="p-relative txt-c mt-0">Elzero</h3>
          <ul>
            <li>
              <a className="d-flex align-center fs-14 c-black rad-6 p-10" href="index.html">
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
              <a className="active d-flex align-center fs-14 c-black rad-6 p-10" href="profile.html">
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
        </div>
        <div className="content w-full bg-gradient-to-tr from-[#000] to-[#ff4d00]">
          {/* <!-- Start Head --> */}
          <div className="head p-15 between-flex">
            <div className="search p-relative">
              <input className="p-10" type="search" placeholder="Type A Keyword" />
            </div>
            <div className="icons d-flex align-center">
              <span className="notification p-relative">
                <i className="fa-regular fa-bell fa-lg"></i>
              </span>
              {/* <Image classNameName='rad-half mb-10' width={100} height={100} src={image1} alt='img'></Image> */}
              {/* <div className='nav-button'></div> */}
            </div>
          </div>
          {/* <!-- End Head --> */}
          <h1 className="p-relative">Profile</h1>
          <div className="profile-page m-20">
            {/* <!-- Start Overview --> */}
            <div className="overview rad-10 d-flex align-center">
              <div className="avatar-box txt-c p-20">
              <Image  width={100} height={100} src={image1} alt='img'></Image>
                <h3 className="m-0">Osama Elzero</h3>
                <p className="c-grey mt-10">Level 20</p>
                <div className="level rad-6 bg-eee p-relative style1">
                  <span classNameName='style1' ></span>
                </div>
                <div className="rating mt-10 mb-10">
                  <i className="fa-solid fa-star c-orange fs-13"></i>
                  <i className="fa-solid fa-star c-orange fs-13"></i>
                  <i className="fa-solid fa-star c-orange fs-13"></i>
                  <i className="fa-solid fa-star c-orange fs-13"></i>
                  <i className="fa-solid fa-star c-orange fs-13"></i>
                </div>
                <p className="c-grey m-0 fs-13">550 Rating</p>
              </div>
              <div className="info-box w-full txt-c-mobile">
                {/* <!-- Start Information Row --> */}
                <div className="box p-20 d-flex align-center">
                  <h4 className="c-grey fs-15 m-0 w-full">General Information</h4>
                  <div className="fs-14">
                    <span className="c-grey">Full Name</span>
                    <span>Osama Mohamed</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Gender:</span>
                    <span>Male</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Country:</span>
                    <span>Egypt</span>
                  </div>
                  <div className="fs-14">
                    <label>
                      <input className="toggle-checkbox" type="checkbox" checked />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                {/* <!-- End Information Row -->
                <!-- Start Information Row --> */}
                <div className="box p-20 d-flex align-center">
                  <h4 className="c-grey w-full fs-15 m-0">Personal Information</h4>
                  <div className="fs-14">
                    <span className="c-grey">Email:</span>
                    <span>o@nn.sa</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Phone:</span>
                    <span>019123456789</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Date Of Birth:</span>
                    <span>25/10/1982</span>
                  </div>
                  <div className="fs-14">
                    <label>
                      <input className="toggle-checkbox" type="checkbox" />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                {/* <!-- End Information Row -->
                <!-- Start Information Row --> */}
                <div className="box p-20 d-flex align-center">
                  <h4 className="c-grey w-full fs-15 m-0">Job Information</h4>
                  <div className="fs-14">
                    <span className="c-grey">Title:</span>
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Programming Language:</span>
                    <span>Python</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Years Of Experience:</span>
                    <span>15+</span>
                  </div>
                  <div className="fs-14">
                    <label>
                      <input className="toggle-checkbox" type="checkbox" checked />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                {/* <!-- End Information Row -->
                <!-- Start Information Row --> */}
                <div className="box p-20 d-flex align-center">
                  <h4 className="c-grey w-full fs-15 m-0">Billing Information</h4>
                  <div className="fs-14">
                    <span className="c-grey">Payment Method:</span>
                    <span>Paypal</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Email:</span>
                    <span>email@website.com</span>
                  </div>
                  <div className="fs-14">
                    <span className="c-grey">Subscription:</span>
                    <span>Monthly</span>
                  </div>
                  <div className="fs-14">
                    <label>
                      <input className="toggle-checkbox" type="checkbox" />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                {/* <!-- End Information Row --> */}
              </div>
            </div>
            {/* <!-- End Overview -->
            <!-- Start Other Data --> */}
            <div className="other-data d-flex gap-20">
              <div className="skills-card p-20 rad-10 mt-20">
                <h2 className="mt-0 mb-10">My Skills</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
                <ul className="m-0 txt-c-mobile">
                  <li><span>HTML</span><span>Pugjs</span><span>HAML</span></li>
                  <li><span>CSS</span><span>SASS</span><span>Stylus</span></li>
                  <li><span>JavaScript</span><span>TypeScript</span></li>
                  <li><span>Vuejs</span><span>Reactjs</span></li>
                  <li><span>Jest</span><span>Jasmine</span></li>
                  <li><span>PHP</span><span>Laravel</span></li>
                  <li><span>Python</span><span>Django</span></li>
                </ul>
              </div>
              <div className="activities p-20 rad-10 mt-20">
                <h2 className="mt-0 mb-10">Latest Activities</h2>
                <p className="mt-0 mb-20 c-grey fs-15">Latest Activities Done By The User</p>
                <div className="activity d-flex align-center txt-c-mobile">
                <Image classNameName='rad-half mb-10' width={100} height={100} src={image1} alt='img'></Image>
                  <div className="info">
                    <span className="d-block mb-10">Store</span>
                    <span className="c-grey">Bought The Mastering Python Course</span>
                  </div>
                  <div className="date">
                    <span className="d-block mb-10">18:10</span>
                    <span className="c-grey">Yesterday</span>
                  </div>
                </div>
                <div className="activity d-flex align-center txt-c-mobile">
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                  <div className="info">
                    <span className="d-block mb-10">Academy</span>
                    <span className="c-grey">Got The PHP Certificate</span>
                  </div>
                  <div className="date">
                    <span className="d-block mb-10">16:05</span>
                    <span className="c-grey">Yesterday</span>
                  </div>
                </div>
                <div className="activity d-flex align-center txt-c-mobile">
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                  <div className="info">
                    <span className="d-block mb-10">Badges</span>
                    <span className="c-grey">Unlocked The 10 Skills Badge</span>
                  </div>
                  <div className="date">
                    <span className="d-block mb-10">18:05</span>
                    <span className="c-grey">Yesterday</span>
                  </div>
                </div>
                <div className="activity d-flex align-center txt-c-mobile">
                <Image  width={100} height={100} src={image1} alt='img'></Image>
                  <div className="info">
                    <span className="d-block mb-10">Store</span>
                    <span className="c-grey">Bought The Typescript Course</span>
                  </div>
                  <div className="date">
                    <span className="d-block mb-10">12:05</span>
                    <span className="c-grey">Yesterday</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Other Data --> */}
          </div>
        </div>
      </div>

    )
}

export default Consigerjuridique