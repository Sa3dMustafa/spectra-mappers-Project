import "leaflet/dist/leaflet.css";
import useMap from "../hooks/map/useMap";
import CoordinatesForm from "@/components/landsateComponent/CoordinatesForm";

// MapTiler API key
const mapTilerApiKey = "HPHMrcw0Q5i62yGZp9KB";

const SatelliteMap = () => {
  // Destructure the functionality from useMap hook
  let { onCheckOverpass } = useMap(mapTilerApiKey);

  return (
    <div className="relative">
      <div id="map" style={{ height: "100vh"}}></div>
    </div>
  );
};

export default SatelliteMap;
