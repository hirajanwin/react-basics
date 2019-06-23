import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.less';

export default class TextArea extends Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        placeHolder: this.propTypes.string,
        maxLength: PropTypes.number,
        rows: PropTypes.number,
        cols: PropTypes.number,
        readOnly: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        name: '',
        value: '',
        readOnly: false,
        disabled: false,
        onChange: () => {},
    };

    onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        const { onChange } = this.props;

        onChange(name, value, e);
    };

    render() {
        const {
            name,
            value,
            placeHolder,
            maxLength,
            rows,
            cols,
            readOnly,
            disabled,
        } = this.props;

        return (
            <textarea
                className={styles.textArea}
                type="text"
                name={name}
                value={value}
                onChange={this.onChange}
                placeholder={placeHolder}
                maxLength={maxLength}
                rows={rows}
                cols={cols}
                readOnly={readOnly}
                disabled={disabled}
            />
        );
    }
}
