import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/type">Lernen</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>

      <main>
        <Outlet />
      </main>
      <aside>
        <h3>Menu</h3>
        <h2>Hören</h2>
        <h2>Lesen</h2>
        <h2>Schreiben</h2>
        <h2>Sprechen</h2>
      </aside>
      <footer>&copy; Avebela</footer>
    </div>
  );
};

export { Layout };
