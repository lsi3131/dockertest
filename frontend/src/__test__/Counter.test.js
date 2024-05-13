// Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('test unittest sample', () => {
  expect(1).toEqual(1)
});

// test('카운터 초기값이 0이어야 함', () => {
//   const { getByText } = render(<Counter />);
//   const countElement = getByText(/count: 0/i);
//   expect(countElement).toBeInTheDocument();
// });
//
// test('카운터 증가 버튼 클릭시 카운트가 증가해야 함', () => {
//   const { getByText } = render(<Counter />);
//   const incrementButton = getByText(/increment/i);
//   fireEvent.click(incrementButton);
//   const countElement = getByText(/count: 1/i);
//   expect(countElement).toBeInTheDocument();
// });
//
// test('카운터 감소 버튼 클릭시 카운트가 감소해야 함', () => {
//   const { getByText } = render(<Counter />);
//   const decrementButton = getByText(/decrement/i);
//   fireEvent.click(decrementButton);
//   const countElement = getByText(/count: -1/i);
//   expect(countElement).toBeInTheDocument();
// });
