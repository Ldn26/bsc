"use client"; // Ensure the component is client-side

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ExplorePage = () => {
  const [selectedTab, setSelectedTab] = useState("Auberges");
  const [data, setData] = useState({
    Auberges: [],
    "Touristic places": [],
    "Touristic complexes": [],
    Transportation: [],
  });
  const [selectedCard, setSelectedCard] = useState(null); // State to control the selected card for the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  const tabs = ["Auberges", "Touristic places", "Touristic complexes", "Transportation"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // Fetch data based on the selected tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTab === "Auberges") {
          const response = await fetch("https://6764caf652b2a7619f5d7dc6.mockapi.io/cards");
          const result = await response.json();
          setData((prevData) => ({ ...prevData, Auberges: result }));
        } else if (selectedTab === "Touristic places") {
          const response = await fetch("https://6764caf652b2a7619f5d7dc6.mockapi.io/touristic");
          const result = await response.json();
          setData((prevData) => ({ ...prevData, "Touristic places": result }));
        }
        // Add other tabs if needed
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [selectedTab]); // Re-fetch data when the tab changes

  const cards = data[selectedTab] || [];

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedCard(null); // Clear selected card data
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <main className="mt-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Start Exploring</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg ${
                selectedTab === tab
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.length > 0 ? (
            cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)} // Trigger popup on card click
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <div className="p-4">
                  {selectedTab === "Auberges" ? (
                    <>
                      <img
                        src={card.imageUrl || "boumerdes13.png"} // Placeholder image URL
                        alt={card.title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-bold text-black text-xl mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                      <p className="text-teal-700 text-lg font-semibold">Price: {card.price} Da</p>
                    </>
                  ) : selectedTab === "Touristic places" ? (
                    <>
                      <img
                        src={card.imageUrl || "boum.svg"} // Placeholder image URL
                        alt={card.titre}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-bold text-black text-xl mb-2">{card.titre}</h3>
                      <p className="text-gray-600 text-sm mb-2">{card.descr}</p>
                      <p className="text-teal-700 text-lg font-semibold">Number: {card.numb}</p>
                    </>
                  ) : (
                    <p className="text-gray-500">No data available for this tab.</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No items available for this category.
            </p>
          )}
        </div>
      </main>

      {/* Popup */}
      {isPopupOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full h-[90%] relative" style={{ maxWidth: "100%", maxHeight: "90vh" }}>
            {/* Close button */}
            <button 
              onClick={closePopup} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <h1 className="font-bold text-3xl text-black-400 pt-0">{selectedTab}</h1>
            <div className="flex space-x-6">
              {/* Left side (Image) */}
              <img 
                src={selectedCard.imageUrl || "boumerdes13.png"} 
                alt="Example Image" 
                className="w-[40%] h-64 object-cover rounded-md"
              />
              {/* Right side (Text content) */}
              <div className="flex-1">
                <h3 className="font-bold text-teal-700 text-2xl mb-4">{selectedCard.title || selectedCard.titre}</h3>
                <p className="text-gray-600 text-sm mb-4">{selectedCard.description || selectedCard.descr}</p>
                <p className="text-gold-500 text-lg font-semibold mb-6">Price: {selectedCard.price || "N/A"} Da</p>
                <button className="bg-teal-700 text-white py-2 px-6 rounded-lg w-auto hover:bg-teal-800">
  Reserve
</button>
               
{selectedTab === "Auberges" && (
  <div className="flex space-x-4 mt-40 ml">
    <img
      src="boumerdes13.png"
      alt=""
      className="w-1/3 h-64 object-cover rounded-md"
    />
    <img
      src="boumerdes13.png"
      alt="Image 2"
      className="w-1/3 h-64 object-cover rounded-md"
    />
    <img
      src="boumerdes13.png"
      alt="Image 3"
      className="w-1/3 h-64 object-cover rounded-md"
    />
  </div>
)}

              </div>
            </div>

          </div>
        </div>
        
      )}
    </div>
  );
};

export default ExplorePage;
