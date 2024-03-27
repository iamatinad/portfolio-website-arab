import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Skills() {
  return (
    <div>
      <Header />
      <div className="text-center text-3xl mt-5">
      <div className="container lg:px-5 lg:py-5">
             <div className="text-center"> 
             <h2 className="text-headingColor font-[800] text-[2.4rem mb-5]">Skills</h2>
             <p className="lg:max-w-[600] text-headingColor font -[500] text -[160px] leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi placeat harum sint aliquid qui culpa, voluptate molestiae quod cupiditate cum, odit, deleniti iusto nemo. Sit illum natus aspernatur id.</p>
             </div>

        <div className="flex flex-col justify-center sm:py12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
          <div className="relative text -gray-700 antialiased text-sm font-semibold">

            {/*================vertical line running through the middle========  */}
            <div className="hidden absolute w-l sm:block bg-indigo-500 h-full left-1/2 transform-translate-x-1/2"></div>

            {/* ==================left card================== */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">

            <div className="flex justify-start w-ffull mx-auto items-center">
              <div className="w-full sm:w1/2 sm:pr-8">
                <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"></div>
              </div>
            </div>

            </div>
            </div>
          </div>
          </div>
        </div>

      </div>     
      </div>
      <Footer />
    </div>
  );
}
export default Skills;
