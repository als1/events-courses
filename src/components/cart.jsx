import React from 'react';

const Cart = (props) => {
    return (<nav className="navbar navbar-dark bg-dark">
    <div className="navbar-brand cart-container" href="#">
        <span>Total Registered Students: </span>
        <span className="badge badge-pill badge-info">{props.totalItems}</span>
    </div>
</nav>);
};

export default Cart;