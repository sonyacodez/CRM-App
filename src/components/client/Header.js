import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "green" }}>
                <span>Name</span>
                <span>Surname</span>
                <span>Country</span>
                <span>First Contact</span>
                <span>Email</span>
                <span>Sold</span>
                <span>Owner</span>
            </div>
        )
    }
}
export default Header