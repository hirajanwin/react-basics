import React from 'react';
import styles from './Text.less';

export default class Text extends React.Component {
    onChange = (e) => {
        const { target: {name, value} } = e;
        const { onChange } = this.props;

        if (onChange) {
            onChange(name, value);
        }
    }

    render() {
        const { 
            name,
            value,
            min,
            max,
            onClick,
            onKeyUp,
            readOnly = false,
            disabled = false,
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
        )
    }
}

Text.defaultProps = {
    value: '',
    readOnly: false,
    disabled: false,
};