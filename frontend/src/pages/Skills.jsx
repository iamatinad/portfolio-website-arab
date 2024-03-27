import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Skills() {
  return (
    <div>
      <Header />
      <div className="text-center text-3xl mt-5">
      <div className="container lg:pt-5">
             <div className="text-center"> 
             <h2 className=" text-headingColor font-[800] text-[2.4rem] mb-5">Skills</h2>
             <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font -[500] text-[16px] leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi placeat harum sint aliquid qui culpa, voluptate molestiae quod cupiditate cum, odit, deleniti iusto nemo. Sit illum natus aspernatur id.</p>
             </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">

            {/*================vertical line running through the middle========  */}
            <div className="hidden absolute w-l sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

            {/* ==================left card================== */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
            <div className="flex items-center flex-col sm:flex-row">

            <div className="flex justify-start w-full mx-auto items-center"> 
              <div className="w-full sm:w-1/2 sm:pr-8">
                <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-black cursor-pointer ease-in duration-150">
                  <h3 className=" text-purple-700 font mb-3 group-hover:text-white group-hover:font-[600] text-xl">Frontend Development</h3>

                  <p className="text-[15px] text-blue-900 group-hover:text-white group-hover:font-[500] leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nam nisi excepturi culpa quidem est pariatur iste sunt a ipsum, minus maxime dolorum dolore at accusantium corrupti quisquam, distinctio iusto.</p>
                </div>
              </div>
            </div>

            <div className="rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform-translate-x-1/2- translate-y-4 sm:translate-y-0 flex items-center justify-center">
            
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
