import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Management } from "../pages/Management";
import { Login } from "../pages/login";
import { UserProvider } from "../context/userContext";
import { ProtectRouter } from "../components/protectRouter/protectRouter";
import { ModalProvider } from "../context/modalContext";
import { ToastifyProvider } from "../context/toastifyContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Router() {
  return (
    <UserProvider>
      <ToastifyProvider>
        <ModalProvider>
          <ToastContainer />
          <Routes>
            <Route path="/login" element={<Login />} />
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
                  <Home />
                </ProtectRouter>
              }
            />

            <Route
              path="/doacao"
              element={
                <ProtectRouter>
                  <Home />
                </ProtectRouter>
              }
            />

            <Route
              path="/financeiro"
              element={
                <ProtectRouter>
                  <Home />
                </ProtectRouter>
              }
            />

            <Route
              path="/calendario"
              element={
                <ProtectRouter>
                  <Home />
                </ProtectRouter>
              }
            />

            <Route
              path="/historico"
              element={
                <ProtectRouter>
                  <Home />
                </ProtectRouter>
              }
            />

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
          </Routes>
        </ModalProvider>
      </ToastifyProvider>
    </UserProvider>
  );
};
