import React from 'react';
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";

const Projects = () => {
  return (
    <div className="bg-black m-5 md:m-20 max-w-full">
      <div className="grid justify-items-center m-5 md:m-10">
        <h1 className="text-3xl text-white mt-5 md:mt-0">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="md:flex">
            <div className="p-5 md:p-8">
              <div className="uppercase tracking-wide text-sm text-bg-black font-semibold">
                MARABFOODS WEBSITE
              </div>
              <p className="mt-2 text-slate-500">
                A marketplace for buying and selling agro products.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Project1}
                alt="Project1"
                className="object-cover w-full md:w-72 h-72 md:h-auto"
              />
            </div>
          </div>
        </div>
        <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="md:flex">
            <div className="p-5 md:p-8">
              <div className="uppercase tracking-wide text-sm text-bg-black font-semibold">
                ZIIBO MOVIE WEB APP
              </div>
              <p className="mt-2 text-slate-500">
                A responsive movie web app where everyone can enjoy their
                favourite tv shows.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Project2}
                alt="Project2"
                className="object-cover w-full md:w-72 h-72 md:h-auto"
              />
            </div>
          </div>
        </div>    
      </div>
      <hr />
      <div className="grid grid-cols-2 gap-4 p-5">
      <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="md:flex">
            <div className="p-5 md:p-8">
              <div className="uppercase tracking-wide text-sm text-bg-black font-semibold">
                MARABFOODS WEBSITE
              </div>
              <p className="mt-2 text-slate-500">
                A marketplace for buying and selling agro products.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Project1}
                alt="Project1"
                className="object-cover w-full md:w-72 h-72 md:h-auto"
              />
            </div>
          </div>
        </div>  
        <div className="max-w-full bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <div className="md:flex">
            <div className="p-5 md:p-8">
              <div className="uppercase tracking-wide text-sm text-bg-black font-semibold">
                MARABFOODS WEBSITE
              </div>
              <p className="mt-2 text-slate-500">
                A marketplace for buying and selling agro products.
              </p>
            </div>
            <div className="md:shrink-0 p-5">
              <img
                src={Project1}
                alt="Project1"
                className="object-cover w-full md:w-72 h-72 md:h-auto"
              />
            </div>
          </div>
        </div>
    </div>
    
      </div>
  )
}

export default Projects
  