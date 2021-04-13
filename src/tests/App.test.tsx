import { render, screen } from '@testing-library/react';

import App from '../page/App';

describe('App', () => {
    test('Should render all document elements', () => {
        render(<App />);

        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('main')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
