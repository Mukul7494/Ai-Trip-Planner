import React from "react";
import PlaceCard from "./PlaceCard";

function Places({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Places to Visit</h2>
      {/* days wiz plan */}
      <div>
        {trip?.tripData?.days?.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">Day {item.day}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {item.places.map((place, index) => (
                <div key={index}>
                  <h2 className="font-medium text-sm text-orange-600">
                    {place.bestTimeToVisit}
                  </h2>
                  <PlaceCard place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;
