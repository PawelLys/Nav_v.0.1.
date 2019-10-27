import styled, { css } from 'styled-components';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const HeaderRight = styled.div`
    position: fixed;
    right: 0;
    background-color: ${props => props.theme.secondaryThemeColor};
    color: ${props => props.theme.secondaryFontColor};
    height: calc(100vh - 3rem);
    width: 16rem;
    transform: translateX(100%);
    transition: all .2s;

    ${props => props.openBurger && css`
        width: 12.9rem;`
    }

    ${props => props.show && css`
        transform: translateX(0%);`
    }
`;

export const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 1.5em;
    display: grid;
    grid-row-gap: 1em;
`;

export const ContainerTitle = styled.div`
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h3`
    margin: 0;
    font-weight: 400;
    letter-spacing: .2px;
`;

export const CloseBtn = styled(Icon)`
    padding: .1em .4em;
    cursor: pointer;
    transition: all .2s;

    :hover {
        background-color: ${props => props.theme.secondaryHoverThemeColor};
        color: #fff;
    }
`;

export const ThemeTitle = styled.h4`
    margin: 0;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: .1px;
`;