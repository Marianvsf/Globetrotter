"use client";

import { Passenger, TravelerInfo } from "@/types/travel";
import { useEffect, useState } from "react";
import { Input } from "../common/Input";
import DatePicker from "../common/DatePicker";
import { Select } from "../common/Select";
import { Switch } from "../common/Switch";
import { Button } from "../common/Button";


interface Step2FormProps {
    initialData: TravelerInfo | null;
    onNext: (data: TravelerInfo) => void;
    onBack: () => void;
};

const Step2Form: React.FC<Step2FormProps> = ({ initialData, onNext, onBack }) => {
    const [numberOfTravelers, setNumberOfTravelers] = useState(initialData?.numberOfTravelers || 1);
    const [passengers, setPassengers] = useState<Passenger[]>(initialData?.passengers || [{
        id: 1, fullName: '', dateOfBirth: '', documentType: 'DNI', documentNumber: '', age: 0
    }]);
    const [hasPets, setHasPets] = useState(initialData?.hasPets || false);
    const [numberOfPets, setNumberOfPets] = useState(initialData?.numberOfPets || 0);
    const [hasExtraLuggage, setHasExtraLuggage] = useState(initialData?.hasExtraLuggage || false);
    const [numberOfExtraLuggage, setNumberOfExtraLuggage] = useState(initialData?.numberOfExtraLuggage || 0);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Meses son de 0-11
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const today = getTodayDate();

    useEffect(() => {
        if (numberOfTravelers > passengers.length) {
            const newPassengers = [...passengers];
            for (let i = passengers.length; i < numberOfTravelers; i++) {
                newPassengers.push({
                    id: i + 1,
                    fullName: '',
                    dateOfBirth: '',
                    documentType: 'DNI',
                    documentNumber: '',
                    age: 0
                });
            }
            setPassengers(newPassengers);
        } else if (numberOfTravelers < passengers.length) {
            setPassengers(passengers.slice(0, numberOfTravelers));
        }
    }, [numberOfTravelers, passengers]);

    const handlePassengerChange = (index: number, field: keyof Passenger, value: string) => {
        const newPassengers = [...passengers];
        newPassengers[index] = { ...newPassengers[index], [field]: value };

        if (field === 'dateOfBirth' && value) {
            const birthDate = new Date(value);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const month = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            newPassengers[index].age = age;
        }
        setPassengers(newPassengers);
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (numberOfTravelers < 1 || numberOfTravelers > 10) {
            newErrors.numberOfTravelers = "El número de viajeros debe ser entre 1 y 10.";
        }

        passengers.forEach((passenger, index) => {
            if (!passenger.fullName) {
                newErrors[`passenger-${index}-fullName`] = "El nombre completo es requerido.";
            }
            if (!passenger.dateOfBirth) {
                newErrors[`passenger-${index}-dateOfBirth`] = "La fecha de nacimiento es requerida.";
            } else {
                const birthDate = new Date(passenger.dateOfBirth);
                const todayDateObj = new Date(today);
                if (birthDate >= todayDateObj) {
                    newErrors[`passenger-${index}-dateOfBirth`] = "La fecha de nacimiento debe ser anterior al día de hoy.";
                }
            }
            if (!passenger.documentType) {
                newErrors[`passenger-${index}-documentType`] = "El tipo de documento es requerido.";
            }
            if (!passenger.documentNumber) {
                newErrors[`passenger-${index}-documentNumber`] = "El número de documento es requerido.";
            }
        });
        if (hasPets && (numberOfPets < 0 || numberOfPets > 2)) {
            newErrors.numberOfPets = "El número de mascotas debe ser entre 0 y 2.";
        }
        if (hasExtraLuggage && (numberOfExtraLuggage < 0 || numberOfExtraLuggage > 5)) {
            newErrors.numberOfExtraLuggage = "El número de equipaje extra debe ser entre 0 y 3.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onNext({
                numberOfTravelers,
                passengers,
                hasPets,
                numberOfPets: hasPets ? numberOfPets : 0,
                hasExtraLuggage,
                numberOfExtraLuggage: hasExtraLuggage ? numberOfExtraLuggage : 0,
            });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700">
                    Número de Viajeros (1-10)
                </label>
                <Input
                    id="numberOfTravelers"
                    type="number"
                    min="1"
                    max="10"
                    value={numberOfTravelers}
                    onChange={(e) => setNumberOfTravelers(parseInt(e.target.value) || 1)}
                    className="mt-1 block w-full"
                />
                {errors.numberOfTravelers && <p className="text-red-500 text-xs mt-1">{errors.numberOfTravelers}</p>}
            </div>

            {Array.from({ length: numberOfTravelers }).map((_, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Viajero {index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor={`fullName-${index}`} className="block text-sm font-medium text-gray-700">
                                Nombre Completo
                            </label>
                            <Input
                                id={`fullName-${index}`}
                                type="text"
                                value={passengers[index]?.fullName || ''}
                                onChange={(e) => handlePassengerChange(index, 'fullName', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors[`passenger-${index}-fullName`] && <p className="text-red-500 text-xs mt-1">{errors[`passenger-${index}-fullName`]}</p>}
                        </div>
                        <div>
                            <label htmlFor={`dateOfBirth-${index}`} className="block text-sm font-medium text-gray-700">
                                Fecha de Nacimiento
                            </label>
                            <DatePicker
                                id={`dateOfBirth-${index}`}
                                selectedDate={passengers[index]?.dateOfBirth || ''}
                                onChange={(date) => handlePassengerChange(index, 'dateOfBirth', date)}
                                className="mt-1 block w-full"
                                max={today}
                            />
                            {errors[`passenger-${index}-dateOfBirth`] && <p className="text-red-500 text-xs mt-1">{errors[`passenger-${index}-dateOfBirth`]}</p>}
                        </div>
                        <div>
                            <label htmlFor={`documentType-${index}`} className="block text-sm font-medium text-gray-700">
                                Tipo de Documento
                            </label>
                            <Select
                                id={`documentType-${index}`}
                                value={passengers[index]?.documentType || 'DNI'}
                                onChange={(e) => handlePassengerChange(index, 'documentType', e.target.value)}
                                options={[
                                    { value: 'DNI', label: 'DNI' },
                                    { value: 'Pasaporte', label: 'Pasaporte' },
                                    { value: 'Licencia', label: 'Licencia' },
                                ]}
                                className="mt-1 block w-full"
                            />
                            {errors[`passenger-${index}-documentType`] && <p className="text-red-500 text-xs mt-1">{errors[`passenger-${index}-documentType`]}</p>}
                        </div>
                        <div>
                            <label htmlFor={`documentNumber-${index}`} className="block text-sm font-medium text-gray-700">
                                Número de Documento
                            </label>
                            <Input
                                id={`documentNumber-${index}`}
                                type="text"
                                value={passengers[index]?.documentNumber || ''}
                                onChange={(e) => handlePassengerChange(index, 'documentNumber', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors[`passenger-${index}-documentNumber`] && <p className="text-red-500 text-xs mt-1">{errors[`passenger-${index}-documentNumber`]}</p>}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex items-center justify-between">
                <label htmlFor="hasPets" className="flex items-center cursor-pointer">
                    <Switch
                        id="hasPets"
                        checked={hasPets}
                        onChange={setHasPets}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">¿Viajas con mascotas?</span>
                </label>
                {hasPets && (
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            min="0"
                            value={numberOfPets}
                            onChange={(e) => setNumberOfPets(parseInt(e.target.value) || 0)}
                            className="w-20"
                        />
                        <span className="text-sm text-gray-600">($100 c/u)</span>
                        {errors.numberOfPets && <p className="text-red-500 text-xs mt-1">{errors.numberOfPets}</p>}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between">
                <label htmlFor="hasExtraLuggage" className="flex items-center cursor-pointer">
                    <Switch
                        id="hasExtraLuggage"
                        checked={hasExtraLuggage}
                        onChange={setHasExtraLuggage}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">¿Necesitas maletas extra?</span>
                </label>
                {hasExtraLuggage && (
                    <div className="flex items-center space-x-2">
                        <Input
                            type="number"
                            min="0"
                            value={numberOfExtraLuggage}
                            onChange={(e) => setNumberOfExtraLuggage(parseInt(e.target.value) || 0)}
                            className="w-20"
                        />
                        <span className="text-sm text-gray-600">($50 c/u)</span>
                        {errors.numberOfExtraLuggage && <p className="text-red-500 text-xs mt-1">{errors.numberOfExtraLuggage}</p>}
                    </div>
                )}
            </div>

            <div className="flex justify-between mt-8">
                <Button type="button" onClick={onBack} variant="secondary">
                    Anterior
                </Button>
                <Button type="submit">Siguiente</Button>
            </div>
        </form>

    );

};

export default Step2Form;