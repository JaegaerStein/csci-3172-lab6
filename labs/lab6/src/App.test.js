import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders home page with expected content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Replace the text below with an actual piece of text from your Home component.
    const headerText = screen.getByText(/I'm Jaegar Steinhauer/i);
    expect(headerText).toBeInTheDocument();
  });

  test('renders about page with expected content', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    // Replace the text below with an actual piece of text from your About component.
    const aboutText = screen.getByText(/About Me/i);
    expect(aboutText).toBeInTheDocument();
  });

  test('renders projects page with expected content', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    // Replace the text below with an actual piece of text from your Projects component.
    const projectsText = screen.getByText(/My Projects/i);
    expect(projectsText).toBeInTheDocument();
  });

  test('renders 404 page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    const notFoundText = screen.getByText(/404 - Page Not Found/i);
    expect(notFoundText).toBeInTheDocument();
  });
});
