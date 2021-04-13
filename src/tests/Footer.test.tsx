import { render, screen } from '@testing-library/react';

import Footer from '../page/Footer';

describe('Footer', () => {
    test('Should render correctly', () => {
        render(<Footer />);

        const footer = screen.getByText('Github API example, 2021');
        expect(footer).toBeInTheDocument();
    });
});
