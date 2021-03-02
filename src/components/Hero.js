import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import DroneShot from "../media/DroneShot.mp4";
import Theme from "./../styles/Theme";

// Codepen example: https://codepen.io/remersonc/pen/JXyvbZ
const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const HeroInfo = styled.div`
  width: 90vw;
  text-align: center;
  z-index: 2;
  color: ${Theme.color.mainWhite};
  h1 {
    font-size: 1.777rem;
  }
  h2 {
    font-size: 4.209rem;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <Video autoPlay muted loop>
        <source src={DroneShot} type="video/mp4" />
      </Video>
      <HeroInfo>
        <h2>Wanderruf</h2>
        <h1>Hiking and landscapes photography in Switzerland</h1>
      </HeroInfo>
    </HeroWrapper>
  );
};

export default Hero;

{
  /* <HeroVideoWrapper>
<ReactPlayer
  className="react-player"
  url="https://www.youtube.com/watch?v=xviqK0uFx90"
  width="auto"
  height="100vh"
  playing
/>
</HeroVideoWrapper> */
}
