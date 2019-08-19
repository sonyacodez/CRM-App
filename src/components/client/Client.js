import React, {Component} from 'react'
import AllClients from "./AllClients"

class Client extends Component {
    render() {
        return (
            <div>
                <AllClients clientInfo={this.props.clientInfo} updatePopUpInfo={this.props.updatePopUpInfo}/>
            </div>
        )
    }
}
export default Client