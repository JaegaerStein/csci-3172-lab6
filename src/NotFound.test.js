import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import NotFound from './pages/NotFound';

describe('NotFound Component', () => {
  it('renders 404 message and Go Home link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const header = screen.getByRole('heading', { name: /404 - Page Not Found/i });
    expect(header).to.exist;

    const description = screen.getByText(/The page you're looking for doesn't exist\./i);
    expect(description).to.exist;

    const homeLink = screen.getByRole('link', { name: /go home/i });
    expect(homeLink).to.exist;
    expect(homeLink).to.have.attribute('href', '/');
  });
});