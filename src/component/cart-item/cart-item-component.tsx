import { FC, memo } from "react";

import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemPropos = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemPropos> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
