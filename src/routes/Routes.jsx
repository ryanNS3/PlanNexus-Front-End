import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Management } from "../pages/Management";
import { Login } from "../pages/login";
import { UserProvider } from "../context/userContext";
import { ProtectRouter } from "../components/protectRouter/protectRouter";
import { ModalProvider } from "../context/modalContext";
import { ToastifyProvider } from "../context/toastifyContext";
import { ToastContainer, toast } from 'react-toastify';
import { EmployeeProvider } from "../context/Employee";
import 'react-toastify/dist/ReactToastify.css';
import { Stock } from "../pages/Stock";
import { Layout } from "../Layout/Layout";
import { LockerProvider } from "../context/lockerContext";
import { ProductProvider } from "../context/ProductContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Donate } from "../pages/Donate"


export function Router() {
  const clientLocal = new QueryClient()
  return (
    <QueryClientProvider client={clientLocal}>
      <ToastifyProvider>
      <UserProvider>
        <EmployeeProvider>
          <ProductProvider>
            <LockerProvider>
                <ModalProvider>
                  <ToastContainer />
                  <Routes>
                    <Route element={<Layout />} path="/">
                      <Route
                        path="/"
                        element={
                          // <ProtectRouter>
                          <Home />
                          // </ProtectRouter>
                        }
                      />

                      <Route
                        path="/estoque"
                        element={
                          // <ProtectRouter>
                          <Stock />
                          // </ProtectRouter>
                        }
                      />

                      <Route
                        path="/doacao"
                        element={
                          // <>
                            <Donate />
                          // </>
                        }
                      />

                      <Route
                        path="/financeiro"
                        element={
                          // <ProtectRouter>
                            <Home />
                          // </ProtectRouter>
                        }
                      />

                      <Route
                        path="/calendario"
                        element={
                          // <ProtectRouter>
                            <Home />
                          // </ProtectRouter>
                        }
                      />

                      <Route
                        path="/historico"
                        element={
                          // <ProtectRouter>
                            <Home />
                          // </ProtectRouter>
                        }
                      />
                      <Route path="/gestao">

                        <Route
                          path="/gestao"
                          element={
                            <Management />
                            // <ProtectRouter>
                            // </ProtectRouter>
                          }
                        />

                        <Route
                          path="/gestao/turmas"
                          element={
                            <Management />
                            // <ProtectRouter>
                            // </ProtectRouter>
                          }
                        />
                        <Route
                          path="/gestao/funcionarios"
                          element={
                            <Management />
                            // <ProtectRouter>
                            // </ProtectRouter>
                          }
                        />
                      </Route>

                    </Route>
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </ModalProvider>
            </LockerProvider>
          </ProductProvider>
        </EmployeeProvider>
      </UserProvider>
      </ToastifyProvider>
    </QueryClientProvider>
  );
};
