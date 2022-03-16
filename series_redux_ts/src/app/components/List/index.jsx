import styled from 'styled-components';

const List = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    height: ${props => props.height ?? '255px'};
    overflow-y: scroll;
    padding: 10px;
`;

export default List;