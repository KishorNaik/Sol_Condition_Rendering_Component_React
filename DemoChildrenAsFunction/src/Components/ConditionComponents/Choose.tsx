import React from "react";

interface IConditionChildren{
    Condition?:boolean;
    children?:React.ReactNode
}

export default class Choose extends React.Component{

    public render(){
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }

    public static IFChildren:React.FunctionComponent<IConditionChildren>=(props:IConditionChildren):JSX.Element=>{
        return (
            <React.Fragment>
                {
                    (props.Condition===true) && (
                        <React.Fragment>
                            {props.children}
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        )
    }

    public static ElseChildren:React.FunctionComponent<IConditionChildren>=(props:IConditionChildren):JSX.Element=>{
        return (
            <React.Fragment>
                {
                    (props.Condition===false) && (
                        <React.Fragment>
                            {props.children}
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        )
    }

}