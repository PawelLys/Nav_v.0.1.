import React from 'react';
import { connect } from 'react-redux';
import { setBurgerBtnActive } from '../actions';


import * as s from './styledHeaderLeft';

class HeaderLeft extends React.Component {
    state = {
        navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items')),
        resetNavArrow: false
    }

    componentDidUpdate() {
        if(!this.props.burgerBtn && this.state.resetNavArrow) 
            this.setState({ 
                navArrow: Object.values(this.props.elements).map(el => !el.hasOwnProperty('items')),
                resetNavArrow: false 
            });
    }

    onBurgerBtnClick = () => {
        this.props.setBurgerBtnActive(!this.props.burgerBtn);
    }

    onNavArrowClick = id => {
        const arr = this.state.navArrow.map((el, index) => id === index ? !el : el);

        this.setState({ navArrow: arr, resetNavArrow: true });
    }

    render() {
        const { elements, burgerBtn } = this.props;
        const arrFromObj = Object.values(elements);
        const iconsArr = [
            'PeopleAdd',
            'OpenEnrollment',
            'DocumentManagement',
            'BarChartVerticalFill',
            'Toolbox'
        ];
        const arrWithUrls = Object.values(elements).map(el => {
            return Object.values(el).map(el => {
                return Object.values(el)
            });
        });

        return(
        <s.HeaderLeft openBurger={burgerBtn}>
            <s.NavBurger onClick={this.onBurgerBtnClick}
                openBurger={burgerBtn}
            >
                <s.Burger openBurger={burgerBtn} />
            </s.NavBurger>
            
            <s.Nav>
                {Object.keys(elements).map((title, index) => {
                    return(
                        <React.Fragment key={index}>
                            <s.NavWrapper>
                                <s.NavElement 
                                    to={arrFromObj[index].url} 
                                    show={burgerBtn.toString()}
                                >
                                    <s.NavIcons iconName={iconsArr[index]} />

                                    <s.NavTitle show={burgerBtn}>{title.replace('_', ' ')}</s.NavTitle>
                                </s.NavElement>

                                {
                                    arrFromObj[index].items && 
                                        <s.IconContainer id={index} show={burgerBtn}
                                            onClick={event => this.onNavArrowClick(parseInt(event.target.id))}
                                        >
                                            <s.ArrowIcon iconName="ChevronUpMed" rotate={this.state.navArrow[index]}/>
                                        </s.IconContainer>
                                }
                            </s.NavWrapper>

                            {
                                this.state.navArrow[index] && 
                                arrFromObj[index].hasOwnProperty('items') &&
                                    <s.NavUnderTitle show={burgerBtn.toString()}>
                                        {
                                            Object.keys(arrFromObj[index].items).map((item, num) => {
                                                return(
                                                    <s.UnderItems key={num}>
                                                        <s.ItemsLink to={arrWithUrls[index][1][num].url}>
                                                            {item}
                                                        </s.ItemsLink>
                                                    </s.UnderItems>
                                                );
                                            })
                                        }
                                    </s.NavUnderTitle>
                            }
                        </React.Fragment>
                    )
                })}
            </s.Nav>
        </s.HeaderLeft>
        )
    }
};

const mapStateToProps = ({ headerBtnActive }) => {
    return { burgerBtn: headerBtnActive.burgerBtn };
};

export default connect(mapStateToProps, { setBurgerBtnActive })(HeaderLeft);