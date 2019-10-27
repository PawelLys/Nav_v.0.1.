import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Header = styled.header`
    background-color: ${props => props.theme.mainThemeColor};
    color: ${props => props.theme.mainFontColor};
    width: 100vw;
    min-height: 3rem;
    display: flex;
    justify-content: space-between;
`;

export const HeaderLeftPart = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 2rem;
    height: 2rem;
    padding: .5rem;
    margin-left: .1rem;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.hoverThemeColor};
    }
`;

export const HeaderRightPart = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const settingIcon = styled(Icon)`
    font-size: 1.4rem;
    margin-right: .3rem;
    padding: .5em .8em;
    cursor: pointer;
    user-select: none;
    transition: all .2s;

    :hover {
        background-color: ${props => props.theme.hoverThemeColor};
    }

    ${props => props.active && css`
        background: linear-gradient(to top, rgb(120, 120, 120, 0.9), rgb(120, 120, 120, 0));`
    }
`;

export const LoginBtn = styled(Link)`
    color: inherit;
    text-decoration: none;
    background-color: rgb(0, 113, 206);
    font-size: 1.2rem;
    padding: .7rem 1.8rem;
    margin-right: .1rem;
    border-radius: 3px;
    transition: all .2s;

    :hover, :active {
        background-color: rgb(0, 140, 255);
    }
`;
