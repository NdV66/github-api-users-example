import { createContext, ReactNode, useState } from 'react';

export interface IStoreContext {
    username: string;
    setUsername: (username: string) => void;
}

export const StoreContext = createContext<Partial<IStoreContext>>({});

interface Props {
    children: ReactNode;
}

const StoreContextWrapper = ({ children }: Props) => {
    const [username, setUsername] = useState<string>('NdV66');

    const values = {
        username,
        setUsername,
    };

    return (
        <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
    );
};

export default StoreContextWrapper;
