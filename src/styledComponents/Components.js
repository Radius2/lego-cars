import styled from 'styled-components';


export const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
${({type, contrast, theme}) => type ? `
  color:${theme.color[type].text};
  background:${theme.color[type][contrast || 'main']};`
    : null
}
${({width}) => width ?
    `min-width:${width}` : null}

`