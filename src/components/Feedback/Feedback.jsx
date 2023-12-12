import React, {Component} from "react";
import { FeedbackDiv, ButtonDiv, Button } from "./Feedback.styled";
export class Feedback extends Component {
    
    render() {      
        const { buttonType } = this.props;
        return (
            <FeedbackDiv>
                <p>Please leave feedback</p>
                <ButtonDiv>
                    {buttonType.map((el) => (
                        <Button name={el} key={el}>{el}</Button>
                    ))}
                </ButtonDiv>
            </FeedbackDiv>
        )
    }
} 