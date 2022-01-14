import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Utilities/Context/AuthProvider";
import AddService from "./Utilities/Pages/AdminDashboard/AddService/AddService";
import AdminDashboard from "./Utilities/Pages/AdminDashboard/AdminDashboard";
import MakeAdmin from "./Utilities/Pages/AdminDashboard/MakeAdmin/MakeAdmin";
import OrderList from "./Utilities/Pages/AdminDashboard/OrderList/OrderList";
import ContactUs from "./Utilities/Pages/ContactUs/ContactUs";
import Home from "./Utilities/Pages/Home/Home/Home";
import Login from "./Utilities/Pages/Login/Login/Login";
import Register from "./Utilities/Pages/Login/Register/Register";
import PrivateRoute from "./Utilities/Pages/PrivateRoute/PrivateRoute";
import Navbar from "./Utilities/Pages/Shared/Navbar/Navbar";
import Services from "./Utilities/Pages/Shared/Navbar/Services/Services";
import Book from "./Utilities/Pages/UserDashboard/Book/Book";
import BookingList from "./Utilities/Pages/UserDashboard/BookingList/BookingList";
import Review from "./Utilities/Pages/UserDashboard/Review/Review";
import UserDashboard from "./Utilities/Pages/UserDashboard/UserDashboard/UserDashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/portfolio"
              element={
                <>
                  <Navbar />
                  <Services showAll={true} />
                </>
              }
            />
            <Route
              path="/teams"
              element={
                <>
                  <Navbar />
                  <h2 className="mt-28">Will be update soon</h2>
                </>
              }
            />
            <Route path="/services" element={<Services showAll={true} />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute redirectTo="/login">
                  <UserDashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Book />} />
              <Route path="booking-list" element={<BookingList />} />
              <Route path="review" element={<Review />} />
            </Route>
            {/* admin dashboard */}
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute redirectTo="/login">
                  <AdminDashboard />
                </PrivateRoute>
              }
            >
              <Route path="/admin-dashboard" element={<OrderList />} />
              <Route path="add-service" element={<AddService />} />
              <Route path="make-admin" element={<MakeAdmin />} />
              <Route path="manage-service" element={<h1> Manage service</h1>} />
            </Route>
            {/* <Route path="/dashboard/*" element={<UserDashboard />} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
