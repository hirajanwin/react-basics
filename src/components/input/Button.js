import React, { PureComponent } from 'react';
import styles from './Button.less';

export default class Button extends PureComponent {
    render() {
        const {
            value,
            disabled,
        } = this.props;

        return (
            <input
                className={styles.button}
                type="button"
                value={value} 
                disabled={disabled}
            />
        );
    }
}

Button.defaultProps ={
    value: 'Button',
    disabled: false,
};