import React, {Component} from 'react'
import NewClients from "./NewClients"
import EmailsSent from "./EmailsSent"
import HottestCountry from "./HottestCountry"
import OutstandingClients from "./OutstandingClients"

class AllBadges extends Component {
    render() {
        return (
            <div>
                <NewClients clientInfo={this.props.clientInfo}/>
                <EmailsSent clientInfo={this.props.clientInfo}/>
                <OutstandingClients clientInfo={this.props.clientInfo}/>
                <HottestCountry clientInfo={this.props.clientInfo}/>
            </div>
        )
    }
}
export default AllBadges