import React from 'react';
import ReactDOM from 'react-dom';
import NullableComponent from './nullable-component';
import ArbitraryComponent from './arbitrary-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NullableComponent cmp={ ArbitraryComponent }/>, div);
});
