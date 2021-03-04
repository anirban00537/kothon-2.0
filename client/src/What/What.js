import "./What.css";
import kothonVideo from "./video.mp4";
import VideoPlayer from "react-video-js-player";
import Modal from "react-modal";
import React from "react";

const What = () => {
  const video = kothonVideo;
  const videoJsOptions = {
    autoplay: true,
    controls: false,
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    if (modalIsOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <div className="home_what About">
      <div className=" first second_mobile_part_what" onClick={openModal}>
        <div className="circle">
          <div className="triangle-right"></div>
        </div>
        <div className="watchour">
          <div className="watchourH1">Watch Our Story</div>
        </div>
        <div className="watchour">
          <div lassName="watchourp">we are who care about you</div>
        </div>
        <Modal isOpen={modalIsOpen} className="hov_vid_style">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="closeBtn btn"
          >
            Close
          </button>
          <VideoPlayer
            src={video}
            width="100%"
            {...videoJsOptions}
            height="100%"
            className="kothonVideo"
          ></VideoPlayer>
        </Modal>
      </div>
      <div className="second parent_home_video_what">
        <div className="video_home_what">
          <div className="slogan_what">
            <h1>About “KOTHON’’?</h1>
            <p className="">
              "KOTHON"- was founded in 2019, and We are a promising
              Telecommunication service provider for Bangladesh Where
              Productivity and Modern technology combines. We are specialized in
              NGN (Next Generation Network) solutions for futuristic
              communication Support. We are here to help small and large
              business organizations to get their desired PABX Solutions. Our
              service allows enterprises to deploy and set up IP telephony by
              providing virtual support and assistance via the internet.
            </p>
            <button className="btn btn_getIt_what">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
