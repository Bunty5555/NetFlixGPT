import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearchPage;
