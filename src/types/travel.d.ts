export interface FlightOption {
    destination: string;
    class: 'Economy' | 'Business' | 'Firts Class';
    priceUSD: number;
}

export interface Passenger {
    id: number;
    fullName: string;
    dateOfBirth: string;
    documentType: 'DNI' | 'Pasaporte' | 'Licencia';
    documentNumber: string;
    age: number;
}

export interface TravelDetails {
    destination: string;
    departureDate: string;
    returnDate: string;
    flightClass: 'Economy' | 'Business' | 'Firts Class';
    pricePerTraveler: number;
}

export interface TravelerInfo {
    numberOfTravelers: number;
    passengers: Passenger [];
    hasPets: boolean;
    numberOfPets: number;
    hasExtraLuggage: boolean;
    numberOfExtraLuggage: number;
}

export interface AdditionalServices {
    hasTravelInsurance: boolean;
    hasPreferredSeating: boolean;
    specialAssistance: boolean;
    specialAssistanceNote: string;
}

export interface BookingSummary {
    travelDetails: TravelDetails;
    travelerInfo: TravelerInfo;
    additionalServices: AdditionalServices;
    totalCost: number;
}

export interface FormData {
    step1: TravelDetails | null;
    step2: TravelerInfo | null;
    step3: AdditionalServices | null; 
    currentStep: number;
}