import React from 'react';

import renderer from 'react-test-renderer';
import { Balance } from './Balance';

test('snapshot', () =>{
    const component = renderer.create(<Balance/>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})