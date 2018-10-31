import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.less';

export default class Button extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
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
