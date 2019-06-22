import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import styles from './CheckboxList.less';

export default class CheckboxList extends Component {
    static propTypes = {
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
        items: PropTypes.arrayOf(PropTypes.any),
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: '',
        values: [],
        items: [],
        onChange: () => {},
    }

    onChange = (checkboxName, value, event) => {
        const { name, values, onChange } = this.props;
        const newValues = values.slice();

        if (newValues.indexOf(value) !== -1) {
            newValues.splice(newValues.indexOf(value), 1);
        }
        else {
            newValues.push(value);
        }

        onChange(name, newValues, event);
    }

    render() {
        const { items, values } = this.props;

        return (
            <div className={styles.checkboxList}>
                {items.map((item, i) => (
                    <div key={i}>
                        <Checkbox
                            name={item.name}
                            value={(values.includes(item.value))}
                            label={item.label}
                            disabled={item.disabled}
                            onChange={(n, v, e) => this.onChange(item.name, item.value, e)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
