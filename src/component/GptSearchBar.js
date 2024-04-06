import React from "react";

function GptSearchBar() {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What Would You Like To See Today ?"
        />
        <button className="bg-red-600 py-2 px-4 m-4 col-span-3 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
