import React from "react";

interface IWhen{
    Condition?:boolean;
    IfRender?:React.ReactNode;
    ElseRender?:React.ReactNode;
}

export default class When extends React.Component<IWhen,{}>{

    constructor(props:IWhen){
        super(props);
        console.log("When",this.props.Condition);        
    }

    public render(){
        return (
            <React.Fragment>
                {
                    (this.props.Condition===true) && (
                        <React.Fragment>
                            {this.props.IfRender}
                        </React.Fragment>
                    )
                }
                {
                    (this.props.Condition===false) && (
                        <React.Fragment>
                            {this.props.ElseRender}
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        )
    }

}