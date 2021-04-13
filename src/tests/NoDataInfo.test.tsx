import { render, screen } from '@testing-library/react';

import NoDataInfo from '../page/Main/NoDataInfo';

describe('NoDataInfo', () => {
    test('Should render correctly', () => {
        render(<NoDataInfo />);

        const footer = screen.getByText(
            'So empty... Type something in search bar :)'
        );
        expect(footer).toBeInTheDocument();
    });
});
