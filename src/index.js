import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NullableComponent from './nullable-component';
import ArbitraryComponent from './arbitrary-component';

ReactDOM.render(
  <NullableComponent cmp={ ArbitraryComponent }/>,
  document.getElementById('root')
);
