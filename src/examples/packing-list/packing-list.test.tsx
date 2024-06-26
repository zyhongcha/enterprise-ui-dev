import { render, screen } from 'test/utilities';
import userEvent from '@testing-library/user-event';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const input = screen.getByLabelText('New Item Name');
  const button = screen.getByRole('button', { name: 'Add New Item' });

  expect(input).toHaveValue('');
  expect(button).toBeDisabled();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  render(<PackingList />);

  const input = screen.getByLabelText('New Item Name');
  const button = screen.getByRole('button', { name: 'Add New Item' });
  await userEvent.type(input, 'Socks');
  expect(input).toHaveValue('Socks');
  expect(button).not.toBeDisabled();
});

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {},
);
