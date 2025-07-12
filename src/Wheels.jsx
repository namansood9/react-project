import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  FormHelperText,
  Box,
} from "@mui/material";

export default function Wheels({ onNext, defaultValues }) {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="flex flex-col gap-6 p-4 max-w-md mx-auto">
        <FormControl component="fieldset" error={!!errors.wheels}>
          <FormLabel component="legend">Select Number of Wheels:</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="2 Wheels"
              {...register("wheels", { required: "Please select a wheel option" })}
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4 Wheels"
              {...register("wheels", { required: "Please select a wheel option" })}
            />
          </RadioGroup>
          {errors.wheels && (
            <FormHelperText>{errors.wheels.message}</FormHelperText>
          )}
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </form>
  );
}

// src/components/Wheels.jsx
// import { useForm } from "react-hook-form";

// export default function Wheels({ onNext, defaultValues }) {
//   const { register,handleSubmit,formState: { errors },} = useForm({defaultValues,mode: "onChange", });

//   const onSubmit = (data) => {
//     onNext(data); // go to next step
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3>Select Number of Wheels:</h3>

//       <div>
//         <label>
//           <input
//             type="radio"
//             value="2"
//             {...register("wheels", { required: "Please select a wheel option" })}
//           />
//           2 Wheels
//         </label>
//       </div>

//       <div>
//         <label>
//           <input
//             type="radio"
//             value="4"
//             {...register("wheels", { required: "Please select a wheel option" })}
//           />
//           4 Wheels
//         </label>
//       </div>

//       {errors.wheels && (
//         <p style={{ color: "red" }}>{errors.wheels.message}</p>
//       )}

//       <button type="submit">Next</button>
//     </form>
//   );
// }
