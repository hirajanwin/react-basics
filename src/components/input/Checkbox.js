import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';

export default class Checkbox extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: '',
        label: '',
        value: false,
        disabled: false,
        onChange: () => { },
    }

    onChange = (e) => {
        const { target: { name, checked } } = e;
        const { onChange } = this.props;

        onChange(name, checked, e);
    }

    render() {
        const {
            name,
            value,
            label,
            disabled,
        } = this.props;

        return (
            <div className={styles.checkbox}>
                <label htmlFor={name}>
                    <input
                        type="checkbox"
                        name={name}
                        value={value}
                        checked={value}
                        onChange={this.onChange}
                        disabled={disabled}
                    />
                    {label || name}
                </label>
            </div>
        );
    }
}
