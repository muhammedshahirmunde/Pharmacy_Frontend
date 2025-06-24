import { Outlet } from "react-router";
import MuiProvider from "../provider/MuiProvider";

/**Inject Providers */

function RootInjector() {
  return (
    <MuiProvider>
      <Outlet />
    </MuiProvider>
  );
}

export default RootInjector;
