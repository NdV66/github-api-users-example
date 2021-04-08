import { ChangeEvent, useContext, useState } from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';

import { StoreContext } from '../../store/context';
import style from './style.module.scss';

const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const store = useContext(StoreContext);
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onClick = () => store.setUsername && store.setUsername(inputValue);

    return (
        <div className={style.search}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder="Search for users"
                    onChange={onInputChange}
                />
            </InputGroup>

            <Button onClick={onClick}>Search</Button>
        </div>
    );
};

export default Header;
