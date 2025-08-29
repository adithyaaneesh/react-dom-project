import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Faq from './components/Faq';
import Gift from './components/Gift';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import Error from './components/Error';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import ProtectedRoutes from './hooks/useProtectedRoutes';
import User from './components/User';
import React, { Suspense } from 'react';
import LazyLoader from './data/LazyLoader';
import ErrorBoundary from './data/ErrorBoundary';
import ProductView from './components/ProductView';
import PublicLayout from './layout/PublicLayout';
import AuthLayout from './layout/AuthLayout';
import AdminLayout from './layout/AdminLayout';
import DashboardPage from './pages/admin/Dashboard';
import Report from './pages/admin/Report';
import CustomerManagement from './pages/admin/CustomerManagement';
import AdminLogin from './components/AdminLogin';
import { AuthProvider } from './context/AuthContext';
import AddProducts from './pages/admin/AddProducts';
// import OrderDetails from './pages/admin/OrderDetails';
import OrderList from './pages/admin/OrderList';
import ProductList from './pages/admin/ProductsManagement';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<LazyLoader />}>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product-view/:id" element={<ProductView />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/user" element={<User />} />
              </Route>

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route element={<ProtectedRoutes adminOnly={true} />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<DashboardPage />} />
                  <Route path="/admin/products" element={<ProductList />} />
                  <Route path="/admin/products/add" element={<AddProducts />} />
                  {/* <Route path="/admin/orders/details" element={<OrderDetails />} /> */}
                  <Route path="/admin/orders" element={<OrderList />} />
                  {/* <Route path="/admin/order" element={<OrderManagement />} /> */}
                  <Route path="/admin/customer" element={<CustomerManagement />} />
                  <Route path="/admin/analytics" element={<Report />} />
                </Route>
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

