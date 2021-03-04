import React from "react";
import { Link } from "react-router-dom";

import {
  Heading,
  Img,
  ImgWrapper,
  InfoSec,
  InfoRow,
  InfoColumn,
  Subtitle,
  TextWrapper,
  Description,
} from "./InfoSection.elements";
import Container from "./../globals/Container";
import Button from "./../globals/Button";
import { Underline } from "./../globals/Underline";

const InfoSection = ({
  alt,
  buttonLabel,
  colorBg,
  description,
  headline,
  img,
  imgStart,
  start,
  subtitle,
}) => {
  return (
    <>
      <InfoSec colorBg={colorBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Underline />
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                <Description>{description}</Description>
                <Link to="/contact">
                  <Button big>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={img} alt={alt} imgStart={imgStart} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
