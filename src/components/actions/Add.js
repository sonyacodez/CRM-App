import React, {Component} from 'react'

class Add extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            surname: "",
            country: "",
            owner: ""
        }
    }
    updateClientKeys = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addNewClient = () => {
        const s = this.state
        this.props.addNewClient(s.firstName, s.surname, s.country, s.owner)
    }
    render() {
        return (
            <div>
                <h2>ADD CLIENT</h2>
                <div>First Name: <input name="firstName" value={this.state.name} onChange={this.updateClientKeys} type="text"/></div>
                <div>Surname: <input name="surname" value={this.state.surname} onChange={this.updateClientKeys} type="text"/></div>
                <div>Country: <input name="country" value={this.state.country} onChange={this.updateClientKeys} type="text"/></div>
                <div>Owner: <input name="owner" value={this.state.owner} onChange={this.updateClientKeys} type="text"/></div>
                <button onClick={this.addNewClient}>Add New Client</button>
            </div>
        )
    }
}
export default Add