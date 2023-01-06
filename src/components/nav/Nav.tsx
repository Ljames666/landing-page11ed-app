import { RiComputerLine, RiStackLine, RiCheckboxCircleLine } from 'react-icons/ri';
import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 15rem;
    width: 100%;
    background-color: #ebebf4;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .wrapper {
            color: #23a6d5;
            font-size: 5rem;
            transition: color 3s, font-size 2s;
            :hover {
                color: #e73c7e;
                font-size: 8rem;
            }
        }
        h2 {
            font-size: 2rem;
            color: #000000;
            font-weight: bold;
        }
        p {
            font-size: 1rem;
            color: #000000;
        }
    }
`;

function Nav() {
    return (
        <StyledNav>
            <div>
                <RiComputerLine className="wrapper" />
                <h2>Somente para desktop</h2>
                <p>Vamos aprender, como utilizar um framework.</p>
            </div>
            <div>
                <RiStackLine className="wrapper" />
                <h2>Criado com componentes</h2>
                <p>Utilizamos o Styled Components.</p>
            </div>
            <div>
                <RiCheckboxCircleLine className="wrapper" />
                <h2>Fácil aproveitamento</h2>
                <p>Estamos no caminho.</p>
            </div>
        </StyledNav>
    );
}

export default Nav;
