import React, { useState} from "react";
function CartButton() {
    const [isincart, setisincart] = useState(false);
    const handlecart = () => {
        setisincart(prevValue => !prevValue); 
    };

    return(
        <div>
            <button onClick={handlecart}>
                {isincart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </div>
    );
}
export default CartButton;