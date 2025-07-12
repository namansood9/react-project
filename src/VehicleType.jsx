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

export default function VehicleType({ onNext, defaultValues }) {
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

  const twoWheelerTypes = ["Scooter", "Motorbike", "Electric Bike"];
  const fourWheelerTypes = ["Hatchback", "Sedan", "SUV"];

  const vehicleTypes =
    defaultValues.wheels === "2" ? twoWheelerTypes : fourWheelerTypes;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="flex flex-col gap-6 p-4 max-w-md mx-auto">
        <FormControl component="fieldset" error={!!errors.vehicleType}>
          <FormLabel component="legend">
            Select Type of Vehicle ({defaultValues.wheels}-Wheeler):
          </FormLabel>
          <RadioGroup>
            {vehicleTypes.map((type) => (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio />}
                label={type}
                {...register("vehicleType", {
                  required: "Please select a vehicle type",
                })}
              />
            ))}
          </RadioGroup>
          {errors.vehicleType && (
            <FormHelperText>{errors.vehicleType.message}</FormHelperText>
          )}
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );
}

// src/components/VehicleType.jsx
// import { useForm } from "react-hook-form";

// export default function VehicleType({ onNext, defaultValues }) {
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

//   // Simulated database types
//   const twoWheelerTypes = ["Scooter", "Motorbike", "Electric Bike"];
//   const fourWheelerTypes = ["Hatchback", "Sedan", "SUV"];

//   const vehicleTypes =
//     defaultValues.wheels === "2" ? twoWheelerTypes : fourWheelerTypes;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3>Select Type of Vehicle ({defaultValues.wheels}-Wheeler):</h3>

//       {vehicleTypes.map((type) => (
//         <div key={type}>
//           <label>
//             <input
//               type="radio"
//               value={type}
//               {...register("vehicleType", {
//                 required: "Please select a vehicle type",
//               })}
//             />
//             {type}
//           </label>
//         </div>
//       ))}

//       {errors.vehicleType && (
//         <p style={{ color: "red" }}>{errors.vehicleType.message}</p>
//       )}

//       <button type="submit">Next</button>
//     </form>
//   );
// }
