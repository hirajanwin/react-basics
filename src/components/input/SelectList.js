import React from 'react';
import PropTypes from 'prop-types';

export default class SelectList extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
    }

    static defaultProps = {
        name: '',
        value: '',
    }

    onChange = (e) => {

    }

    render() {
        const { name, value } = this.props;

        return (
            <div>
                {name} {value}
            </div>
        );
    }
}
