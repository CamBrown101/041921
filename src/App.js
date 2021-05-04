import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const handsomeBasset = require("./assets/handsomeBasset.jpeg");

const API = `https://dog.ceo/api/breeds/image/random`;

/* 
TODO / Feature Request: We need more pups! I know there are hundreds -- no, THOUSANDS of pups
out there. Not saying that our handsome basset isn't perfect, but lets give some other pups a
chance to shine. Let's make our button fetch from the provided api, and display the result in the frame. 

INFO: if there are issues using hooks, this may be helpful: https://github.com/facebook/react/issues/14484
*/

const date = new Date();

function App() {
  return (
    <div>
      <Body>
        <Header>
          <Logo>Sphere Pups</Logo>
          <Button>GET MORE PUPS</Button>
        </Header>

        <Frame>
          <Image src={handsomeBasset} />
        </Frame>

        <Footer>© {date.getFullYear()}</Footer>
      </Body>
    </div>
  );
}

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Body = styled.div`
  background-color: #02208f;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  padding: 40px;
`;

const Header = styled.div`
  align-items: center;
  height: 10vmin;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  animation: ${Animation} infinite 5s linear;
  border-bottom: 5px solid red;
  pointer-events: none;
  user-select: none;
`;

const Button = styled.div`
  --size: 10vmin;
  background: #d7b90b;
  border: 5px solid red;
  border-radius: var(--size);
  cursor: pointer;
  height: var(--size);
  font-size: 80%;
  margin: 20px;
  padding: 4px;
  text-align: center;
  transition: transform 100ms ease;
  width: var(--size);

  &:active {
    transform: scale(0.8);
  }
`;

const Frame = styled.div`
  background-color: #d7b90b;
  border: solid 5vmin #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 10px;
  margin: auto;
  position: relative;
  text-align: center;
  transform: rotate(-1deg);
  &:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
`;

const Image = styled.img`
  align-self: center;
  border-radius: 5px;
  height: auto;
  margin: auto;
  width: 50vmin;
`;

const Footer = styled.div`
  display: flex;
  font-size: 16px;
  height: 20vmin;
  justify-content: center;
  width: 100%;
`;

export default App;
