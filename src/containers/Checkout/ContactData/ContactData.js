import React , { Component } from 'react';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../../store/actions';
import { updateObject, checkValidity } from '../../../shared/utility'


class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street:{
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest' , displayValue: 'Fastest'},
                        {value: 'cheapest' , displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                valid: true,
                validation: {}
            }
        },
        formIsValid: false
    }



    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        } 
        const order = {
            ingredients: this.props.ings,
            price : this.props.totalPrice,
            order: formData,
            userId: this.props.userId
        }
        this.props.onOrderHandler(order, this.props.token);
    }

    inputChangedHandler(event, inputIdentifier){
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            touched: true,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation)
        });
        const updatedOrderForm = updateObject(this.state.orderForm, { [inputIdentifier]: updatedFormElement });
        let formIsValid = true;
        for(let inp in updatedOrderForm){
            formIsValid = formIsValid && updatedOrderForm[inp].valid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render(){

        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(ele => (
                    <Input 
                        key={ele.id}
                        elementType={ele.config.elementType} 
                        elementConfig={ele.config.elementConfig}
                        value={ele.config.value}
                        invalid = {!ele.config.valid}   
                        shouldValidate = {ele.config.validation}
                        touched = {ele.config.touched}
                        changed = {(event) => this.inputChangedHandler(event, ele.id)} />
                ))}
                <Button btnType = 'Success' disabled={!this.state.formIsValid}>ORDER NOW</Button>
            </form>
        );
        if(this.props.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderHandler : (orderData, token) => dispatch(actionCreators.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));