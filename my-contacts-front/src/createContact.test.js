import { fireEvent, screen } from '@testing-library/react';

import { Create } from '../pages/Create';

test('creating contact', () => {
  render(<Create />);
  const nameInput = screen.getByTestId('nameInput');
  const surnameInput = screen.getByTestId('surnameInput');
  const emailInput = screen.getByTestId('emailInput');
  const phoneInput = screen.getByTestId('phoneInput');
  fireEvent.change(nameInput, { target: { value: 'creating contact test' } });
  fireEvent.change(surnameInput, { target: { value: 'creating contact test' } });
  fireEvent.change(emailInput, { target: { value: 'creatingcontacttest@gmail.com' } });
  fireEvent.change(phoneInput, { target: { value: '666-666-6666' } });
  fireEvent.click(screen.getByTestId('addContact'));
  expect(screen.getByText('creating contact test')).toBeInTheDocument();
});
