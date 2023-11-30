"use client";

import Spinner from "@/components/UI/Spinner";
import PinListCard from "@/components/card/PinListCard";
import { getPins } from "@/services/pins";
import { PinType } from "@/types/pin";
import React, { useEffect, useState } from "react";

function HomePins() {
  const [pins, setPins] = useState<PinType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPinList = async () => {
      try {
        const res = await getPins();
        if (res.data && res.status === 200) {
          setPins(res.data);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.log(error);
      }
    };

    getPinList();
  }, []);

  return (
    <div className="w-full columns-4 xl:columns-6 space-y-4">
      {pins.length === 0 && isLoading ? (
        <p>No Pins yet.</p>
      ) : isLoading ? (
        <Spinner />
      ) : (
        pins.map((pin) => (
          <PinListCard
            id={pin.id}
            description={pin.description}
            image={pin.image}
            profile={pin.profile}
            title={pin.title}
            origin={pin.origin}
            path={pin.path}
            key={pin.id}
          />
        ))
      )}
    </div>
  );
}

export default HomePins;
