import React, {Component} from 'react'
import moment from "moment"
import {FaChartLine} from "react-icons/fa"

class NewClient extends Component {
    isDateThisMonth = (client) => {
        const dateArray = moment(client.firstContact).format("DD/MM/YYYY").split("/")
        const today = moment("11/10/2018").format("DD/MM/YYYY").split("/")
        return dateArray[1] === today[1] && dateArray[2] === today[2] ? true : false
    }
    render() {
        const newClients = this.props.clientInfo.filter(c => this.isDateThisMonth(c)).length
        return (
            <span>
                <FaChartLine />
                {<div>{newClients} </div>}
                {<div>New {moment("11/10/2018").format("MMMM")} Clients</div>}
            </span>
        )
    }
}

export default NewClient