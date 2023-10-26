import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addItem } from './shippingCartSlicer';
import classes from '../ItemsList/ItemsList.module.css';

const ItemForm = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');

    const addItemHandler = (e) => {
        setItemName(e.target.value);
    };

    const submitItem = (e) => {
        e.preventDefault();
        if (itemName) {
            dispatch(addItem(itemName));
            setItemName('');
        }
    };

    console.log(itemName);

    return (
        <form style={{ marginBottom: '25px' }} onSubmit={submitItem}>
            <label htmlFor='itemName'>Item Name:</label>
            <input
                type='text'
                id='itemName'
                value={itemName}
                onChange={addItemHandler}
            />
            <button className={classes.btn}>Add new item</button>
        </form>
    );
};

export default ItemForm;
