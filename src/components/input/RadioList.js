import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './RadioList.less';
import Radio from './Radio';

export default class RadioList extends Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        items: PropTypes.arrayOf(PropTypes.any),
        onChange: PropTypes.func,
    };

    static defaultProps = {
        name: '',
        value: '',
        items: [],
        onChange: () => {},
    };

    onChange = (radioName, value, event) => {
        const { name, onChange } = this.props;

        onChange(name, value, event);
    };

    render() {
        const { value, items } = this.props;
        return (
            <div className={styles.radioList}>
                {items.map((item, i) => (
                    <div key={i}>
                        <div key={i}>
                            <Radio
                                name={item.name}
                                label={item.label}
                                value={item.value}
                                checked={value === item.value}
                                onChange={e =>
                                    this.onChange(item.name, item.value, e)
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
