import styled from 'styled-components';
import eye from '../../assets/eye-solid.svg';
import eyeSleep from '../../assets/eye-slash-solid.svg'

const Image = styled.img`
    width: 35px;
    margin: 6px;

`;

const Body = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export default ({ title, categories, watched }) => {
    return <Body>
        <div><div>{title}</div> {watched ? <Image src={eye} /> : <Image src={eyeSleep} />}</div>
        {
            categories.map(item => <span>{item}</span>)
        }
    </Body>
}