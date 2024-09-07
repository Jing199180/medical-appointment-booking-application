import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";

import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import DoctorAppLayout from "./ui/DoctorAppLayout";
import PatientAppLayout from "./ui/PatientAppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    // staleTime: 60 * 1000,
    staleTime: 0,
    cacheTime: 1000,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <DoctorAppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="login" />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />

            <Route path="doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route element={<PatientAppLayout />}>
            <Route path="patient-dashboard" element={<PatientDashboard />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={24}
        containerStyle={{
          margin: "12px",
        }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 6000 },
          style: {
            fontSize: "16px",
            maxWidth: "600px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-50)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
