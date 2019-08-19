import React, {Component} from 'react'
import Moment from "moment"
import PopUp from "./PopUp"

class SingleClient extends Component {
    constructor(){
        super()
        this.state = {
            display: false
        }
    }
    displayPopUp = () => {
        this.setState({ display: !this.state.display })
    }
    render() {
        const client = this.props.client
        const name = client.name.split(" ")
        return (
        <div>
            <div onClick={this.displayPopUp}>
                <span>*{name[0]}</span>
                <span> {name[1]}|</span>
                <span> {client.email}|</span>
                <span> {Moment(client.firstContact).format("DD/MM/YYYY")}|</span>
                <span> {client.emailType}|</span>
                <span> {client.sold ? "yes" : "no"}|</span>
                <span> {client.owner}|</span>
                <span> {client.country}|</span>
            </div>
            {this.state.display ? <PopUp client={client} displayPopUp={this.displayPopUp} updatePopUpInfo={this.props.updatePopUpInfo}/> : null}
        </div>
        )
    }
}

export default SingleClient