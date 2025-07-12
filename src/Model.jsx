import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Button,
  Box,
} from "@mui/material";

export default function Model({ onNext, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  const modelOptions = {
    Scooter: ["Honda Activa", "TVS Jupiter", "Suzuki Access"],
    Motorbike: ["Yamaha R15", "Bajaj Pulsar", "KTM Duke"],
    "Electric Bike": ["Ola S1", "Ather 450X", "TVS iQube"],
    Hatchback: ["Maruti Swift", "Hyundai i20", "Tata Tiago"],
    Sedan: ["Honda City", "Skoda Slavia", "Hyundai Verna"],
    SUV: ["Toyota Fortuner", "Mahindra XUV700", "Tata Nexon"],
  };

  const selectedType = defaultValues.vehicleType;
  const availableModels = modelOptions[selectedType] || [];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="flex flex-col gap-6 p-4 max-w-md mx-auto">
        <FormControl component="fieldset" error={!!errors.model}>
          <FormLabel component="legend">
            Select Specific Model ({selectedType}):
          </FormLabel>
          <RadioGroup>
            {availableModels.map((model) => (
              <FormControlLabel
                key={model}
                value={model}
                control={<Radio />}
                label={model}
                {...register("model", {
                  required: "Please select a model",
                })}
              />
            ))}
          </RadioGroup>
          {errors.model && (
            <FormHelperText>{errors.model.message}</FormHelperText>
          )}
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );
}

// src/components/Model.jsx
// import { useForm } from "react-hook-form";

// export default function Model({ onNext, defaultValues }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues,
//     mode: "onChange",
//   });

//   const onSubmit = (data) => {
//     onNext(data);
//   };

//   const modelOptions = {
//     Scooter: ["Honda Activa", "TVS Jupiter", "Suzuki Access"],
//     Motorbike: ["Yamaha R15", "Bajaj Pulsar", "KTM Duke"],
//     "Electric Bike": ["Ola S1", "Ather 450X", "TVS iQube"],
//     Hatchback: ["Maruti Swift", "Hyundai i20", "Tata Tiago"],
//     Sedan: ["Honda City", "Skoda Slavia", "Hyundai Verna"],
//     SUV: ["Toyota Fortuner", "Mahindra XUV700", "Tata Nexon"],
//   };

//   const selectedType = defaultValues.vehicleType;
//   const availableModels = modelOptions[selectedType] || [];

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3>Select Specific Model ({selectedType}):</h3>

//       {availableModels.map((model) => (
//         <div key={model}>
//           <label>
//             <input
//               type="radio"
//               value={model}
//               {...register("model", { required: "Please select a model" })}
//             />
//             {model}
//           </label>
//         </div>
//       ))}

//       {errors.model && <p style={{ color: "red" }}>{errors.model.message}</p>}

//       <button type="submit">Next</button>
//     </form>
//   );
// }
