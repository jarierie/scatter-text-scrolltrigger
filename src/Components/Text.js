import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Container = styled.div`
  width: 500px;
  height: auto;
  color: white;
  text-align: center;
  p {
    display: inline-block;
    min-width: 10px;
    font-size: 5em;
  }
`;

export const Text = (props) => {
  const ref = useRef(null);
  let refArrayLength = 0;

  //animation

  const scatterAnimationX = (i, target, sign) => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[i], {
      x: sign + target.xCoor,
      y: sign + target.yCoor,
      opacity: 0,
      duration: 5,
      delay: 0.1,
    }).to(ref.current.childNodes[i], { display: "none", delay: 3 }, 0);
  };

  const scatterAnimation = () => {
    let i = 0;
    for (i = 0; i < refArrayLength; i++) {
      const positiveOrNegative = ["+", "-"];
      const sign = positiveOrNegative[Math.floor(Math.random() * 2)];
      const xCoor = Math.random() * 5000;
      const yCoor = Math.random() * 5000;
      scatterAnimationX(i, { xCoor, yCoor }, sign);
    }
  };

  const animation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,

        start: "50% 50%",
      },
    });
    tl.to(ref.current.childNodes, {
      onStart: () => scatterAnimation(),
    });
  };

  useEffect(() => {
    animation();
  });

  useEffect(() => {
    refArrayLength = ref.current.childNodes.length;
  }, []);
  return (
    <>
      <Container ref={ref}>
        {props.text.split("").map((letter) => {
          return (
            <>
              <p>{letter}</p>
            </>
          );
        })}
      </Container>
    </>
  );
};
