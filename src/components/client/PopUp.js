import React, {Component} from 'react'

class PopUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""
        }
    }
    updateStateKeys = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updatePopUpInfo = () => {
        const s = this.state
        if(s.name && s.surname && s.country){
            this.props.updatePopUpInfo(s.name, s.surname, s.country, this.props.client._id)
            this.displayPopUp()
        } else{
            alert("You must fill in all fields of the form before submission.")
        }
    }
    displayPopUp = () => {
        this.props.displayPopUp()
    }
    render() {
        const client = this.props.client
        const name = client.name.split(" ")
        return (
            <div style={{ backgroundColor: "yellow" }}>
                <button onClick={this.displayPopUp}>X</button>
                <div>Name: <input name="name" value={this.state.name} onChange={this.updateStateKeys} type="text" placeholder={name[0]}/></div>
                <div>Surname: <input name="surname" value={this.state.surname} onChange={this.updateStateKeys} type="text" placeholder={name[1]}/></div>
                <div>Country: <input name="country" value={this.state.country} onChange={this.updateStateKeys} type="text" placeholder={client.country}/></div>
                <button onClick={this.updatePopUpInfo} >Update</button>
            </div>
        )
    }
}
export default PopUp