"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Message from "@/components/Message";

const ExplorePage = () => {
  //
  console.log("AuthToken from local storage");
  console.log(localStorage.getItem("authToken"));
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", sender: "user", message: "hello" },
    { id: "2", sender: "ai", message: "Hey there!" },
  ]);
  const [loading, setLoading] = useState(false); // Loading state for AI response
  const scrollContainerRef = useRef(null); // Reference to the scrollable container

  const handleSendMessage = async () => {
    if (textInput.trim() === "") return; // Prevent sending empty messages

    // Add user's message
    setMessages((prev) => [
      ...prev,
      { id: `${prev.length + 1}`, sender: "user", message: textInput },
    ]);

    setTextInput(""); // Clear the input field

    // Show loading indicator for AI response
    setLoading(true);

    try {
      // Make API request to get AI response
      const response = await axios.post("https://smartcity-w5yq.onrender.com/resident/plan", {
        message: textInput,
      });

      // Add AI's response to messages
      setMessages((prev) => [
        ...prev,
        { id: `${prev.length + 1}`, sender: "ai", message: response.data.message },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { id: `${prev.length + 1}`, sender: "ai", message: "Error fetching AI response." },
      ]);
    } finally {
      setLoading(false); // Remove loading indicator
    }
  };

  const [selectedTab, setSelectedTab] = useState("Auberges");
  const [openchat, setopenchat] = useState(false);
  const [data, setData] = useState({
    Auberges: [],
    "Touristic places": [],
    "Touristic complexes": [],
    Transportation: [],
  });
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [filteredCards, setFilteredCards] = useState([]); // Cards filtered by search
  const [selectedCard, setSelectedCard] = useState(null); // State for selected card in popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

  useEffect(() => {
    // Scroll to the bottom of the container whenever messages or loading changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, loading]); // Trigger scroll when messages or loading changes

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (line break)
      handleSendMessage(); // Call the send message function
    }
  };

  const tabs = ["Auberges", "Touristic places", "Touristic complexes", "Transportation"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setSearchQuery(""); // Clear search query when changing tabs
  };

  // Fetch data for the selected tab
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedTab]); // Refetch data when the tab changes

  // Filter cards based on the search query
  useEffect(() => {
    const cards = data[selectedTab] || [];
    if (searchQuery.trim() === "") {
      setFilteredCards(cards); // No filter if the search query is empty
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = cards.filter(
        (card) =>
          (card.title && card.title.toLowerCase().includes(lowerCaseQuery)) ||
          (card.titre && card.titre.toLowerCase().includes(lowerCaseQuery)) ||
          (card.description && card.description.toLowerCase().includes(lowerCaseQuery)) ||
          (card.descr && card.descr.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredCards(filtered);
    }
  }, [searchQuery, data, selectedTab]);
  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card
    setIsPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedCard(null); // Clear selected card
  };

  return (
    <div className="min-h-screen relative bg-gray-100 p-6">
      <main className="mt-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Start Exploring</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

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
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
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
              No items match your search.
            </p>
          )}
        </div>
      </main>

      {/* Popup */}
      {isPopupOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="bg-white p-8 rounded-lg h-[90%] w-[50%] relative"
            style={{ maxWidth: "80%", maxHeight: "90vh" }}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <h1 className="font-bold text-3xl text-black-400 pt-0 pb-10">{selectedTab}</h1>
            <div className="flex space-x-6">
              <img
                src={selectedCard.imageUrl || "boumerdes13.png"}
                alt="Example Image"
                className="w-[40%] h-64 object-cover rounded-md mr-10"
              />
              <div className="flex-1 ml-30">
                <h3 className="font-bold text-teal-700 text-2xl mb-4">
                  {selectedCard.title || selectedCard.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{selectedCard.description || selectedCard.descr}</p>
                <p className="text-gold-500 text-lg font-semibold mb-6">
                  Price: {selectedCard.price || "N/A"} Da
                </p>

                {selectedTab === "Auberges" && (
                  <button className="bg-secendry text-white py-2 px-6 rounded-lg w-auto">
                    Reserve
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setopenchat(true)} className="fixed bottom-4 right-4 bg-teal-700 text-white p-4 rounded-full shadow-lg">
        <Image src="/chat.svg" alt="chat" width={50} height={50} />
      </button>
      {openchat && (
        <div
          style={{ scrollBehavior: "smooth" }}
          ref={scrollContainerRef} // Attach the ref to the scrollable container
          className="bb fixed bottom-4 bg-white right-0 z-40 w-[500px] rounded-2xl h-[500px] overflow-y-scroll flex flex-col"
        >
          <div className="relative w-full">
            <button onClick={() => { setopenchat(false) }} className="fixed text-2xl rounded-full font-bold right-4 text-white p-4 z-40 ">X </button>
            <h1 className="border p-4 bg-[#057876] text-white fixed w-full rounded-lg text-2xl font-bold">AI planner </h1>
          </div>
          {messages.map((msg, index) => (
            <Message
              key={index}
              user_id={msg.id}
              reciver={msg.sender === "ai"}
              sender={msg.sender}
              message={msg.message}
            />
          ))}

          {loading && (
            <Message
              user_id="loading"
              reciver={true}
              sender="ai"
              message="Typing..."
            />
          )}

          <div className="sticky bottom-4 px-2 mt-24">
            <div className="bg-gray-400 flex flex-row items-center rounded-xl py-4 w-full justify-between">
              <input
                placeholder="Chat with AI!"
                value={textInput}
                onKeyDown={handleKeyDown}
                onChange={(e) => setTextInput(e.target.value)}
                className={`w-11/12 text-white placeholder:text-white placeholder:text-xl text-xl bg-gray-400 pl-2 focus:outline-none`}
              />
              <button className="w-1/12" onClick={handleSendMessage}>
                <Image
                  src={"./arrow.svg"}
                  alt="arrow"
                  width={20}
                  height={20}
                  className="hover:w-6 transition-all duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;