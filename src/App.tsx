import type { Place } from "./api/Place";
import Map from "./components/Map";
import LocSearch from "./components/LocSearch";
import { useState } from "react";

export default function App() {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}
