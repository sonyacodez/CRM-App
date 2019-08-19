import React, {Component} from 'react'
import {FaEnvelope} from "react-icons/fa"

class EmailsSent extends Component {
    render() {
        return (
            <span>
                <FaEnvelope />
                {<div>{this.props.clientInfo.filter(c => c.emailType !== null).length}</div>}
                {<div>Emails Sent</div>}
            </span>
        )
    }
}
export default EmailsSent