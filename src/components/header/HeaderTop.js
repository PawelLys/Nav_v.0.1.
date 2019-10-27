import React from 'react';
import { connect } from 'react-redux';

import { setSettingBtnActive } from '../actions';
import * as s from './styledHeaderTop';

import Logo from '../../assets/logo.png';

const HeaderTop = ({ setSettingBtnActive, settingBtn }) => {
    //const [openBurger, setOpenBurger] = useState(true);

    return(
        <s.Header>
            <s.HeaderLeftPart>
                <s.Image src={Logo} alt="logo" />
            </s.HeaderLeftPart>

            <s.HeaderRightPart>
                <s.settingIcon iconName="Search" />
                <s.settingIcon iconName="Settings" 
                    onClick={() => setSettingBtnActive(!settingBtn)} 
                    active={settingBtn}
                />

                <s.LoginBtn to="#">Sign in</s.LoginBtn>
            </s.HeaderRightPart>
        </s.Header>
    );
};

const mapStateToProps = ({ headerBtnActive }) => {
    return { settingBtn: headerBtnActive.settingBtn };
};

export default connect(mapStateToProps, { setSettingBtnActive })(HeaderTop);