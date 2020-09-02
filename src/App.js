import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Phrase from "./components/Phrase";

//Styles for container
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
//Styles for Button
const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //State that has the quotes
  const [phraseState, setPhrase] = useState({});

  //Function for Api consulting
  const apiRequest = async () => {
    const apiURL = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await apiURL.json();
    setPhrase(quote[0]);
  };
  //Loading the first quote
  useEffect(() => {
    apiRequest();
  }, []);

  return (
    <Container>
      <Phrase phraseState={phraseState} />
      <Button onClick={apiRequest}>Get Quote</Button>
    </Container>
  );
}

export default App;
