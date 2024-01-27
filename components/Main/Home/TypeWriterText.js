import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
//import Button from './Button';

const Title = styled.h2`
  text-transform: capitalize;
  width: 80%;
  align-self: flex-start;

  span {
    text-transform: uppercase;
  }
  .text-1{
      color: blue;
  }
  .text-2{
      color: orange;
  }
  .text-3{
      color: red;
  }

  @media (max-width: 70em) {

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  text-transform: capitalize;
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }
  
`

const ButtonContainer = styled.div`
 width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;

    button{
      margin: 0 auto;
    }
  }

`
const TypeWriterText = () => {
  return (
    <>
        <Title>
        Rapid, same day Groceries,
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-1">Meals,</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Home Care</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Delivery.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </Title>
    {/* <SubTitle>Bored Of Apes? Try Something New.</SubTitle>
    <ButtonContainer>
    <Button text="Explore" link="https://google.com" />
    </ButtonContainer> */}
    </>
  );
};

export default TypeWriterText;
