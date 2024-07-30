import React from "react";
import bluechip from "../assests/img/bluechiplogo.jpeg";

function ExperinceCard() {
  return (
    <div className="container mx-auto border-l-8 pl-10 ">
  

      <div className="flex flex-row space-x-4">
        <img className="w-20 rounded-full" src={bluechip} alt="" />
        <div>
          <h1 className="text-lg font-semibold">Web Developer</h1>
          <h2 className="text-base">Bluechip Technologies Asia</h2>
          <div className="font-thin text-sm">
            <p>2021 - Present</p>
            <p>Sri Lanka</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-justify p-4 md:mr-16">
        Independently developed multiple web applications using React.js, Firebase, VueJs, and other technologies, including a Crop Management System, Taxi Web App, Netflix Clone, and Travel Planning Web App. Implemented authentication features using Firebase for login and signup pages.Contributed to the enhancement of various GitHub projects, such as an NFT marketplace and decentralized marketplace, by implementing crucial functionalities like user authentication using Firebase.

        </p>
      </div>
      
    </div>
  );
}

export default ExperinceCard;
