import { render, screen } from '@testing-library/react';
import App from './App';

// test if the app there is heading of Bookeeper App
test('render app with title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Bookeeper App/i);
    expect(titleElement).toBeInTheDocument();
});