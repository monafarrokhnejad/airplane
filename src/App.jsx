import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ThemeCustomization from "./themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Loader from "./layouts/loader/Loader";
import { queryClient } from "./utilities/queryClient";

import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";

function App() {
  return (
    <ThemeCustomization>
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppProvider>
    </ThemeCustomization>
  );
}

export default App;
