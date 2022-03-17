import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root {
  --color-blue:#0079FF;
  --color-blue-hover:#60ABFF;

  --font-size-heading-l: 26px;
  --font-size-heading-m: 22px;
  --font-size-heading-s: 16px;
  --font-size-heading-xs: 13px;

  --font-size-body: 15px;
 
  
  --line-height-header-l:38px;
  --line-height-header-m:33px;
  --line-height-header-s:24px;
  --line-height-header-xs:20px;
  --line-height-body:25px;


 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-body);
  background-color:${({ theme }) => theme.mainBg};
  font-family: 'Space Mono', monospace;
  min-height: 100vh;
  color: ${({ theme }) => theme.bodyPrimary};;
  padding: 2.4rem;
}
a {
  
  text-decoration: none;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

section {
  max-width: 73rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}

`;
