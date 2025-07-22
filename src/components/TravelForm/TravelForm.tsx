"use client";

import { fetchFlightOptions } from '@/lib/api';
import { AdditionalServices, FlightOption, FormData, TravelDetails, TravelerInfo } from '@/types/travel';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import Step4Summary from './Step4Summary';

const initialFormData: FormData = {
    step1: null,
    step2: null,
    step3: null,
    currentStep: 1
};

const TravelForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [flightOptions, setFlightOptions] = useState<FlightOption[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const getFlightData = async () => {
            setIsLoading(true);
            try {
                const data = await fetchFlightOptions();
                setFlightOptions(data);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error de Carga",
                    text: "No se pudieron cargar las opciones de vuelo. Por favor, inténtalo de nuevo más tarde.",
                    confirmButtonText: "Entendido",
                    customClass: {
                        popup: "rounded-lg shadow-xl p-6 bg-white dark:bg-gray-800",
                        title: "text-2xl font-bold text-gray-900 dark:text-white mb-4",
                        confirmButton: "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    }
                });
                setError("No se pudieron cargar las opciones de vuelo.");
            } finally {
                setIsLoading(false);
            }
        };
        getFlightData();
    }, []);

    type StepData = TravelDetails | TravelerInfo | AdditionalServices;

    const nextStep = (stepData: StepData) => {
        setFormData((prev) => ({
            ...prev,
            [`step${prev.currentStep}`]: stepData,
            currentStep: prev.currentStep + 1,
        }));
    };

    const prevStep = () => {
        setFormData((prev) => ({
            ...prev,
            currentStep: prev.currentStep - 1,
        }));
    };

    const handleSubmit = () => {
        if (!formData.step1 || !formData.step2 || !formData.step3) {
            Swal.fire({
                icon: "warning",
                title: "Faltan Pasos",
                text: "Por favor, completa todos los pasos antes de confirmar la reserva.",
                confirmButtonText: "Entendido",
                customClass: {
                    popup: "rounded-lg shadow-xl p-6 bg-white dark:bg-gray-800",
                    title: "text-2xl font-bold text-gray-900 dark:text-white mb-4",
                    confirmButton: "bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                }
            });
            return;
        }
        Swal.fire({
            icon: "success",
            title: "¡Reserva Confirmada!",
            text: "Tu reserva ha sido procesada con éxito. ¡Buen viaje!",
            confirmButtonText: "¡Genial!",
            customClass: {
                popup: "rounded-lg shadow-xl p-6 bg-white dark:bg-gray-800",
                title: "text-2xl font-bold text-gray-900 dark:text-white mb-4",
                confirmButton: "bg-blue-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            }
        });
        setFormData(initialFormData);
    };

    if (isLoading) {
        return <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>;
    }
    if (error) {
        return <div className="text-center py-10 text-red-500 bg-gray-900 min-h-screen">Error: {error}</div>;
    };

    return (
        <div className=" flex items-center justify-center p-0">
            <div className="bg-gray-100  text-gray-100 rounded-xl shadow-2xl p-8 max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Globetrotter
                </h1>
                <div className="flex justify-between items-center mb-6 text-lg font-semibold text-gray-600">
                    {[1, 2, 3, 4].map((stepNum) => (
                        <span
                            key={stepNum}
                            className={`px-4 py-2 rounded-full ${formData.currentStep === stepNum
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-400 text-gray-700'
                                }`}
                        >
                            Paso {stepNum}
                        </span>
                    ))}
                </div>

                {formData.currentStep === 1 && (
                    <Step1Form
                        initialData={formData.step1 as TravelDetails}
                        flightOptions={flightOptions}
                        onNext={nextStep}
                    />
                )}

                {formData.currentStep === 2 && (
                    <Step2Form
                        initialData={formData.step2 as TravelerInfo}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {formData.currentStep === 3 && (
                    <Step3Form
                        initialData={formData.step3 as AdditionalServices}
                        onNext={nextStep}
                        onBack={prevStep}
                    />
                )}
                {formData.currentStep === 4 && (
                    <Step4Summary
                        travelData={{
                            travelDetails: formData.step1!,
                            travelerInfo: formData.step2!,
                            additionalServices: formData.step3!,
                            totalCost: 0
                        }}
                        onConfirm={handleSubmit}
                        onBack={prevStep}
                    />
                )}
            </div>
        </div>
    );


};
export default TravelForm;