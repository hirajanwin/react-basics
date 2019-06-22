import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.less';

export default class Text extends Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: '',
        value: '',
        readOnly: false,
        disabled: false,
        onChange: () => {},
    }

    onChange = (e) => {
        const { target: { name, value } } = e;
        const { onChange } = this.props;

        onChange(name, value, e);
    }

    render() {
        const {
            name,
            value,
            min,
            max,
            readOnly,
            disabled,
            onClick,
            onKeyUp,
        } = this.props;

        return (
            <input
                className={styles.text}
                type="text"
                name={name}
                value={value}
                onChange={this.onChange}
                min={min}
                max={max}
                onClick={onClick}
                onKeyUp={onKeyUp}
                readOnly={readOnly}
                disabled={disabled}
            />
        );
    }
}
