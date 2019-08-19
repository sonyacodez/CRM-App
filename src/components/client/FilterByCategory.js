import React, {Component} from 'react'

class FilterByCategory extends Component {
    updateSearchKey = (e) => {
        this.props.updateSearchKey(e)
    }
    render() {
        const p = this.props
        return (
            <div style={{ backgroundColor: "violet" }}>
                <input name="search" value={p.search} onChange={this.updateSearchKey} type="text"/>
                <select name="category" value={p.category} onChange={this.updateSearchKey} >
                    <option>Name</option>
                    <option>Surname</option>
                    <option>Country</option>
                    <option>First Contact</option>
                    <option>Email</option>
                    <option>Sold</option>
                    <option>Owner</option>
                    {/* {this.props.clientInfo.map((c, i) => <option key={i}>{c.owner}</option>)} */}
                </select>
            </div>
        )
    }
}
export default FilterByCategory