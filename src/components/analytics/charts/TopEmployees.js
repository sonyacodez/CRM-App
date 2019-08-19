import React, {Component} from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

class TopEmployees extends Component {
    render() {
        return (
            <div>
                <strong>The Top 3 Employees:</strong>
                    <BarChart
                        width={500}
                        height={300}
                        data={this.props.topEmployees()}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
            </div>
        )
    }
}

export default TopEmployees