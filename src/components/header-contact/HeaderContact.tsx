import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';

type SProps = {
    height: string | number;
    size: string | number;
};
type Props = {
    height: string | number;
    size: string | number;
    text: string;
};

const StyledHeader = styled.div<SProps>`
    height: ${(props) => props.height};
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: ${(props) => props.size};
    }
`;

function HeaderContact(props: Props) {
    return (
        <StyledHeader height={props.height} size={props.size}>
            <p>{props.text}</p>
        </StyledHeader>
    );
}
export default HeaderContact;
