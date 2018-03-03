import React, { PureComponent } from 'react';
import styles from './Button.less';

export default class Button extends PureComponent {
    render() {
        const { value = 'Button' } = this.props;

        return (
            <input className={styles.button} type="button" value={value} />
        );
    }
}
