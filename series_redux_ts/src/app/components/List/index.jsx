import styled from 'styled-components';

const List = styled.div`
    display: flex;
    width: 85%;
    flex-wrap: wrap;
    flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
    height: ${props => props.height ?? '90vh'};
    overflow-y: scroll;
    justify-content: ${props => props.justify !== undefined ? props.justify : 'center'};
    align-content: ${props => props.align !== undefined ? props.align : 'center'};
    padding: 10px 45px;
    margin: 0 10%;

    ::-webkit-scrollbar {
        width: 1px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: white;        /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
        background-color: blue;    /* color of the scroll thumb */
        border-radius: 40px;       /* roundness of the scroll thumb */
        border: 1px solid purple;  /* creates padding around scroll thumb */
    }
`;

export default List;