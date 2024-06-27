import { useEffect, useState } from "react";
import { getAllProducts } from "../api";
import { toast } from "sonner";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// export default function ProductPage() {
//   const [count, setCount] = useState(0);
//   /* useEfect se usa cuando renderiza el componente o cuando alguna de sus dependecias cambian
//   Recibe dos parametros, un callback y un arreglo de dependencia (aunque este vacio, hay que ponerlo)
//   */

//   //   Este useEffect solo se renderízara cuando termine de renderízar el compoenente.
//   //   Si no tienen dependencias que cambie, solo se renderíza cuiando carga
//   useEffect(() => {
//     console.log("termino de renderizar");
//   }, []);

//   useEffect(() => {
//     console.log("use efect count", count);
//   }, [count]);
//   return (
//     <>
//       <h1>Esto es la pagina</h1>
//       <p>Todos los producytos</p>
//       <button onClick={() => setCount(count + 1)}>count: {count}</button>
//     </>
//   );
// }

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Deber Iniciar sesion para ver los productos");
      navigate("/login");
      return;
    }
    getAllProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        toast.error("error al obtener los productos");
        console.error("[getAllProducts error]", error);
      });
  }, []);
  return (
    <main>
      <h1 className="text-4xl font-semibold text-center">Productos</h1>
      <section className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, idx) => {
          return (
            <article
              key={`product-${idx}`}
              className="hover:bg-white/10 cursor-pointer rounded p-2 flex flex-col"
            >
              <img src={product.thumbnail} alt="" />
              <p className="text-center ">{product.title}</p>
              <Link
                to={`/productos/${product.id}`}
                className="bg-white/50  p-2 rounded mt-2 text-center"
              >
                Ver más
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
