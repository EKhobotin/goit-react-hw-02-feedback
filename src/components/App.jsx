import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistic } from "./Statistic/Statistic";


export class App extends Component  {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  render() {
    const buttonType = ["good", "neutral", "bad"];
    return (<div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback title={123} buttonType={buttonType} />
      <Statistic/>
    </div>)
    
  };
};
