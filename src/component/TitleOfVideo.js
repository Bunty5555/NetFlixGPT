import React from "react";

const TitleOfVideo = ({ title, overview }) => {
  return (
    <div className="py-[20%] px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="py-6 text-xl w-1/3 text-white ">{overview}</p>
      <div className="p-6 ">
        <button className="bg-white text-black  p-2 px-10 rounded-lg hover:opacity-50">
          ▶ Play
        </button>
        <button className="bg-gray-400 mx-3 text-white p-2 px-7 bg-opacity-50 rounded-lg hover:opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleOfVideo;
