import { db } from "@/services/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Places from "../components/Days";
import Footer from "../components/Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);

  const getTripData = async () => {
    const ref = doc(db, "AiTrips", tripId);
    const res = await getDoc(ref);

    if (res.exists()) {
      setTrip(res.data());
    } else {
      toast.error("Trip not found");
    }
  };

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InfoSection trip={trip} />

      {/* hotel section  */}
      {trip.tripData?.hotels && <Hotels trip={trip} />}

      {/* days wiz plan section */}
      <Places trip={trip} />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default ViewTrip;
