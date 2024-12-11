"use client";

import React, { useState } from "react";
import api from "../../utils/api";

const TicketingForm = () => {
  const [inputs, setInputs] = useState({
    maxCapacity: "",
    retrievalRate: "",
    releaseRate: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.saveConfiguration({
        maxTicketCapacity: inputs.maxCapacity,
        customerRetrievalRate: inputs.retrievalRate,
        ticketReleaseRate: inputs.releaseRate,
      });
      alert("Configuration saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadConfiguration = async () => {
    setIsLoading(true);
    try {
      const data = await api.fetchConfiguration();
      setInputs({
        maxCapacity: data.maxTicketCapacity || "",
        retrievalRate: data.customerRetrievalRate || "",
        releaseRate: data.ticketReleaseRate || "",
      });
      alert("Configuration loaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to load configuration.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Set Configuration</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md">
        <div>
          <label>Max Ticket Capacity:</label>
          <input
            type="number"
            name="maxCapacity"
            value={inputs.maxCapacity}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div>
          <label>Customer Retrieval Rate:</label>
          <input
            type="number"
            name="retrievalRate"
            value={inputs.retrievalRate}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div>
          <label>Ticket Release Rate:</label>
          <input
            type="number"
            name="releaseRate"
            value={inputs.releaseRate}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {isLoading ? "Saving..." : "Save Configuration"}
          </button>
          <button
            type="button"
            onClick={loadConfiguration}
            disabled={isLoading}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            {isLoading ? "Loading..." : "Load Configuration"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketingForm;
