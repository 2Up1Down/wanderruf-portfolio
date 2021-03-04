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
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                <Description>{description}</Description>
                <Link to="/contact">
                  <Button>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
