import React from 'react';
import Button from '../components/input/Button';
import Text from '../components/input/Text';
import Checkbox from '../components/input/Checkbox';
import CheckboxList from '../components/input/CheckboxList';
import SelectList from '../components/input/SelectList';
import RadioList from '../components/input/RadioList';
import Modal from '../components/modal/Modal';

export default class InputView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                text1: 'text',
                checkbox1: true,
                checkValues: [],
                selectValue: 1,
                radioValue: null,
                radioListValue: 2,
            },
            checkboxItems: [
                { name: 'Checkbox One', value: 1 },
                { name: 'Checkbox Two', value: 2, label: 'Checkbox Two Label' },
                { name: 'Checkbox Three', value: 3 },
            ],
            selectItems: [
                { name: 'One', value: 1 },
                { name: 'Two', value: 2 },
                { name: 'Three', value: 3 },
            ],
            radioItems: [
                { name: 'Radio One', value: 1 },
                { name: 'Radio Two', value: 2 },
                { name: 'Radio Three', value: 3, label: 'Radio Three Label' },
            ],
            modalOpen: false,
        };
    }

    onChange = (name, value) => {
        const { data } = this.state;

        data[name] = value;

        this.setState({ data });
    };

    toggle = () => {
        const { modalOpen } = this.state;

        this.setState({ modalOpen: !modalOpen });
    };

    render() {
        const {
            data: {
                text1,
                checkbox1,
                checkValues,
                selectValue,
                radioListValue,
            },
            checkboxItems,
            selectItems,
            radioItems,
            modalOpen,
        } = this.state;

        return (
            <div>
                <h1>Input View</h1>
                <div>
                    <h3>{'Button'}</h3>
                    <Button />
                </div>
                <div>
                    <h3>{'Text Input'}</h3>
                    <Text name="text1" value={text1} onChange={this.onChange} />
                </div>
                <div>
                    <h3>{`Checkbox: ${checkbox1}`}</h3>
                    <Checkbox
                        name="checkbox1"
                        value={checkbox1}
                        label="stand alone checkbox"
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>{`Checkbox List: ${checkValues}`}</h3>
                    <CheckboxList
                        name="checkValues"
                        items={checkboxItems}
                        values={checkValues}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>{'Select List'}</h3>
                    <SelectList
                        name="selectValue"
                        value={selectValue}
                        items={selectItems}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h3>{`Radio List: ${radioListValue}`}</h3>
                    <RadioList
                        name="radioListValue"
                        value={radioListValue}
                        items={radioItems}
                        onChange={this.onChange}
                    />
                </div>
                <button onClick={this.toggle}>Login</button>
                <Modal on={modalOpen} toggle={this.toggle}>
                    <h1>still</h1>
                </Modal>
            </div>
        );
    }
}
