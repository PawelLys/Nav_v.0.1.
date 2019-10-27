import React from 'react';
import { connect } from 'react-redux';
import { setSettingBtnActive } from '../actions';

import * as s from './styledHeaderRight';

import { SwatchColorPicker } from 'office-ui-fabric-react/lib/SwatchColorPicker';

class HeaderRight extends React.Component {
    state = {
        color: undefined
    }

    /*
    componentDidUpdate() {
        if(this.props.settingBtn) 
            document.addEventListener('mousedown', this.handleClickOutside);
        else document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = node => {
        this.wrapperRef = node;
    }
    handleClickOutside = event => {
        if(this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.setSettingBtnActive(!this.props.settingBtn);
        };
    };
    */

    onCloseBtnClick = () => {
        this.props.setSettingBtnActive(!this.props.settingBtn);
    }

    render() {
        return(
            <s.HeaderRight show={this.props.settingBtn}>
                <s.HeaderContainer>
                    <s.ContainerTitle>
                        <s.Title>Settings</s.Title>
                        <s.CloseBtn iconName="Cancel" onClick={this.onCloseBtnClick}></s.CloseBtn>  
                    </s.ContainerTitle>
                    <div>
                        <s.ThemeTitle>Theme</s.ThemeTitle>
                        <SwatchColorPicker
                            columnCount={3}
                            cellHeight={60}
                            cellWidth={60}
                            selectedId={this.state.color}
                            cellShape={'square'}
                            colorCells={colorCells}
                            onColorChanged={(id, color) => this.setState({ color })}
                        />
                    </div>
                </s.HeaderContainer>
            </s.HeaderRight>
        )
    }
};

const colorCells = [
    { id: 'a', label: 'Default', color: 'rgb(60, 60, 60)' },
    { id: 'b', label: 'Blue', color: 'rgb(0, 81, 255)' },
    { id: 'c', label: 'white', color: '#ffffff' }
];

const mapStateToProps = ({ headerBtnActive }) => {
    return { settingBtn: headerBtnActive.settingBtn };
};

export default connect(mapStateToProps, { setSettingBtnActive })(HeaderRight);