import React, {Component} from 'react'
import Update from "./Update"
import Add from "./Add"

class Actions extends Component {
    render() {
        return (
            <div>
                <Update allClientInfo={this.props.clientInfo} updateClient={this.props.updateClient} updateSold={this.props.updateSold}/>
                <hr></hr>
                <Add addNewClient={this.props.addNewClient}/>
            </div>
        )
    }
}
export default Actions