import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.less';
import Portal from '../helper/helper';
import Button from '../input/Button';

export default class Modal extends Component {
    constructor() {
        super();
    }

    test() {}

    render() {
        const { children, toggle, on } = this.props;

        return (
            <Portal>
                {on && (
                    <div className={styles.modalWrapper}>
                        <div className={styles.modalWindow}>
                            <Button
                                className={styles.modalCloseButton}
                                onClick={toggle}
                            >
                                Close
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
