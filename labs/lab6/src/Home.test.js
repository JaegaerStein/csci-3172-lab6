import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);

    // Verify that the welcome message is displayed
    const welcomeHeader = screen.getByRole('heading', { name: /Welcome to My Portfolio/i });
    expect(welcomeHeader).toBeInTheDocument();

    const introText = screen.getByText(/Hi, I'm Jaegar Steinhauer/i);
    expect(introText).toBeInTheDocument();
  });
});