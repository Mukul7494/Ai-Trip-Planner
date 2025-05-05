import React from "react";
import { Link } from "react-router-dom";

function PlaceCard({ place }) {
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src="/info_placeholder.jpg"
          alt="Info Image"
          className="h-[130px] w-[130px] rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg">{place?.placeName}</h2>
          <p className="text-sm text-gray-500">{place?.placeDetails}</p>
          <h2 className="mt-2 font-medium">
            Travel Time:
            {place?.timeToTravelFromPreviousPlaceMin} Minutes
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCard;
