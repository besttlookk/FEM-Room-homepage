import styled from "styled-components";
import media from "./media";

export const Text = styled.p`
  color: var(--col-gray);
  font-size: 1.4rem;
  line-height: 1.8;

  ${media.tablet} {
    font-size: 1.5rem;
    max-width: 450px;
  }
`;
