import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import LineChartComponent from '../src/components/LineChartComponent'

test("Line chart component test", () => {
  const dummyTest = {
    NewConfirmed: 211236,
    NewDeaths: 5321,
    NewRecovered: 112126,
    TotalConfirmed: 106336278,
    TotalDeaths: 2323671,
    TotalRecovered: 59368067
  }
  const { queryByTestId } = render(<LineChartComponent globals={dummyTest} />);
  const elementFounded = queryByTestId('virus-line-chart');
  expect(elementFounded).toBeInTheDocument()
})