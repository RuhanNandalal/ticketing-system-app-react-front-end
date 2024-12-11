const BASE_URL = "http://localhost:8080";

const api = {
    fetchConfiguration: async () => {
        const response = await fetch(`${BASE_URL}/api/ticketing/current`);
        if (!response.ok) {
            throw new Error("Failed to fetch configuration");
        }
        return response.json();
    },
    saveConfiguration: async (config) => {
        const response = await fetch(`${BASE_URL}/api/ticketing/configuration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(config),
        });
        if (!response.ok) {
            throw new Error("Failed to save configuration");
        }
        return response.json();
    },
    startSimulation: async (vendorCount, consumerCount) => {
        const params = new URLSearchParams({ vendorCount, consumerCount }).toString();
        const response = await fetch(`${BASE_URL}/api/ticketing/start?${params}`, { method: "POST" });
        if (!response.ok) {
            throw new Error("Failed to start simulation");
        }
        return response.text();
    },
    stopSimulation: async () => {
        const response = await fetch(`${BASE_URL}/api/ticketing/stop`, { method: "POST" });
        if (!response.ok) {
            throw new Error("Failed to stop simulation");
        }
        return response.text();
    },
};

export default api;
