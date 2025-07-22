"use client";

import { FlightOption, TravelDetails } from '@/types/travel';
import React, { useState } from 'react';
import { Button } from '@/components/common/Button';
import { Select } from '@/components/common/Select';
import DatePicker from '@/components/common/DatePicker';

interface Step1FormProps {
    initialData: TravelDetails | null;
    flightOptions: FlightOption[];
    onNext: (data: TravelDetails) => void;
};

const Step1Form: React.FC<Step1FormProps> = ({ initialData, flightOptions, onNext }) => {

    const [destination, setDestination] = useState(initialData?.destination || '');
    const [departureDate, setDepartureDate] = useState(initialData?.departureDate || '');
    const [returnDate, setReturnDate] = useState(initialData?.returnDate || '');

    const [flightClass, setFlightClass] = useState<TravelDetails['flightClass']>(initialData?.flightClass || 'Economy');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const availableDestinations = Array.from(new Set(flightOptions.map(option => option.destination)));

    const availableClasses = ['Economy', 'Business', 'First Class'];

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const today = getTodayDate();

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!destination) newErrors.destination = "El destino es requerido.";
        if (!departureDate) newErrors.departure = "La fecha de salida es requerida.";
        if (!returnDate) newErrors.returnDate = "La fecha de regreso es requerida.";
        if (departureDate && returnDate && new Date(departureDate) > new Date(returnDate)) {
            newErrors.returnDate = 'La fecha de regreso no puede ser anterior a la de salida.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const selectedFlight = flightOptions.find((option) => option.destination === destination && option.class === flightClass);
            const pricePerTraveler = selectedFlight ? selectedFlight.priceUSD : 0;

            onNext({
                destination,
                departureDate,
                returnDate,
                flightClass,
                pricePerTraveler
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                    Destino
                </label>
                <Select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    options={[
                        { value: '', label: 'Seleccione un destino' },
                        ...availableDestinations.map(dest => ({ value: dest, label: dest }))
                    ]}
                    className="mt-1 block w-full"
                />
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">
                        Fecha de Salida
                    </label>
                    <DatePicker
                        selectedDate={departureDate}
                        onChange={(date) => setDepartureDate(date)}
                        className="mt-1 block w-full"
                        min={today}
                    />
                    {errors.departureDate && <p className="text-red-500 text-xs mt-1">{errors.departureDate}</p>}
                </div>
                <div>
                    <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">
                        Fecha de Regreso
                    </label>
                    <DatePicker
                        selectedDate={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        className="mt-1 block w-full"
                        min={departureDate || today}
                    />
                    {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate}</p>}
                </div>
            </div>

            <div>
                <label htmlFor="flightClass" className="block text-sm font-medium text-gray-700">
                    Clase de Vuelo
                </label>
                <Select
                    id="flightClass"
                    value={flightClass}
                    onChange={(e) => setFlightClass(e.target.value as TravelDetails['flightClass'])}
                    options={availableClasses.map(cls => ({ value: cls, label: cls }))}
                    className="mt-1 block w-full"
                />
            </div>
            <div>
                <Button type="submit">
                    Siguiente
                </Button>
            </div>
        </form>
    );

};

export default Step1Form;