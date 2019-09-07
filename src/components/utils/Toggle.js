import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
        };
    }

    toggle = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    }

    render() {
        const { children } = this.props;
        const { show } = this.state;
        return children({
            show,
            toggle: this.toggle,
        });
    }
}
