import React, { Component } from 'react'
import "./filter.css"

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-results">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order  <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Letest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter {" "} <select value ={this.props.size} onChange={this.props.filterProducts}>
                        <option>All</option>
                        <option>L</option>
                        <option>M</option>
                        <option>S</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}
