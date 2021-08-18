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

    public static IFChildren= class extends React.Component<IConditionChildren,{}>{

        constructor(props:IConditionChildren){
            super(props);
        }

        public render(){
            return (
                <React.Fragment>
                       {
                            (this.props.Condition===true) && (
                                <React.Fragment>
                                    {this.props.children}
                                </React.Fragment>
                            )
                        }
                </React.Fragment>
            )
        }

    }
        

    public static ElseChildren= class extends React.Component<IConditionChildren,{}>{

        constructor(props:IConditionChildren){
            super(props);
        }

        public render(){
            return (
                <React.Fragment>
                       {
                            (this.props.Condition===false) && (
                                <React.Fragment>
                                    {this.props.children}
                                </React.Fragment>
                            )
                        }
                </React.Fragment>
            )
        }

    }

}