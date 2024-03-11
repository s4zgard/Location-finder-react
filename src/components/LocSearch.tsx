import type { Place } from "../api/Place";
import { search } from "../api/search";
import { Fragment, useState } from "react";

interface LocSearcProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocSearch({ onPlaceClick }: LocSearcProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaces(await search(term));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" className="font-bold">
          Search
        </label>
        <input
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
        />
      </form>
      <h1 className="font-bold mt-6">Found Places</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => (
          <Fragment key={place.id}>
            <p className="text-sm">{place.name}</p>
            <button
              onClick={() => onPlaceClick(place)}
              className="bg-blue-500 text-xs font-bold py-1 px-1 text-white rounded"
            >
              Go
            </button>
            <div className="border-b w-full col-span-2" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
