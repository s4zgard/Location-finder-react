import type { Place } from "./api/Place";
import Map from "./components/Map";
import LocSearch from "./components/LocSearch";

export default function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="span-col-3 p-2">
        <LocSearch />
      </div>
      <div className="span-col-9">
        <Map />
      </div>
    </div>
  );
}
