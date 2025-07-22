import { FlightOption } from "@/types/travel";


export const fetchFlightOptions = async (): Promise<FlightOption[]> => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: FlightOption[] = await response.json();
        return data;
    } catch (error) {
        return [];
    }
};
