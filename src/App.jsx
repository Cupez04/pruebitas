// Importacion de componentes
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import React from "react";

export default class App extends React.Component {
  render(){
    return (
    <>
      <Section>
        <FeedbackOptions></FeedbackOptions>
    </Section>
    </>  
    )
  }  
  };