import React , { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        if(this.props.isAuthenticated && this.props.building && this.props.authRedirectPath !== '/'){
            this.props.history.replace('/checkout');
        }
        else
            this.props.initIngredients();
    }

    checkPurchasableHandler = () => {
        const ingredients = {...this.props.ing};
        const sum = Object.keys(ingredients)
                            .map(igKey => ingredients[igKey])
                            .reduce((sum,el) => sum + el , 0);
        return sum > 0;
    }

    purchasingHandler = () => {
        if(this.props.isAuthenticated)
            this.setState({purchasing: true});
        else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    cancelPurchasingHandler = () => {
        this.setState({purchasing: false});
    }

    continuePurchasingHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render(){

        let disabledInfo = {
            ...this.props.ing
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.props.error? <p>Ingredients can't be loaded!</p> : <Spinner />;
        let orderSummary = null;
        if( this.props.ing){
            burger = (
                <React.Fragment>
                    <Burger ingredients={ this.props.ing}/>
                    <BuildControls
                        ingredientAdded = {this.props.onIngredientAdded}
                        ingredientRemoved = {this.props.onIngredientDeleted}
                        disabledInfo = {disabledInfo}
                        price = {this.props.totalPrice}
                        isAuth = {this.props.isAuthenticated}
                        purchasable = {this.checkPurchasableHandler()}
                        ordered = {this.purchasingHandler} />
                </React.Fragment>
            )
            orderSummary = (
                <OrderSummary 
                    ingredients = { this.props.ing}
                    canceled = {this.cancelPurchasingHandler}
                    continue = {this.continuePurchasingHandler}
                    price = {this.props.totalPrice} />
            );
        }

        if(this.state.loading){
            orderSummary = <Spinner />
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing}
                       clicked = {this.cancelPurchasingHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ing: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null,
        building: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => 
                    dispatch(actionCreators.addIngredient(ingredientName)),
        onIngredientDeleted: (ingredientName) => 
                    dispatch(actionCreators.removeIngredient(ingredientName)),
        initIngredients: () => dispatch(actionCreators.initIngredients()),
        onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actionCreators.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));