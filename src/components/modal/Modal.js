import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.less";

const { body } = this.document;

export default class Modal extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        onClose: PropTypes.func
    };

    static defaultProps = {
        isOpen: false,
        onClose: () => {}
    };

    constructor() {
        super();

        const { isOpen } = this.props;

        this.state = {
            isOpen: isOpen || false
        };

        this.el = this.document.createElement("div");
    }

    componentDidMount() {
        body.appendChild(this.el);
    }

    componentWillUnmount() {
        body.removeChild(this.el);
    }

    onClose = () => {
        const { onClose } = this.props;

        onClose();

        this.setState({ isOpen: false });
    };

    render() {
        const { children } = this.props;
        const { isOpen } = this.state;

        return (
            isOpen &&
            React.createPortal(
                <div className={styles.modal__cover}>
                    <div className={styles.modal}>{children}</div>
                </div>,
                this.el
            )
        );
    }
}
