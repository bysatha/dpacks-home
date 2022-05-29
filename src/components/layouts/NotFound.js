import React, {Component} from "react";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className={"not-found con-mid"}>

                        <div className={"not-found-head"}>
                            <h1><span style={{color: "#000"}}>error</span></h1>
                            <h1>&nbsp;</h1>
                            <h1 style={{color: "#737dff"}}>404</h1>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
