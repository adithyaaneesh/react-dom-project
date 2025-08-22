import { useParams } from "react-router-dom";
import { productList } from "../data/Shop";
import '../styles/ProductView.css'


const ProductView = ({ data}) => {
const { id } = useParams();
const product = productList.find((p) => p.id === parseInt(id));

if (!product) {
    return <h2>Product not found</h2>;
}
    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...data, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

    };
  return (
    <section>
        <div className="container product-view">
            <div className="product-details">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product-details-image"
                />
                <div className="product-details-info">
                    <h2>{product.title}</h2>

                    {product.status === 'Sale' && product.salePrice ? (
                    <p className="price">
                        <span className="old-price">${product.price.toFixed(2)}</span>
                        <span className="sale-price">${product.salePrice.toFixed(2)}</span>
                    </p>
                    ) : (
                    <p className="price">${product.price.toFixed(2)}</p>
                    )}
                    {product.description && <p className="description">{product.description}</p>}

                    <button className="add-to-cart"onClick={() => handleAddToCart(data)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
  );
};


export default ProductView;

