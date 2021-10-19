import "./Products.css";
import productService from "../../services/productService";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className="container">
      <div className="row py-5">
        {productService.products.map((product, index) => {
          return (
            <div className="col-4">
              <div className="card">
                <img src={product.img} alt="product" />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name} - {product.price}
                  </h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/product/${index}`}>
                    <a className="btn btn-primary">Ver detalles</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Products;
