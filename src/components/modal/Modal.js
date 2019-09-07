import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.less';
import Portal from '../helper/helper';
import Button from '../input/Button';
import Icon from '../Icon';

export default class Modal extends Component {
    constructor() {
        super();
    }

    render() {
        const { children, toggle, show } = this.props;

        return (
            <Portal>
                {show && (
                    <div className={styles.modalWrapper}>
                        <div className={styles.modalWindow}>
                            <Button
                                className={styles.modalCloseButton}
                                onClick={toggle}
                            >
                                <Icon name="close" />
                            </Button>
                            {children}
                        </div>
                        <div
                            onClick={toggle}
                            className={styles.modalBackground}
                        />
                    </div>
                )}
            </Portal>
        );
    }
}
