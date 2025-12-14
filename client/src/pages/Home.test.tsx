import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page', () => {
  it('should render hero section with main title', () => {
    render(<Home />);
    expect(screen.getByText(/Lions Alpha Kennel/i)).toBeDefined();
    expect(screen.getByText(/Elite Bloodlines. DNA Alfa./i)).toBeDefined();
  });

  it('should render all main sections', () => {
    render(<Home />);
    expect(screen.getByText(/Sobre o Lions Alpha Kennel/i)).toBeDefined();
    expect(screen.getByText(/Nossa Matilha Alpha/i)).toBeDefined();
    expect(screen.getByText(/A Melhor Experiência Alpha/i)).toBeDefined();
    expect(screen.getByText(/Alpha Exclusive/i)).toBeDefined();
    expect(screen.getByText(/Alpha Family Worldwide/i)).toBeDefined();
  });

  it('should render contact form', () => {
    render(<Home />);
    expect(screen.getByText(/Entre em Contato/i)).toBeDefined();
    expect(screen.getByLabelText(/Nome Completo/i)).toBeDefined();
    expect(screen.getByLabelText(/WhatsApp/i)).toBeDefined();
  });

  it('should render dog cards', () => {
    render(<Home />);
    expect(screen.getByText(/Simba/i)).toBeDefined();
    expect(screen.getByText(/Bardock/i)).toBeDefined();
    expect(screen.getByText(/Bulma/i)).toBeDefined();
  });

  it('should render testimonials', () => {
    render(<Home />);
    expect(screen.getByText(/Carlos Rodriguez/i)).toBeDefined();
    expect(screen.getByText(/Venezuela/i)).toBeDefined();
  });
});
