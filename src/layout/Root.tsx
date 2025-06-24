import { Outlet } from "react-router";

function Root() {
  return (
    <main>
      <nav>
        <h1 className="bg-black text-white justify-center flex">Drugs</h1>
      </nav>
      <Outlet />
    </main>
  );
}

export default Root;
