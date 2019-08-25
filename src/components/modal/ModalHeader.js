import React from "react";
import styles from "./Modal.less";

const ModalHeader = ({ title, onClose }) => (
    <div className={styles.header}>
        <span onClick={onClose} />
        <div className="title">{title}</div>
    </div>
);

export default ModalHeader;
