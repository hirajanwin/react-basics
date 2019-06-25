import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';

export default class Radio extends Component {
    static propTypes = {
        name: PropTypes.string,
        checked: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        name: '',
        checked: false,
        value: null,
        disabled: false,
        onChange: () => {},
    };

    onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        const { onChange } = this.props;

        onChange(name, value, e);
    };

    render() {
        const { checked, name, value, disabled, label } = this.props;

        return (
            <div className={styles.radio}>
                <label htmlFor={name}>
                    <input
                        className={styles.radio}
                        type="radio"
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={this.onChange}
                        disabled={disabled}
                    />
                    { label || name }
                </label>
            </div>
        );
    }
}
