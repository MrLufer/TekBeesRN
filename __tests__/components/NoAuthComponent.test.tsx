import React from 'react';
import {render} from '@testing-library/react-native';
import NoAuthComponent from '../../src/components/NoAuthComponent';

test('NoAuthComponent renders "No Auth"', () => {
  const {getByText} = render(<NoAuthComponent />);

  const textElement = getByText('No Auth');
  expect(textElement).toBeDefined();
});
