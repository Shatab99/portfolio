// import axios from "axios";
// import fileDownload from "js-file-download";

import { FaUserTie } from "react-icons/fa";
import HireMeForm from "./HireMeForm";

const Navbar = ({ children }) => {



    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-orange-200">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-3xl font-bold"><span className="text-orange-600">S</span>hatab</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                    <div className="justify-end">
                        {/*  */}
                        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-sm transition-all duration-700 bg-orange-600 text-white hover:bg-orange-700 border-0 flex gap-2 hover:gap-4"><FaUserTie className="text-lg"/> Hire Me </button>
                        <HireMeForm/>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-orange-200">
                    {/* Sidebar content here */}
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;