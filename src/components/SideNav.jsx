import React from 'react';
import './SideNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faClock, faComment, faHands, faUserPlus, faCircleHalfStroke, faShare, faBoxArchive } from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <div className="container w-72 h-screen">
      <div className="profile">

      </div>

      <div className="refro">
        <img className="logo h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h3 className='refrotext'>refro team  <FontAwesomeIcon className='ml-28 text-gray-400 text-xl' icon={faBell} />  </h3>
      </div>

      <div className="searchBar m-3">
        <div className="flex items-center">
          <input type="text" placeholder="Ask your AI assignments" className="px-4 py-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-200" />
          <button className="px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>

      <div className="boxtext font-sans w-64 h-12 ml-5 rounded-md text-center bg-gray-300">
        <h3>Your team used 8/50 free docs</h3>
        <div className='text-gray-900 font-light'>
          <p>Upgrade to create unlimited docs</p>
        </div>
      </div>

      <div className="meanu1 mt-5">
        <ul>
          <li className='m-2 p-1'> <FontAwesomeIcon className='text-gray-500  ml-7  ' icon={faClock} /> Catch up </li>
          <li> <FontAwesomeIcon className='text-gray-500  ml-10' icon={faComment} /> Discussions</li> {/* Updated icon */}
        </ul>
      </div>

      <div className="meanu2 m-4 ml-11 fon ">
        <ul>
          <li>Favorites</li>
          <li><FontAwesomeIcon icon={faHands} style={{ color: "#FFD43B" }} /> Getting Started</li> {/* Updated icon */}
        </ul>
      </div>
      <div className="mychannel m-4 ml-6 font-bold">
        <p>My channel</p>

        <div class=" ">
          <details class="  dark:open:bg-slate-900 open:ring-1 open:ring-black/5  p-3" open>
            <summary class="text-sm  text-slate-900 font-semibold ">
              My Private channel
            </summary>
            <div class="mt-1 text-sm  text-slate-600 dark:text-slate-400">
              <p>Getting Start</p>
            </div>
          </details>
        </div>
        <div class=" ">
          <details class=" dark:open:bg-slate-900 open:ring-1 open:ring-black/5  p-2 " open>
            <summary class="text-sm  text-slate-900  font-semibold select-none">
              Engineering
            </summary>
            <div class="mt-1 text-sm  text-slate-600">
              <p>Getting Start</p>
            </div>
          </details>
        </div>
        <div class="  ">
          <details class="dark:open:bg-slate-900 open:ring-1 open:ring-black/5  p-2  " open>
            <summary class="text-sm  text-slate-900  font-semibold select-none  ">
              Product
            </summary>
            <div class="mt-1 text-sm  text-slate-600  ">
              <p>Getting Start</p>
            </div>
          </details>
        </div>
      </div>
      <div className="lastmenu m-6 ml-6 p-2 ">
        <ul>
          <li className='m-2 mt-1' > <FontAwesomeIcon icon={faUserPlus} /> Add People</li>
          <li className='m-2 mt-1' > <FontAwesomeIcon icon={faCircleHalfStroke} rotation={270} /> Templetes</li>
          <li className='m-2 mt-1' > <FontAwesomeIcon icon={faShare} /> Shared with me</li>
          <li className='m-1 mt-1'> <FontAwesomeIcon icon={faBoxArchive} /> Archive</li>

        </ul>
      </div>
    </div>
  );
}
