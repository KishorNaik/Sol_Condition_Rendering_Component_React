import React from "react";
import "./Demo.css";
import Choose from "../ConditionComponents/Choose";
import When from "../ConditionComponents/When";

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
                            <When Condition={this.state.IsLoggedIn===true}>
                                <button className="btn btn-blue">Logout</button>
                            </When>
                            <When Condition={this.state.IsLoggedIn===false}>
                                <button className="btn btn-blue">Login</button>
                            </When>
                        </Choose>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}