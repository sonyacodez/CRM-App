import React, {Component} from 'react'
import {FaUserAlt} from "react-icons/fa"

class OutstandingClients extends Component {
    render() {
        return (
            <span>
                <FaUserAlt />
                {<div>{this.props.clientInfo.filter(c => c.sold === false).length}</div>}
                {<div>OutstandingClients</div>}
            </span>
        )
    }
}
export default OutstandingClients