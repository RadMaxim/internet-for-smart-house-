import { TileLayer, MapContainer } from "react-leaflet";
import classContactsUs3 from "./css/classContactsUs3.module.css";
import "leaflet/dist/leaflet.css";
import "./css/Map.css";
const ContactsUs3 = () => {
  return (
    <>
      <section className={classContactsUs3.section3}>
        <div className={classContactsUs3.section3_container}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </section>
    </>
  );
};

export default ContactsUs3;
