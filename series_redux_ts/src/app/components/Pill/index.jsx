import { useState } from 'react';
import styled from 'styled-components';

const Pill = styled.span`
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${props => props.active ? 'purple' : 'gray'};
    color: white;
    height: 20px;
    margin: 10px;
    cursor: pointer;
`;

export default ({ children, click, active = true }) => {
    const [state, setState] = useState(active)
    const handleClick = (e) => {
        click(e.target.innerHTML);
        setState(!state)
    }
    return <Pill onClick={handleClick} active={state}>{children}</Pill>
};