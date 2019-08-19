import React, {Component} from 'react'
import SingleClient from "./SingleClient"
import FilterByCategory from "./FilterByCategory"
import Header from "./Header"

class AllClients extends Component {
    constructor(){
        super()
        this.state = {
            search: "",
            category: ""
        }
    }
    updateSearchKey = (e) => {
        this.setState({ [e.target.name]: e.target.value }, function(){
            console.log(this.state)
        })
    }
    clientList = () => {
        const s = this.state
        const p = this.props
        if(s.category === ""){
            return p.clientInfo.map((c, i) => <SingleClient key={i} client={c} updatePopUpInfo={p.updatePopUpInfo}/>)
        }
        else if(s.search === ""){
            return p.clientInfo
                .filter(c => c[s.category])
                .map((c, i) => <SingleClient key={i} client={c} updatePopUpInfo={p.updatePopUpInfo}/>)
        }
        else{
            return p.clientInfo
                .filter(c => c[s.category] === s.search)
                .map((c, i) => <SingleClient key={i} client={c} updatePopUpInfo={p.updatePopUpInfo}/>)
        }
    }
    render() {
        const p = this.props
        return (
            <div style={{ backgroundColor: "pink" }}>
                <FilterByCategory clientInfo={p.clientInfo} updateSearchKey={this.updateSearchKey}/>
                <Header />
                {this.clientList()}
            </div>
        )
    }
}
export default AllClients