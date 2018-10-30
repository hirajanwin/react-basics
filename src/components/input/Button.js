import React, { PureComponent } from 'react';
import styles from './Button.less';

export default class Button extends PureComponent {
    static propTypes = {
        value: string,
        disabled: boolean,
    }

    static defaultProps = {
        value: 'Button',
        disabled: false,
    };

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
