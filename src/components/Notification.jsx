import React from "react";
import homepagImage from '../assets/homepag.png';

import './Notification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTimes, faBookOpen, faLessThan, faGreaterThan, faLock, faHands, faComment, faStar, faEllipsisVertical, faPenNib } from "@fortawesome/free-solid-svg-icons"; 

export default function Notification() {
  return (
    <div>
      <p id='text' className='bg-blue-500 py-3 text-center text-white'>Enable browser notifications to avoid missing out on important activity.</p>

      <p id='mar' className='text-center mx-12 ml-custom bg-blue-600 w-48 rounded-xl py-1 mb-32'>
        <FontAwesomeIcon icon={faBell} /> Enable Notification  <FontAwesomeIcon icon={faTimes} />
      </p>
      <div className="nav bg-white ">
        <FontAwesomeIcon className="p-3  text-gray-400 " icon={faBookOpen} />

        <FontAwesomeIcon className="p-3  text-gray-400 " icon={faLessThan} />

        <FontAwesomeIcon className="p-3 ml-1 text-gray-400" icon={faGreaterThan} />

        <FontAwesomeIcon className="mb-4 ml-8  text-gray-400" icon={faLock} />
        <p className="ml-44 text-gray-400 mycss">My Private channel / <FontAwesomeIcon icon={faHands} style={{ color: "#FFD43B" }} /> Getting Start</p>


        <div className="flex p-2 ml-68 navtext ">
          < p className="m-2">share</p>
          <FontAwesomeIcon className="m-3 " icon={faComment} style={{ color: "#d1d4d6", }} />
          <FontAwesomeIcon className="m-3 " icon={faStar} style={{ color: "#FFD43B", }} />

          <FontAwesomeIcon className="m-3 " icon={faEllipsisVertical} />
        </div>
        <div className="homepage ml-1">
          <h1 className="Getting-Started">Getting Started</h1>
          <a href="#" class="group block w-1/2 mx-auto rounded-lg p-4 card1  bg-gray-300 ring-1 ring-slate-900/5 shadow-lg space-y-2 ">
            <div class="flex items-center space-x-0">
              <svg class="h-5 w-1 stroke-sky-500" fill="none" viewBox="0 0 24 24"></svg>
              <h3 class="text-slate-900 text-sm font-semibold">New project</h3>
            </div>
            <p class="text-slate-500 text-sm"> Lorem ipsum dolor sit, <span className="font-bold"> Amet consectetur</span> adipisicing elit. Corporis magni mollitia reprehenderit blanditiis enim accusantium,<span className="font-bold"> Amet consectetur</span> minus aspernatur nisi veniam odit est eius veritatis ducimus earum nostrum corrupti modi delectus. Aliquid.Create a new project from a variety of starting templates.</p>
          </a>
        </div>
        <h1 className="font-bold mt-7 text-2xl pr-2 ml-64">Collaborate with your team with these three </h1>
        <h1 className=" feature font-bold mt-8 text-2xl pr-2 ml-64"> feature</h1>
        <p className=" Docs ml-64 text-2xl docs  "> <FontAwesomeIcon icon={faPenNib} style={{ color: "#FFD43B", }} /> Docs</p>
        <img src={homepagImage} alt="" className="w-1/2 lastimg shadow-lg rounded-lg ml-64 mb-2" />

      </div>

    </div>
  );
}
