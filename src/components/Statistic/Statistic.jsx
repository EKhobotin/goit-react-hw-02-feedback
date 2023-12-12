import React, { Component } from "react";
import {StatisticWrap,StatisticItem } from "./Statistic.styled";

export class Statistic extends Component {

    render() {
        return (<StatisticWrap>Statistics
            <StatisticItem>Good:
                <span>1</span>
            </StatisticItem>
            <StatisticItem>Neutral:
                <span>2</span>
            </StatisticItem>
            <StatisticItem>Bad:
                <span>3</span>
            </StatisticItem>
        </StatisticWrap>)
        
    }
}