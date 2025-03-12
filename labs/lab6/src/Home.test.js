import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import Home from './pages/Home';

describe('Home Component', () => {
  it('renders welcome message', () => {
    render(<Home />);

    const welcomeHeader = screen.getByRole('heading', { name: /Welcome to My Portfolio/i });
    expect(welcomeHeader).to.exist;

    const introText = screen.getByText(/Hi, I'm Jaegar Steinhauer/i);
    expect(introText).to.exist;
  });
});