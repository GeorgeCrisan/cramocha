import React from 'react';
//import { render } from '@testing-library/react';
import App from '../App';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { configure, shallow, render } from 'enzyme';
import Adapted from 'enzyme-adapter-react-16';




configure({ adapter: new Adapted() });

describe('App Component Unit Test', function () {

  it('Render Dummy Component', () => {
    const wrapper = shallow(<App />);
    
    const someTextNote = (<p>
      Edit <code>src/App.js</code> and save to reload.
    </p>);

    expect(wrapper).to.contain(someTextNote);
  });

  chai.use(chaiEnzyme());
});

