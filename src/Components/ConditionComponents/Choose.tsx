import React from "react";

export default class Choose extends React.Component{

    public render(){
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }

}