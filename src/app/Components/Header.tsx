import NavLink from "./NavLink";
import AuthButton from "./AuthButton";

const navItems = [
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/products/categories" },
];

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <NavLink
          href="/"
          label={
            <span className="flex items-center gap-2 logo">
              <div className="logo-symbol text-xl font-bold bg-black text-white px-2 py-1 rounded"></div>
              <span className="text-lg font-semibold">Ehab E-Commerce</span>
            </span>
          }
          className="logo"
        />

        <div className="nav-items flex items-center gap-4">
          {navItems.map(({ name, path }) => (
            <NavLink key={name} href={path} label={name} />
          ))}
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}
