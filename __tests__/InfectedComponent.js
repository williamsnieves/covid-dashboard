import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import InfectedComponent from '../src/components/InfectedComponent'

test("Infected component test", () => {
  const { getByText } = render(<InfectedComponent infected={0 } />);
  const elementFounded = getByText(/People infected/i);
  expect(elementFounded).toBeInTheDocument()
})
