import React, { Component } from "react";

export class Container extends Component {
    

    render() {
        const { title, children } = this.props;
        return <div>
            <h3>{title}</h3>
            {children}
        </div>
    }
}