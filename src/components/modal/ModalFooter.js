import React from "react";
import Button from "../Button.js";
import styles from "./ModalFooter.less";

const ModalFooter = ({ confirmText, onConfirm, closeText, onClose }) => (
    <div className={styles.modalFooter}>
        <Button onClick={onConfirm} value={confirmText || "Save"} />
        <Button onClick={onClose} value={closeText || "Close"} />
    </div>
);

export default ModalFooter;
