import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckboxList.less';
import Checkbox from './Checkbox';

export default class CheckboxList extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        values: PropTypes.array,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        name: "",
        values: false,
        onChange: () => {},
    }

    onChange = (checkboxName, value) => {
        const { name, values, onChange } = this.props;
        const newValues = values.slice();

        if (value) {
            newValues.push(checkboxName);
        }
        if (newValues.indexOf(checkboxName) !== -1) {
            newValues.splice(newValues.indexOf(checkboxName), 1);
        }

        onChange(name, newValues);
    }

    render() {
        const { items, values } = this.props;

        const checkBoxes = items.map((item, i) => (
            <div key={i}>
                {item}
                <Checkbox
                    name={item}
                    value={(values.includes(item))}
                    onChange={this.onChange}
                />
            </div>
        ));

        return (
            <div className={styles.checkboxList}>
                {checkBoxes}
            </div>
        );
    }
}
