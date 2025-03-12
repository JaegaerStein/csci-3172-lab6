import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders Home page for the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verify that the Home page content is displayed
    const homeHeader = screen.getByRole('heading', { name: /Welcome to My Portfolio/i });
    expect(homeHeader).toBeInTheDocument();
  });

  test('renders About page for the /about route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    // Verify that the About page content is displayed
    const aboutHeader = screen.getByRole('heading', { name: /About Me/i });
    expect(aboutHeader).toBeInTheDocument();
  });

  test('renders Projects page for the /projects route', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    // Verify that the Projects page content is displayed
    const projectsHeader = screen.getByRole('heading', { name: /My Projects/i });
    expect(projectsHeader).toBeInTheDocument();
  });

  test('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    // Verify that the 404 page is displayed
    const notFoundHeader = screen.getByRole('heading', { name: /404 - Page Not Found/i });
    expect(notFoundHeader).toBeInTheDocument();
  });
});