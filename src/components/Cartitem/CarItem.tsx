import UseShopingCart from "../../context/ShoppingCartContext";
import StoreItem from "../../data/data.json";
import { Button, Stack } from "react-bootstrap";
import formatCurrency from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CarItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = UseShopingCart();
  const item = StoreItem.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CarItem;
