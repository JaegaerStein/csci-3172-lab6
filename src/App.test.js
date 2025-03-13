import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import App from './App';

describe('App Component', () => {
  it('renders Home page for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeHeader = screen.getByRole('heading', { name: /Welcome to My Portfolio/i });
    expect(homeHeader).to.exist;
  });

  it('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    const notFoundHeader = screen.getByRole('heading', { name: /404 - Page Not Found/i });
    expect(notFoundHeader).to.exist;
  });
});