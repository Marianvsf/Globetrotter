export interface FlightOption {
    destination: string;
    class: 'Economy' | 'Business' | 'Firts Class';
    price: number;
}

export interface Passanger {
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
    passangers: Passanger [];
    hasPets: boolean;
    numberOfPets: number;
    hasExtraLuggage: boolean;
    numberOfExtraLuggage: number;
}

export interface AdditionalServices {
    hasTravelInsurance: boolean;
    hasPreferrendSeating: boolean;
    specialAssistance: string;
}

export interface BookingSummary {
    travelDetails: TravelDetails;
    travelerinfo: TravelerInfo;
    additionalServices: AdditionalServices;
    totalCost: number;
}

export interface FormData {
    step1: TravelDetails | null;
    step2: TravelerInfo | null;
    step3: AdditionalServices | null; 
    currentStep: number;
}