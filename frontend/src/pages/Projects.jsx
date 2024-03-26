import React from "react";
import Project1 from "../assets/Project1.jpg";
import Project2 from '../assets/Project2.jpg';
// import projectImg from '../assets'
// import projectImg from '../assets'

function Projects() {
  return (
    <div className="bg-black m-20 max-w-full">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl text-white mt -10">Projects</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="max-w-md-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className='="md:flex'>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm  to-indigo-700 font-semibold">
                MARABFOODS WEBSITE
              </div>
              <p className="mt-2 text-slate-500">
                {" "}
                A marketplace for buying and selling agro products.
              </p>
            </div>
          </div>
          <div className="md:shrink -0 p-5">
            <img src={Project1} alt="Project1" width={150} height={150} />
          </div>
        </div>
        <div className="max-w-md-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className='="md:flex'>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm  to-indigo-700 font-semibold">
                ZIIBO MOVIE WEB APP
              </div>
              <p className="mt-2 text-slate-500">
                {" "}
                A responsive movie web app where everyone can enjoy their favourite tv shows.
              </p>
            </div>
          </div>
          <div className="md:shrink -0 p-5">
            <img src={Project2} alt="Project2" width={150} height={150} />
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 p-5"></div>
    </div>
  );
}

export default Projects;
