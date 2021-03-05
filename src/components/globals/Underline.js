import styled from "styled-components";
import Theme from "./../../styles/Theme";

export const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 2rem;
  background: ${Theme.color.secondary};
`;

export const UnderlineSmall = styled(Underline)`
  width: 4rem;
  height: 0.15rem;
`;
