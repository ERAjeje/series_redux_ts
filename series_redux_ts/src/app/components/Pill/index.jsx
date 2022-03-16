import { useState } from 'react';
import styled from 'styled-components';

const Pill = styled.span`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${props => props.active ? 'purple' : 'gray'};
    color: white;
    height: 20px;
    margin: 10px;
`;

export default ({ children, click, active: boolean }) => {
    const [active, setActive] = useState(true)
    const handleClick = () => {
        click();
        setActive(!active)
    }
    return <Pill onClick={handleClick} active={active}>{children}</Pill>
};