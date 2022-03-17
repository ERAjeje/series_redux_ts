import styled from 'styled-components';
import eye from '../../assets/eye-solid.svg';
import eyeSleep from '../../assets/eye-slash-solid.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeSerie } from '../../features/serie/serieSlice';

const Image = styled.img`
    width: 35px;
    margin: 6px;
    cursor: pointer;
`;

const Category = styled.span`
    margin: 5px;
    font-size: 15px;
`;

const Body = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    width: 150px;
    margin: 5px;
    flex-wrap: wrap;
    justify-content: inherit;
    align-content: inherit;
`;

export default ({ title, categories, watched }) => {
    const serie = useSelector(state => state.series.series);
    const dispatch = useDispatch();
    const handleClick = () => dispatch(changeSerie({ title, value: !watched }))

    return <Body>
        <Container>{title}</Container>
        <Container>{watched ? <Image onClick={handleClick} src={eye} /> : <Image onClick={handleClick} src={eyeSleep} />}</Container>
        <Container>
            {
                categories.map(item => <Category>{item}</Category>)
            }
        </Container>
    </Body>
}