import React from "react";
import Typewriter from "typewriter-effect";
import profilePic from "../assests/img/profilepicB&W.jpg";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <div class=" container mx-auto flex flex-col-reverse md:flex-row py-8 px-4 gap-x-60">
        <div class=" basis-2/3  content-center">
          <h1 class="text-2xl">Hey, I'm Gayan Gamage 👋</h1>
          <div class="text-3xl md:text-5xl font-extrabold text-green-500 w-full">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Mobile App Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div class="pt-5 text-justify ">
            <p>
              A dynamic and driven, soon-to-be graduate with a B.Eng in Computer
              Science from IIT (July 2024), with a keenness to tackle any
              challenge while upholding high standards of work quality. I am a
              fast learner and adaptable team player, enthusiastic about
              acquiring new technologies and gaining practical experience to
              enhance my skill set.
            </p>
          </div>
          <a className="flex flex-row bg-slate-400 p-2 w-40 text-sm font-semibold rounded-full my-4" href="https://drive.google.com/file/d/1AgQHyPRnFOCrv6EP3RkwkeHgTQCqb7xw/view?usp=sharing">
            Download Resume
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
        <div class="basis-1/2  flex justify-center ">
          <img  src={profilePic} alt="Gayan Gamage" className="rounded-full  w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
