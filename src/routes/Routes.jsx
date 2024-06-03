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
import { StudentProvider } from "../context/studentsContext";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";
import { DonatorProvider } from "../context/donatorContext";

export function Router() {
  const clientLocal = new QueryClient()
  return (
    <QueryClientProvider client={clientLocal}>
      <ToastifyProvider>
        <UserProvider>
          <EmployeeProvider>
            <StudentProvider>
              <ProductProvider>
                <LockerProvider>
                  <DonatorProvider>

                    <ModalProvider>
                      <ToastContainer />
                      <Routes>
                        <Route element={<Layout />} path="/">
                          <Route
                            path="/"
                            element={
                              <ProtectRouter> 
                                <Home />
                              </ProtectRouter>
                            }
                          />

                          <Route
                            path="/estoque"
                            element={
                              <ProtectRouter>
                                <Stock />
                              </ProtectRouter>
                            }
                          />

                          <Route
                            path="/doacao"
                            element={
                              <ProtectRouter>
                                <Donate />
                              </ProtectRouter>
                            }
                          />
                          <Route
                            path="/config"
                            element={
                              <ProtectRouter>
                                <Donate />
                              </ProtectRouter>
                            }
                          />
                          <Route path="/gestao">

                            <Route
                              path="/gestao"
                              element={
                                <ProtectRouter>
                                  <Management />
                                </ProtectRouter>
                              }
                            />
                          </Route>

                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot" element={<ForgotPassword />} />
                    <Route path="/recuperar-senha/:token" element={<ResetPassword />} />
                  </Routes>
                </ModalProvider>
                  </DonatorProvider>
            </LockerProvider>
          </ProductProvider>
          </StudentProvider>
        </EmployeeProvider>
      </UserProvider>
      </ToastifyProvider>
    </QueryClientProvider>
  );
};
