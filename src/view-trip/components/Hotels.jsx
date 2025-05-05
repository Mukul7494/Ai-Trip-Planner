import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${hotel?.address}`}
            target="_blank"
            key={index}
          >
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img
                src="/trip-placeholder.webp"
                alt="Hotel Image"
                className="rounded-xl"
              />
              <div className="my-2 flex flex-col gap-2 ">
                <h2 className="font-medium">{hotel?.hotelName}</h2>
                <h2 className="text-xs text-gray-500">📍 {hotel?.address}</h2>
                <h2 className="text-sm">💰 {hotel?.priceRange}</h2>
                <h2 className="text-sm">⭐ {hotel?.rating} rating</h2>
              </div>
              {/* <p>{hotel.description}</p>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Price: {hotel.price}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
