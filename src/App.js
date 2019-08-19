import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import axios from "axios"
import Client from "./components/client/Client"
import Actions from "./components/actions/Actions"
import Analytics from "./components/analytics/Analytics"
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      clientInfo: []
    }
  }
  getAllClients = async() => {
    const reqForClients = await axios.get("http://localhost:8989/allClients")
    const clientInfo = reqForClients.data
    this.setState({ clientInfo })
  }
  componentDidMount = () => {
    this.getAllClients()
  }
  updatePopUpInfo = async (name, surname, country, clientID) => {
    await axios.put(`http://localhost:8989/client/${clientID}`, { name: `${name} ${surname}`, country })
    await this.getAllClients()
  }
  updateClient = async (key, value, clientName) => {
    const name = clientName.split(" ")
    await axios.put(`http://localhost:8989/updateClient/${name[0]}/${name[1]}`, { [key]: value })
    await this.getAllClients()
  }
  updateSold = (clientName) => {
    const newClientInfo = [...this.state.clientInfo]
    let thisClient = newClientInfo.find(c => c.name === clientName)
    thisClient.sold === true ? alert("Already bought the product.") : this.updateClient("sold", true, clientName)
  }
  addNewClient = async (firstName, surname, country, owner) => {
    const name = `${firstName} ${surname}`
    await axios.post(`http://localhost:8989/newclient`, { name, country, owner })
    await this.getAllClients()
  }
  render(){
    return (
      <div>
        <Router>
          <header>
            <Link to="/client">Client</Link>
            <Link to="/actions">Actions</Link>
            <Link to="/analytics">Analytics</Link>
          </header>
          <div>
            <Route exact path="/client" render={() => <Client clientInfo={this.state.clientInfo} updatePopUpInfo={this.updatePopUpInfo}/>}/>
            <Route exact path="/actions" render={() => <Actions clientInfo={this.state.clientInfo} updateClient={this.updateClient} updateSold={this.updateSold} addNewClient={this.addNewClient}/>} /> 
            <Route exact path="/analytics" render={() => <Analytics clientInfo={this.state.clientInfo}/>} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
