import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body{
    overflow-x:hidden;
}
`;
export { GlobalStyled };
