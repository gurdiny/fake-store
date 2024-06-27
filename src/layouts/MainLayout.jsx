import { Link, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: "/", label: "Home", outhRequired: false },
  { to: "/productos", label: "Productos", outhRequired: true },
  { to: "/login", label: "Login", outhRequired: false },
];

export default function MainLayout() {
  const isAuth = !!localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <main className="h-full min-h-dvh">
      <nav className="bg-white/50 flex flex-row justify-around text-lg font-semibold">
        {links.map((link) => {
          if (link.outhRequired && !isAuth) return null;
          if (isAuth && link.to === "/login") return null;
          return (
            <Link
              key={`link-${link.to}`}
              to={link.to}
              className="hover:bg-black/50 w-full h-full text-center  p-4"
            >
              {link.label}
            </Link>
          );
        })}
        {isAuth && (
          <button
            onClick={handleLogout}
            className="hover:bg-black/50 w-full h-full text-center  p-4"
          >
            salir
          </button>
        )}
      </nav>
      <Outlet />
      <footer className="bg-white h-[100px]">Este es el Footer</footer>
    </main>
  );
}
