import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 0;
  background: ${(props) => (props.background ? props.background : "")};
`;

export const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  ${(props) => (props.center ? "text-align: center" : "")}
`;
