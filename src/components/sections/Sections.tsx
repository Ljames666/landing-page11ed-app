import styled from 'styled-components';

interface IStyleProps {
    reverse: boolean;
}

interface ISectionProps extends IStyleProps {
    text: string;
    url: string;
    alt?: string;
}

const StyledSections = styled.div<IStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    height: 50vh;
    width: 100vw;

    div {
        height: 100%;
        width: 50%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .text-center {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: 5px;
        width: 50%;
    }
`;

function Sections(props: ISectionProps) {
    return (
        <StyledSections reverse={props.reverse}>
            <div className="text-center">
                <p>{props.text}</p>
            </div>
            <div>
                <img src={props.url} alt={props.alt ? props.alt : 'image'} />
            </div>
        </StyledSections>
    );
}

export default Sections;
