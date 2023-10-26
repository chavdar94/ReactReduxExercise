import { useState } from 'react';

import Characters from '../SWAPI/Characters/Characters';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove, clearAll } from '../ShoppingCart/shippingCartSlicer';

import ItemForm from '../ShoppingCart/ItemForm';

import classes from './ItemsList.module.css';

const ItemsList = () => {
    const dispatch = useDispatch();
    const itemsForCart = useSelector((state) => state.cartFuncs.cartItems);

    const [toggleCharacters, setToggleCharacters] = useState(false);

    const loadCharactersHandler = () => {
        setToggleCharacters(!toggleCharacters);
    };

    return (
        <>
            <ItemForm />
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
            <button onClick={loadCharactersHandler} className={classes.btn}>
                Load characters
            </button>
            {toggleCharacters && <Characters />}
        </>
    );
};

export default ItemsList;
