import React from "react";
import AppRouter from "../components/AppRouter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function UserPage() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default UserPage;
