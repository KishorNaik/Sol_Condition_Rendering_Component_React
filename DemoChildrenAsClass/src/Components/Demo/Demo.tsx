import React from "react";
import "./Demo.css";
import Choose from "../ConditionComponents/Choose";

interface IDemoProps{

}

interface IDemoState{
    IsLoggedIn:boolean
}

export default class Demo extends React.Component<IDemoProps,IDemoState>{
    constructor(props:IDemoProps){
        super(props);

        this.state={
            IsLoggedIn:false
        };
    }

    public render(){
        return (
            <React.Fragment>
                <div className="flex flex-col">
                    <div>
                        <h1>
                            This is a Demo showing to implement Conditional Rendering in React.
                        </h1>
                    </div>
                    <div>
                        <Choose>
                            <Choose.IFChildren Condition={this.state.IsLoggedIn}>
                                <button className="btn btn-blue">Logout</button>
                            </Choose.IFChildren>
                            <Choose.ElseChildren Condition={this.state.IsLoggedIn}>
                                <button className="btn btn-blue">Login</button>
                            </Choose.ElseChildren>
                        </Choose>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}