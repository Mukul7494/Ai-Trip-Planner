import { Button } from "@/components/ui/button";
// import { GetPlaceDetails } from "@/services/GlobalApi";
import React, { useEffect } from "react";
import { IoSend } from "react-icons/io5";

function InfoSection({ trip }) {
  // const GetPlacePhoto = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location,
  //   };
  //   const res = await GetPlaceDetails(data).then((res) => {
  //     console.log(res);
  //   });
  // };

  // useEffect(() => {
  //   trip && GetPlacePhoto();
  // }, [trip]);

  return (
    <div>
      <img
        className="h-[340px] w-full object-cover rounded-xl"
        src="/info_placeholder.jpg"
        alt="Info Section"
      />
      <div className="flex items-center justify-between">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-2">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2
              className="p-1 px-3 bg-gray-200 rounded-full text-gray-500
            text-xs md:text-md"
            >
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2
              className="p-1 px-3 bg-gray-200 rounded-full text-gray-500
            text-xs md:text-md"
            >
              ✈️ {trip?.userSelection?.noOfTravellers}
            </h2>
          </div>
        </div>
        <Button className="cursor-pointer">
          <IoSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
