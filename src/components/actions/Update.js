import React, {Component} from 'react'
import Input from "./Input"

class Update extends Component {
    constructor(){
        super()
        this.state = {
            client: "",
            owner: "",
            emailType: ""
        }
    }
    updateClientKeys = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updateOwner = () => {
        this.state.owner === "" ? alert("Please fill out the owner field before submitting.") :
        this.props.updateClient("owner", this.state.owner, this.state.client)
    }
    updateEmailType = () => {
        this.state.emailType === "" ? alert("Please fill out the emailType field before submitting.") :
        this.props.updateClient("emailType", this.state.emailType, this.state.client)
    }
    updateSold = () => {
        this.props.updateSold(this.state.client)
    }
    render() {
        const p = this.props
        const s = this.state
        return (
            <div>
                <h2>UPDATE</h2>
                <Input allClientInfo={p.allClientInfo} client={s.client} updateClientKeys={this.updateClientKeys}/>
                <div id="tranfer">
                    <span>Transfer ownership to: </span>
                    <select name="owner" value={s.owner} onChange={this.updateClientKeys} >
                        {p.allClientInfo.map((c, i) => <option key={i}>{c.owner}</option>)}
                    </select>
                    <button onClick={this.updateOwner}>TRANSFER</button>
                </div>
                <div id="email">
                    <span>Send email: </span>
                    <select name="emailType" value={s.emailType} onChange={this.updateClientKeys} >
                        {[0,65,66,67,68].map(n => <option key={n}>{String.fromCharCode(n)}</option>)}
                    </select>
                    <button onClick={this.updateEmailType}>SEND</button>
                </div>
                <div id="sold">
                    <span>Declare sale! </span>
                    <button onClick={this.updateSold}>DECLARE</button>
                </div>
            </div>
        )
    }
}
export default Update