import React, { Component } from 'react';

import FluidStyle from '../FluidStyle';

export default class Row extends Component {
    render() {
        const { style } = this.props;
        const styl = Object.assign(
            {},
            style,
            FluidStyle.row
        );
        return (
            <div className="fluid-react-row" style={styl}>
                {this.props.children}
            </div>
        )
    }
}
