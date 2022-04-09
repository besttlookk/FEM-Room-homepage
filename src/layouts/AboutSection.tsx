import Image from "next/image";
import React from "react";
import styled from "styled-components";
import media from "../styles/media";
import { Text } from "../styles/shared";

const Section = styled.section`
  ${media.laptop} {
    display: flex;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 25vh;

  ${media.laptop} {
    width: 30%;
    height: 40vh;
  }
`;

const Content = styled.div`
  padding: 4rem 4.5rem;

  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 1.6rem;
  }
`;

const AboutSection = () => {
  return (
    <Section>
      <ImageWrapper>
        <Image
          alt="about-1"
          src={require("../images/image-about-dark.jpg")}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>

      <Content>
        <h2>About our furniture</h2>
        <Text>
          {" "}
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </Text>
      </Content>

      <ImageWrapper>
        <Image
          alt="about-1"
          src={require("../images/image-about-light.jpg")}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
    </Section>
  );
};

export default AboutSection;
