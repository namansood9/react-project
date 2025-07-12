import { useState } from "react";
import axios from "axios";
import Name from "./Name";
import Wheels from "./Wheels";
import VehicleType from "./VehicleType";
import Model from "./Model";
import DateRange from "./DateRange";
import { Button } from "@mui/material";

export default function ParentForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    model: "",
    startDate: "",
    endDate: "",
  });

  const submitToAPI = async (d) => {

    console.log("submitToAPI triggered");
    console.log("formData at submission:", d);

    const {
      firstName,
      lastName,
      wheels,
      vehicleType,
      model,
      startDate,
      endDate,
    } = d;



    const payload = {
      firstName,
      lastName,
      wheels: Number(wheels),
      vehicleType,
      model,
      startDate,
      endDate,
    };

    console.log("📤 Final payload to send:", payload);

    try {
      const res = await axios.post(
        "https://687244f076a5723aacd426d3.mockapi.io/bookings",
        payload
      );
      console.log("Submitted:", res.data);
      alert("Booking submitted successfully!");
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong!");
    }
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-900">
        Vehicle Booking Form
      </h1>
      <h2 className="text-xl font-semibold mb-4">Step {step + 1}</h2>

      {step === 0 && <Name onNext={updateFormData} defaultValues={formData} />}
      {step === 1 && <Wheels onNext={updateFormData} defaultValues={formData} />}
      {step === 2 && (
        <VehicleType onNext={updateFormData} defaultValues={formData} />
      )}
      {step === 3 && <Model onNext={updateFormData} defaultValues={formData} />}
      {step === 4 && (
        <DateRange
          onNext={(data) => {
            const updatedData = { ...formData, ...data };
            setFormData(updatedData);
            setStep(5);
            setTimeout(() => {
              console.log("1s passed, now submitting. Current formData:", updatedData);
              submitToAPI(updatedData)
            }, 1000);
          }}
          defaultValues={formData}
        />
      )}
      {step === 5 && (
        <div className="p-4 text-center">
          <h3 className="text-lg font-medium mb-2">Submitted Data:</h3>

          <pre className="bg-gray-100 p-4 rounded text-left overflow-x-auto text-sm">
            {JSON.stringify(formData, null, 2)}
          </pre>

          <Button
            type="button"
            variant="contained"
            color="primary"
            className="w-full py-2 rounded text-base shadow-sm hover:bg-blue-700 transition"
            onClick={() => {
              setFormData({
                firstName: "",
                lastName: "",
                wheels: "",
                vehicleType: "",
                model: "",
                startDate: "",
                endDate: "",
              });
              setStep(0);
            }}
          >
            Book Another Vehicle
          </Button>
        </div>
      )}

    </div>
  );
}
