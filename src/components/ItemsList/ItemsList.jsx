import React from 'react';
import itemsForCart from '../../items';

import { useSelector, useDispatch } from 'react-redux';
import { add, remove, clearAll } from '../ShoppingCart/shippingCarSlicer';

import classes from './ItemsList.module.css';

const ItemsList = () => {
    const dispatch = useDispatch();

    return (
        <div>
            {itemsForCart.map((item) => (
                <div className={classes.item} key={item.id}>
                    {item.name}

                    <button
                        onClick={() => dispatch(add(item))}
                        className={classes.btn}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => {
                            dispatch(remove(item.id));
                        }}
                        className={classes.btn}
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => {
                            dispatch(clearAll(item.id));
                        }}
                        className={classes.btn}
                    >
                        Reset
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemsList;
