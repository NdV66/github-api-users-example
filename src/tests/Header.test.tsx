import { fireEvent, render, screen } from '@testing-library/react';

import Header from '../page/Header';
import { StoreContext } from '../store/context';

const USERNAME = 'userNameHere';

const setup = () => {
    render(<Header />);

    const input = screen.getByPlaceholderText('Search for users');
    return input as HTMLInputElement;
};

describe('Header', () => {
    test('Should render search button', () => {
        render(<Header />);

        expect(screen.getByText('Search')).toBeInTheDocument();
    });

    test('Should render input with placeholder', () => {
        const input = setup();
        expect(input).toBeInTheDocument();
    });

    test('Should change value on type', () => {
        const input = setup();
        fireEvent.change(input, { target: { value: USERNAME } });

        expect(input.value).toBe(USERNAME);
    });

    test('Should change username in context on click search button', () => {
        const setUsername = jest.fn();
        render(
            <StoreContext.Provider value={{ setUsername }}>
                <Header />
            </StoreContext.Provider>
        );

        const input = screen.getByPlaceholderText('Search for users');
        const button = screen.getByText('Search');
        fireEvent.change(input, { target: { value: USERNAME } });
        fireEvent.click(button);

        expect(setUsername).toHaveBeenCalled();
        expect(setUsername).toHaveBeenCalledWith(USERNAME);
    });
});
