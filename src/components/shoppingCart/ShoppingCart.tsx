import { Offcanvas, Stack } from "react-bootstrap";
import UseShopingCart from "../../context/ShoppingCartContext";
import CartItem from "../Cartitem/CarItem"
import formatCurrency from "../../utilities/formatCurrency";
import StoreItem from "../../data/data.json";

type TOpen = {
    isOpen:boolean
}
const ShoppingCart = ({isOpen}:TOpen) => {
    const {toggeld,cartItems}=UseShopingCart()
  return (
      <Offcanvas show={isOpen} onHide={toggeld}  placement="end" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Stack gap={3}>
                  
                  {cartItems.map(item => 
                      <CartItem key={item.id} {...item} />
          )}
          <div className="ms-auto fw-bold fs-5">

            {/* Total formatCurrency(cartItems.reduce((total, cartItem))=>{
                   const item = StoreItem.find((i) => i.id ===cartItem.id)
            return  total +(item?.||0)* cartItem.quanity
            },0)
            )} */}


            Total :{
              formatCurrency(
                     
                cartItems.reduce((total, cartItem) => {
                  const item = StoreItem.find(i => i.id === cartItem.id);
                  return total +(item?.price||0)*cartItem.quantity
 },0)

                   )}


          </div>
              </Stack>
          </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
