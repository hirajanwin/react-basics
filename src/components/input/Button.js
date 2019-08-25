import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.less';

export default class Button extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        value: 'Button',
        disabled: false,
        onClick: () => {},
    };

    render() {
        const { value, disabled, onClick } = this.props;

        return (
            <input
                className={styles.button}
                type="button"
                value={value}
                onClick={onClick}
                disabled={disabled}
            />
        );
    }
}
