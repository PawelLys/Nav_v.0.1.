import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const HeaderLeft = styled.div`
    position: fixed;
    left: 0;
    background-color: ${props => props.theme.secondaryThemeColor};
    min-height: calc(100vh - 3rem);
    width: 3.2rem;
    transition: width .2s;

    ${props => props.openBurger && css`
        width: 13rem;`
    }
`;
export const NavBurger = styled.div`
    padding: 1.5rem .6rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s;

    :hover {
        background-color: ${props => props.theme.secondaryHoverThemeColor};
    }
`;

export const Burger = styled.div`
    position: relative;
    width: 1.7rem;
    height: 2px;
    background-color: #fff;
    transition: all .2s;

    ::before {
        content: '';
        position: absolute;
        top: -6.4px;
        width: 1.7rem;
        height: 2px;
        background-color: #fff;
        transition: all .2s;

        ${props => props.openBurger && css`
            transform: rotate(45deg) translate(.45rem, .15rem);
            margin-left: -.3rem;`
        }
    } 

    ::after {
        content: '';
        position: absolute;
        top: 6px;
        width: 1.7rem;
        height: 2px;
        background-color: #fff;
        transition: all .2s;

        ${props => props.openBurger && css`
            transform: rotate(-45deg) translate(.4rem, -.12rem);
            margin-left: -.3rem;`
        }
    } 

    ${props => props.openBurger && css`
        transform: rotate(360deg);
        background: transparent;`
    }
`;

export const Nav = styled.nav`
    color: ${props => props.theme.thirdaryFontColor};
    display: grid;
    grid-template-columns: 11rem;
    grid-gap: .3rem;
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
`;

export const NavElement = styled(Link)`
    text-decoration: none;
    color: inherit;
    transition: background-color .2s;
    display: flex;
    align-items: center;
    padding-right: 1rem;

    :hover {
        background-color: ${props => props.show === 'true' && props.theme.thirdaryThemeColor};
        color: #fff;
    }
`;

export const NavIcons = styled(Icon)`
    font-size: 1.2rem;
    margin-right: .3rem;
    padding: .5em .8em;
    transition: background-color .2s;

    :hover {
        background-color: ${props => props.theme.thirdaryThemeColor};
        color: #fff;
    }
`;

export const NavTitle = styled.div`
    text-transform: capitalize;
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
    transform: translateX(-60%);

    ${props => props.show && css`
        transform: translateX(0%);
        opacity: 1;
        visibility: visible;`
    }
`;

export const IconContainer = styled.div`
    cursor: pointer;
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all .2s;

    ${props => props.show && css`
        transform: translateX(15%);
        opacity: 1;
        visibility: visible;`
    }

    :hover {
        background-color: ${props => props.theme.thirdaryThemeColor};
        color: #fff;
    }
`;

export const ArrowIcon = styled(NavIcons)`
    margin-right: 0;
    pointer-events: none;
    transition: transform .2s;
    
    ${props => props.rotate && css`
        transform: rotate(180deg);`
    }
`;

export const NavUnderTitle = styled.ul`
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
`;

export const UnderItems = styled.li`
    display: flex;
    justify-content: flex-end;
`;

export const ItemsLink = styled(Link)`
text-decoration: none;
color: inherit;
text-transform: capitalize;
font-size: .9rem;
padding: .4em .8em;
transition: background-color .2s;

:hover {
    background-color: ${props => props.theme.thirdaryThemeColor};
    color: #fff;
}
`;