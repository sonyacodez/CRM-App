import React, {Component} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

class SalesByCountry extends Component {
    render() {
        return (
            <div> 
                <BarChart
                    width={800}
                    height={300}
                    data={this.props.salesbyCountry()}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="green" />
                </BarChart>
            </div>
        )
    }
}

export default SalesByCountry