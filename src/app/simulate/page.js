"use client";

import React, { useState } from "react";
import api from "../../utils/api";

const Simulate = () => {
  const [vendorCount, setVendorCount] = useState("");
  const [consumerCount, setConsumerCount] = useState("");
  const [simulationOutput, setSimulationOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const startSimulation = async () => {
    if (!vendorCount || !consumerCount) {
      alert("Please enter both vendor and consumer counts.");
      return;
    }

    try {
      const output = await api.startSimulation(vendorCount, consumerCount);
      setSimulationOutput(`Simulation started with ${vendorCount} vendors and ${consumerCount} consumers.`);
      setIsRunning(true);
    } catch (error) {
      console.error(error);
      alert("Failed to start simulation.");
    }
  };

  const stopSimulation = async () => {
    try {
      const output = await api.stopSimulation();
      setSimulationOutput("Simulation stopped.");
      setIsRunning(false);
    } catch (error) {
      console.error(error);
      alert("Failed to stop simulation.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-3xl h-64 bg-black text-white rounded-md p-4 overflow-auto border border-gray-500 shadow-lg">
        <p className="text-sm font-mono">{simulationOutput}</p>
      </div>
      <div className="flex flex-col mt-8 gap-4 w-full max-w-md">
        <div className="flex flex-col">
          <label htmlFor="vendorCount" className="mb-2 text-gray-700">
            Vendor Count:
          </label>
          <input
            type="number"
            id="vendorCount"
            value={vendorCount}
            onChange={(e) => setVendorCount(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Enter number of vendors"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="consumerCount" className="mb-2 text-gray-700">
            Consumer Count:
          </label>
          <input
            type="number"
            id="consumerCount"
            value={consumerCount}
            onChange={(e) => setConsumerCount(e.target.value)}
            className="border border-gray-300 p-2 rounded"
            placeholder="Enter number of consumers"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={startSimulation}
          disabled={isRunning}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Start Simulation
        </button>
        <button
          onClick={stopSimulation}
          disabled={!isRunning}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Stop Simulation
        </button>
      </div>
    </div>
  );
};

export default Simulate;
