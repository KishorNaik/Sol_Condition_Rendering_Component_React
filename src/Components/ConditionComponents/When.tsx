import React from "react";

interface IWhen{
    Condition:boolean
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
                            {this.props.children}
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        )
    }

}