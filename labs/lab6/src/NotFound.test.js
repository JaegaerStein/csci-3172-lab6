import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Page', () => {
  test('renders 404 message and Go Home link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Verify that the 404 heading is displayed
    const header = screen.getByRole('heading', { name: /404 - Page Not Found/i });
    expect(header).toBeInTheDocument();

    // Verify that the descriptive text is displayed
    const description = screen.getByText(/The page you're looking for doesn't exist\./i);
    expect(description).toBeInTheDocument();

    // Verify that the "Go Home" link is displayed and points to "/"
    const homeLink = screen.getByRole('link', { name: /go home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Verify that the link has the correct class for styling
    expect(homeLink).toHaveClass('btn btn-primary');
  });
});
