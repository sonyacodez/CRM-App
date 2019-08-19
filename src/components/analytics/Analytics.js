import React, {Component} from 'react'
import AllBadges from "./allBadges/AllBadges"
import Charts from "./charts/Charts"

class Analytics extends Component {
    render() {
        return (
            <div>
                <AllBadges clientInfo={this.props.clientInfo}/>
                <Charts clientInfo={this.props.clientInfo}/>
            </div>
        )
    }
}
export default Analytics