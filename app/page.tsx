import ProductList from "./components/ProductList";
import { productList } from "./productsList";

export default function Home() {
  return (
    <div className="p-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-20">ACP Demo Store</h1>
      <ProductList products={productList} />
    </div>
  );
}
