import React from 'react';
import {render} from '@testing-library/react-native';
import AuthComponent from '../../src/components/AuthComponent';

test('AuthComponent renders "Detail Screen"', () => {
  const {getByText} = render(<AuthComponent />);
  const textElement = getByText('Detail Screen');
  expect(textElement).toBeDefined();
});
