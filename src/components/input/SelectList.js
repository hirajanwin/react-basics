import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectList.less';

export default class SelectList extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
        })),
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: '',
        value: '',
        items: [],
        onChange: () => {},
    }

    onChange = (e) => {
        const { target: { name, value } } = e;
        const { onChange } = this.props;

        onChange(name, value, e);
    }

    render() {
        const { name, items, value } = this.props;

        const options = items.map((item, index) => (
            <option
                value={item.value}
                key={index}
            >
                {item.name}
            </option>
        ));

        return (
            <div className={styles.selectList}>
                <select
                    name={name}
                    defaultValue={value}
                    onChange={this.onChange}
                >
                    {options}
                </select>
            </div>
        );
    }
}
