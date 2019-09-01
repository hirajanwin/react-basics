import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.less';
import classnames from 'classnames';

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
        const { value, disabled, onClick, className } = this.props;

        return (
            <input
                className={classnames(className, styles.button)}
                type="button"
                value={value}
                onClick={onClick}
                disabled={disabled}
            />
        );
    }
}
