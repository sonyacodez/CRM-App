import React, {Component} from 'react'
import TopEmployees from "./TopEmployees"
import ClientAcquistion from "./ClientAcquisition"
import SalesByCountry from "./SalesByCountry"
import SalesPast30Days from "./SalesPast30Days"

class Charts extends Component {
    topEmployees = () => {
        const employeeData = {}
        const topEmployees = []
        this.props.clientInfo.filter(c => c.sold === true)
            .map(c => c.owner)
            .forEach(o => employeeData[o] = (employeeData[o] || 0) +1)
        const topEarnings = Object.values(employeeData).sort().reverse()
        for(let i = 0; i < 3 ; i++){
            const employee = Object.keys(employeeData).filter(key => employeeData[key] === topEarnings[i])
                .map(key => {return { name: key, amount: topEarnings[i] }})
            topEmployees.push(employee[0])
        }
        return topEmployees
    }
    salesbyCountry = () => {
        const countries = {}
        this.props.clientInfo.map(c => c.country).forEach(c => countries[c] = (countries[c] || 0) + 1)
        return Object.entries(countries).map(e => {return { country: e[0], amount: e[1] }})
    }
    render() {
        return (
            <div>
                <TopEmployees clientInfo={this.props.clientInfo} topEmployees={this.topEmployees}/>
                <ClientAcquistion clientInfo={this.props.clientInfo}/>
                <SalesByCountry clientInfo={this.props.clientInfo} salesbyCountry={this.salesbyCountry}/>
                <SalesPast30Days clientInfo={this.props.clientInfo}/>
            </div>
        )
    }
}
export default Charts