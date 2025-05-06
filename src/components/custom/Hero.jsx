import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col items-center  gap-9 justify-center">
      <h1 className="text-4xl md:text-[60px] lg:text-[80px] font-extrabold text-center mt-16">
        <p className="text-[#f56551]">Discover Your Next Adventure with AI:</p>
        personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal trip planner and curator, creating custom itineraries
        based on your preferences intrest and budget
      </p>
      <Link to="/create-trip">
        <Button>Get Started, It's Fun</Button>
      </Link>
    </div>
  );
}
