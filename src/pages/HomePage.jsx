import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-black text-lg">Home page</h1>
      <p>This is home page</p>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/productos/123">Prodcuto 123</Link>
      </div>
    </div>
  );
}
