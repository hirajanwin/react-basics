import React from 'react';
import Button from 'components/input/Button';
import Text from 'components/input/Text';
import Checkbox from 'components/input/Checkbox';
import CheckboxList from 'components/input/CheckboxList';

export default class InputView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                text1: 'text',
                checkbox1: true,
                checkValues: ['Check Two'],
            },
            items: ['Check One', 'Check Two', 'Check Three'],
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
            },
            items,
        } = this.state;

        return (
            <div>
                <h1>Input View</h1>
                <div>
                    {'Button'}
                    <Button />
                </div>
                <div>
                    {'Text Input'}
                    <Text
                        name="text1"
                        value={text1}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    {'Checkbox'}
                    <Checkbox
                        name="checkbox1"
                        value={checkbox1}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    {'Checkbox List'}
                    <CheckboxList
                        name="checkValues"
                        items={items}
                        values={checkValues}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}
