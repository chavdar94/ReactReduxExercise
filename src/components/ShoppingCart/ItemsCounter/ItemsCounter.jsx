import React from 'react';

import classes from './ItemsCounter.module.css';

const ItemsCounter = ({ count }) => {
    return <p className={classes.counter}>{count}</p>;
};

export default ItemsCounter;
