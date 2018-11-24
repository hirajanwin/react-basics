import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App />', () => {
    it('renders 1 <App /> component', () =>{
        const component = shallow(<App name="test" />);
        console.log(component.instance().props);
        expect(true).toBeTruthy();
    });
});

// const add = jest.fn(() => 3);

// // // Unit Test
// // // It only test one thing
// test('add', () => {
//     expect(add(1, 2)).toBe(3);
//     expect(add).toHaveBeenCalledTimes(1);
//     expect(add).toHaveBeenCalledWith(1, 2);
//     //expect(add(5, 2)).toBe(7);
// });

// // Integration Test
// // test things working together
// test('total', () => {
//     expect(total(5, 20)).toBe('$25');
// });