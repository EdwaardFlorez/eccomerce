import { useParams } from "react-router";
import productService from "../../services/productService";

function Product() {
  const id = useParams().id;
  const product = productService.getProduct(id);
  return (
    <div class="container py-5">
      <div class="row">
        <div class="col-4">
          <div class="card">
            <img src={product.img} alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                {product.name} - {product.price}
              </h5>
              <p class="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
