import React from 'react';
import classes from './Burgeringredients.classes';

const burgerIngredients = (props) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
    }

};

export default burgerIngredients;