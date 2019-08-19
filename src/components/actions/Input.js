import React, {Component} from 'react'

class Input extends Component {
    selectClient = (e) => {
        this.props.updateClientKeys(e)
    }
    render() {
        return (
            <div>
                <label>Client:</label>
                <input name="client" list="client-names" value={this.props.client} onChange={this.selectClient}/>
                <datalist id="client-names">
                    {this.props.allClientInfo.map((c, i) => <option key={i}>{c.name}</option>)}
                </datalist>
            </div>
        )
    }
}
export default Input