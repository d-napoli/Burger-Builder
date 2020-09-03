import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <br />
            <p>A burger with de following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <br/>
            <p>Continue to Checkout</p>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
        </Aux>
    );
};

export default orderSummary;