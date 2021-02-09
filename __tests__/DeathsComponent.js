import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import DeathsComponent from '../src/components/DeathsComponent'

test("Deaths component test", () => {
  const { getByText } = render(<DeathsComponent deaths={0 } />);
  const elementFounded = getByText(/Total deaths/i);
  expect(elementFounded).toBeInTheDocument()
})