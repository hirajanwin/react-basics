import React from 'react';
import Button from 'components/input/Button';
import Text from 'components/input/Text';
import Checkbox from 'components/input/Checkbox';
import CheckboxList from 'components/input/CheckboxList';
import SelectList from 'components/input/SelectList';

export default class InputView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                text1: 'text',
                checkbox1: true,
                checkValues: ['Check Two'],
                selectValue: 1,
            },
            checkboxItems: ['Check One', 'Check Two', 'Check Three'],
            selectItems: [
                { name: 'One', value: 1 },
                { name: 'Two', value: 2 },
                { name: 'Three', value: 3 },
            ],
        };
    }

    onChange = (name, value) => {
        const { data } = this.state;

        data[name] = value;

        this.setState({ data });
    }

    render() {
        const {
            data: {
                text1,
                checkbox1,
                checkValues,
                selectValue,
            },
            checkboxItems,
            selectItems,
        } = this.state;

        return (
            <div>
                <h1>Input View</h1>
                <div>
                    <h3>
                        {'Button'}
                    </h3>
                    <Button />
                </div>
                <div>
                    <h3>
                        {'Text Input'}
                    </h3>
                    <Text
                        name="text1"
                        value={text1}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>
                        {'Checkbox'}
                    </h3>
                    <Checkbox
                        name="checkbox1"
                        value={checkbox1}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>
                        {'Checkbox List'}
                    </h3>
                    <CheckboxList
                        name="checkValues"
                        values={checkValues}
                        items={checkboxItems}
                        onChange={this.onChange}
                    />
                </div>
                <h3>
                    {'Select List'}
                </h3>
                <SelectList
                    name="selectValue"
                    value={selectValue}
                    items={selectItems}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
