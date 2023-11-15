'use client'

import {useState} from 'react';
import AllProducts from "./AllProducts";
import AvailableProducts from "./AvailableProducts";

export default function Home() {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <main className="page-wrapper">
        <div className="bg-img" style={{ backgroundImage: "url('/bg-cafe.jpg')" }}></div>
        <div className="main-container relative md:mx-[200px] md:mb-[200px] -mt-[150px] mx-[8vw] rounded-xl px-6 py-24 md:py-24 md:px-28 bg-dark-gray text-center z-10 overflow-hidden text-body font-medium">
          
          <h1 className="page-title text-heading text-text font-semibold relative inline-block z-10">Our Collection</h1>
          <p className="page-description text-light-gray text-body mx-auto pt-3">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

          <div className="product-tabs text-label md:text-body text-text flex gap-4 items-center justify-center mt-8 mb-14">
            <button onClick={handleTab1} id className={`tab-title py-1 px-3 rounded-md ${activeTab === "tab1" && "bg-light-gray"}`}>All Products</button>
            <button onClick={handleTab2} className={`tab-title py-1 px-3 rounded-md ${activeTab === "tab2" && "bg-light-gray"}`}>Available Now</button>
          </div>

          <div className={activeTab === "tab1" ? "active" : "inactive"}>
            <AllProducts />
          </div>

          <div className={activeTab === "tab2" ? "active" : "inactive"}>
            <AvailableProducts />
          </div>

        </div>
    </main>
  )
}
