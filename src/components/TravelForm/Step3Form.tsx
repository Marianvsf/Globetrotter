"use client";

import { AdditionalServices } from "@/types/travel";
import { useState } from "react";
import { Button } from "../common/Button";
import { Textarea } from "../common/Textarea";
import { Switch } from "../common/Switch";

interface Step3FormProps {
    initialData: AdditionalServices | null;
    onNext: (data: AdditionalServices) => void;
    onBack: () => void;
}

const Step3Form: React.FC<Step3FormProps> = ({ initialData, onNext, onBack }) => {
    const [hasTravelInsurance, setHasTravelInsurance] = useState(initialData?.hasTravelInsurance || false);
    const [hasPreferredSeating, setHasPreferredSeating] = useState(initialData?.hasPreferredSeating || false);
    const [specialAssistance, setSpecialAssistance] = useState(Boolean(initialData?.specialAssistance));
    const [specialAssistanceNote, setSpecialAssistanceNote] = useState(initialData?.specialAssistanceNote || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data: AdditionalServices = {
            hasTravelInsurance,
            hasPreferredSeating,
            specialAssistance,
            specialAssistanceNote: specialAssistance ? specialAssistanceNote : '',
        };
        onNext(data);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between">
                <label htmlFor="travelInsurance" className="flex items-center cursor-pointer">
                    <Switch
                        id="travelInsurance"
                        checked={hasTravelInsurance}
                        onChange={setHasTravelInsurance}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">¿Deseas agregar seguro de viaje? ($50) </span>
                </label>
            </div>

            <div className="flex items-center justify-between">
                <label htmlFor="preferredSeating" className="flex items-center cursor-pointer">
                    <Switch
                        id="preferredSeating"
                        checked={hasPreferredSeating}
                        onChange={setHasPreferredSeating}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">¿Deseas seleccionar asientos preferenciales?</span>
                </label>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="specialAssistance" className="flex items-center cursor-pointer">
                        <Switch
                            id="specialAssistance"
                            checked={specialAssistance}
                            onChange={setSpecialAssistance}
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">¿Requiere asistencia especial?</span>
                    </label>
                </div>
                {specialAssistance && (
                    <div>
                        <label htmlFor="specialAssistanceNote" className="block text-sm font-medium text-gray-700 mb-2">
                            Notas para asistencia especial (máx. 200 caracteres)
                        </label>
                        <Textarea
                            id="specialAssistanceNote"
                            value={specialAssistanceNote}
                            onChange={(e) => setSpecialAssistanceNote(e.target.value)}
                            maxLength={200}
                            rows={3}
                            className="block w-full"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            {specialAssistanceNote.length} / 200 caracteres
                        </p>
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
    )

};
export default Step3Form;