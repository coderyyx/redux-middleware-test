import React, { Component } from 'react'

export default class Navs extends Component {
    render() {
        let {click} = this.props;
        return (
            <div>
                <div>**********************************************</div>
                <div>dispatch action</div>
                <button onClick={click}>click</button>
            </div>
        )
    }
}
