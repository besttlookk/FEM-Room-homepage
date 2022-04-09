import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import PrevIcon from "../images/icon-angle-left.svg";
import NextIcon from "../images/icon-angle-right.svg";
import ArrorIcon from "../images/icon-arrow.svg";
import dataArr from "../data.json";
import { Text } from "../styles/shared";
import media from "../styles/media";

const Section = styled.section`
  ${media.tablet} {
    display: flex;
    align-items: center;
  }
`;

const Slider = styled.div`
  position: relative;
  height: 50vh;

  ${media.tablet} {
    height: 60vh;
    width: 50%;
  }

  ${media.laptop} {
    width: 60%;
  }
`;

const Controller = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 50;
  gap: 4rem;
  padding: 2rem;
  background-color: black;

  .btn {
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.8);
    }
  }

  ${media.tablet} {
    transform: translateX(100%);
  }
`;

const Content = styled.div`
  padding: 6.5rem 4.5rem 5rem;

  h1 {
    font-size: 2.4rem;
    max-width: 260px;
    margin-bottom: 2rem;

    ${media.tablet} {
      font-size: 2.6rem;
      max-width: 280px;
    }
  }

  ${media.tablet} {
    height: 60vh;
    width: 50%;
    padding: 5.5rem 4.5rem 5.5rem;
  }

  ${media.laptop} {
    width: 40%;
    padding: 7.5rem 7rem 5rem;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 5rem;

  p {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 1.3rem;
    font-weight: 600;
  }

  svg {
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }

  ${media.tablet} {
    p {
      font-size: 1.4rem;
    }
  }
`;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (activeIndex === 0) setActiveIndex(dataArr.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex === dataArr.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };
  return (
    <Section>
      <Slider>
        <Image
          alt="hero"
          src={require(`../images/desktop-image-hero-${dataArr[activeIndex].image}.jpg`)}
          objectFit="cover"
          layout="fill"
        />
        <Controller>
          <PrevIcon className="btn" onClick={handlePrev} />
          <NextIcon className="btn" onClick={handleNext} />
        </Controller>
      </Slider>

      <Content>
        <h1>{dataArr[activeIndex].title}</h1>
        <Text>{dataArr[activeIndex].content}</Text>

        <Button>
          <p>Shop Now</p>
          <ArrorIcon />
        </Button>
      </Content>
    </Section>
  );
};

export default HeroSection;
