import React, {Component} from 'react'
import {FaGlobeAmericas} from "react-icons/fa"

class HottestCountry extends Component {
    hottestCountry = () => {
        const countries = {}
        this.props.clientInfo.map(c => c.country).forEach(c => countries[c] = (countries[c] || 0) + 1)
        const highestNum = (Object.values(countries).reduce((num, c)=> c > num ? num = c : num , 0))
        return Object.keys(countries).find(key => countries[key] === highestNum);
    }
    render() {
        return (
            <span>
                <FaGlobeAmericas />
                <div>{this.hottestCountry()}</div>
                <div>Hottest country</div>
            </span>
        )
    }
}
export default HottestCountry