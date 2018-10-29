import React from 'react';
import styles from './Checkbox.less';

export default class Checkbox extends React.Component {
    onChange = (e) => {
        const { target: { name, checked } } = e;
        const { onChange } = this.props;

        if (onChange) {
            onChange(name, checked);
        }
    }

    render() {
        const {
            name,
            value,
            disabled,
        } = this.props;

        return (
            <input
                className={styles.checkbox}
                type="checkbox"
                name={name}
                checked={value}
                onChange={this.onChange}
                disabled={disabled}
            />
        );
    }
}

Checkbox.defaultProps = {
    disabled: false,
};
