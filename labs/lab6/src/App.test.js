import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page with expected content', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Replace the text below with an actual piece of text from your Home component.
  const headerText = screen.getByText(/I'm Jaegar Steinhauer/i);
  expect(headerText).toBeInTheDocument();
});
