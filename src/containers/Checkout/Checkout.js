import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Checkout extends Component{

    checkoutCancelledHandler = () => {
        this.props.setAuthRedirectPath();
        this.props.history.replace('/');
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary = <Redirect to='/'/>
        if(this.props.ings){
            if(this.props.purchased) return summary
            summary = (
                <div>
                    <CheckoutSummary 
                        ingredients = {this.props.ings}
                        checkoutCancelled = {this.checkoutCancelledHandler}
                        checkoutContinue = {this.checkoutContinueHandler}/>
                    <Route path={this.props.match.path + '/contact-data'}
                           component={ContactData}/>
                </div>
            )
        }
        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);