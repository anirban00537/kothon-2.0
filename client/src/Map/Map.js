import "./Map.css";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  return (
    <div className="map Contact">
      <div className="first first_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1201461995975!2d90.3723540142975!3d23.778735593611668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b3340c1c91%3A0xfec009b60808d80a!2sICT%20Tower!5e0!3m2!1sen!2sbd!4v1614234244077!5m2!1sen!2sbd"
          width="600"
          height="900"
          styles="border:0px; background-color: #fff;"
          allowfullscreen=""
          className="mapICT"
          loading="lazy"
        ></iframe>
      </div>
      <div className="second second_contact">
        <div className="second_contact_info">
          <div className="main_info_part">
            <h1> Feel Free to Find Us</h1>
            <p>
              {" "}
              <i class="fas fa-mobile"></i>
              +880 1309 817440
            </p>
            <p>
              {" "}
              <i class="fas fa-phone-alt"></i>+880 9611 677463
            </p>
            <p>
              {" "}
              <i class="fas fa-home"></i>ICT Tower
            </p>
            <p>
              {" "}
              <i class="fas fa-road"></i>E-14/X, BCC Bhaban
            </p>
            <p>
              {" "}
              <i class="fas fa-hospital-alt"></i>Dhaka 1207
            </p>
            <p>
              <i class="fas fa-flag"></i>Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
