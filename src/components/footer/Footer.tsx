import styled from 'styled-components';
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';

const StyledFooter = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ebebf4;
    color: #fff;
    .icons {
        width: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #23a6d5;
        font-size: 1.8rem;
        .pointer {
            :hover {
                cursor: pointer;
            }
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        color: #23a6d5;
        span {
            :hover {
                cursor: pointer;
            }
        }
        p {
            font-size: 0.7rem;
            color: #626465;
        }
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <div className="container">
                <h4>
                    <span>About</span> . <span>Contact</span> . <span>Terms of Use</span> .{' '}
                    <span> Privatcy Policy</span>
                </h4>

                <p>&copy; your website 2022. All rights reserved</p>
            </div>
            <div className="icons">
                <RiFacebookCircleFill className="pointer" />
                <RiTwitterFill className="pointer" />
                <RiInstagramLine className="pointer" />
            </div>
        </StyledFooter>
    );
}
export default Footer;
