import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ItemsCounter from './ItemsCounter/ItemsCounter';
import classes from './ShoppingCart.module.css';

const ShoppingCart = () => {
    const count = useSelector((state) => state.cartFuncs.items.length);
    const cartItems = useSelector((state) => state.cartFuncs.items);

    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    useEffect(() => {
        if (count === 0) {
            setShowCart(false);
        }
    }, [cartItems]);

    return (
        <>
            <div onClick={toggleCart} className={classes.cart}>
                <i className='fa-solid fa-cart-shopping fa-2xl'></i>
            </div>
            {count ? <ItemsCounter count={count} /> : ''}
            {showCart && count > 0 && (
                <div className={classes.cartContent}>
                    <ul className={classes['cart-list']}>
                        {cartItems.map((item) => (
                            <p className={classes['cart-item']} key={item.id}>
                                {item.name}
                            </p>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
