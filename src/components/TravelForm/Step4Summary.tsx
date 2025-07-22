"use client";

import { BookingSummary } from "@/types/travel";
import { format } from "date-fns";
import { useMemo } from "react";
import { Button } from "../common/Button";

interface Step4SummaryProps {
    travelData: BookingSummary;
    onConfirm: () => void;
    onBack: () => void;
}

const Step4Summary: React.FC<Step4SummaryProps> = ({ travelData, onConfirm, onBack }) => {
    const { travelDetails, travelerInfo, additionalServices } = travelData;

    const calculateTotalCost = useMemo(() => {
        let total = 0;

        // Costo por viajero
        total += travelDetails.pricePerTraveler * travelerInfo.numberOfTravelers;
        // Costo por mascota
        total += travelerInfo.numberOfPets * 100;
        //Costo de maletas extra
        total += travelerInfo.numberOfExtraLuggage * 50;
        //Costo de Servicios Adicionales
        total += additionalServices.hasTravelInsurance ? 50 : 0;

        return total;
    }, [travelDetails, travelerInfo, additionalServices]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen de tu Reserva</h2>

            <div className="border p-4 rounded-lg text-gray-800 bg-blue-50">
                <h3 className="text-xl font-semibold mb-3">Detalles del Viaje</h3>
                <p><strong>Destino:</strong> {travelDetails.destination}</p>
                <p>
                    <strong>Fechas:</strong>{' '}
                    {format(new Date(travelDetails.departureDate), 'dd/MM/yyyy')} -{' '}
                    {format(new Date(travelDetails.returnDate), 'dd/MM/yyyy')}
                </p>
                <p><strong>Clase de Vuelo:</strong> {travelDetails.flightClass}</p>
            </div>

            <div className="border p-4 rounded-lg text-gray-800 bg-green-50">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Información de Viajeros</h3>
                <p><strong>Cantidad de Viajeros:</strong> {travelerInfo.numberOfTravelers}</p>
                <ul className="list-disc list-inside ml-4">
                    {travelerInfo.passengers.map((pax, index) => (
                        <li key={pax.id || index}>
                            {pax.fullName} (Edad: {pax.age} años) - {pax.documentType}: {pax.documentNumber}
                        </li>
                    ))}
                </ul>
                {travelerInfo.hasPets && (
                    <p><strong>Mascotas:</strong> {travelerInfo.numberOfPets} ($100 c/u)</p>
                )}
                {travelerInfo.hasExtraLuggage && (
                    <p><strong>Maletas Extra:</strong> {travelerInfo.numberOfExtraLuggage} ($50 c/u)</p>
                )}
            </div>

            <div className="border p-4 rounded-lg text-gray-800 bg-purple-50">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Servicios Adicionales</h3>
                <p><strong>Seguro de Viaje:</strong> {additionalServices.hasTravelInsurance ? 'Sí' : 'No'} ($50)</p>
                <p><strong>Asientos Preferenciales:</strong> {additionalServices.hasPreferredSeating ? 'Sí' : 'No'}</p>
                <p>
                    <strong>Asistencia Especial:</strong> {additionalServices.specialAssistance ? 'Sí' : 'No'}
                    {additionalServices.specialAssistance && additionalServices.specialAssistanceNote && (
                        <span className="block text-sm text-gray-600 italic ml-4">
                            Nota: "{additionalServices.specialAssistanceNote}"
                        </span>
                    )}
                </p>
            </div>

            <div className="text-right text-2xl font-bold text-gray-900 mt-6">
                Costo Total Estimado: ${calculateTotalCost}
            </div>

            <div className="flex justify-between mt-8">
                <Button type="button" onClick={onBack} variant="secondary">
                    Anterior
                </Button>
                <Button type="button" onClick={onConfirm}>
                    Confirmar Reserva
                </Button>
            </div>
        </div>
    )

};
export default Step4Summary;