import React from "react";

// import ReactPlayer from "react-player";
import DroneShot from "../../media/DroneShot.mp4";
import { HeroInfo, HeroWrapper, Overlay, Title, Video } from "./Hero.element";

const Hero = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <Video autoPlay muted loop>
        <source src={DroneShot} type="video/mp4" />
      </Video>
      <HeroInfo>
        <Title>
          Nature and Drone
          <br /> Photography <br />
          <span>Switzerland </span>
        </Title>
      </HeroInfo>
    </HeroWrapper>
  );
};

export default Hero;
