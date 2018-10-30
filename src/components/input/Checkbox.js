import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.less';

export default class Checkbox extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: "",
        value: false,
        disabled: false,
        onChange: () => {}
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
