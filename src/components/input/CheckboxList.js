import React from 'react';
import styles from './CheckboxList.less';
import Checkbox from './Checkbox';

export default class CheckboxList extends React.Component {
    onChange = (checkboxName, value) => {
        const { name, values, onChange } = this.props;

        if (value) {
            values.push(checkboxName);
        }
        else {
            values.splice(values.indexOf(checkboxName), 1);
        }

        if (onChange) {
            onChange(name, values);
        }
    }

    render() {
        const { items, values } = this.props;

        const CheckBoxes = items.map((item, i) => (
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
                {CheckBoxes}
            </div>
        );
    }
}
