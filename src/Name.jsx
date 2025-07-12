import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";

export default function Name({ onNext, defaultValues }) {
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
        <TextField
          label="First Name"
          variant="outlined"
          {...register("firstName", { required: "First name is required" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          {...register("lastName", { required: "Last name is required" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full"
        >
          Next
        </Button>
      </Box>
    </form>
  );
}

// src/components/Step1_Name.jsx
// import { useForm } from "react-hook-form";

// export default function Step1_Name({ onNext, defaultValues }) {
//   const { register, handleSubmit, formState: { errors },} = useForm({defaultValues,mode: "onChange",});

//   const onSubmit = (data) => {
//     onNext(data); // move to next step
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>First Name: </label>
//         <input
//           type="text"
//           {...register("firstName", { required: "First name is required" })}
//         />
//         {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}
//       </div>

//       <div>
//         <label>Last Name: </label>
//         <input
//           type="text"
//           {...register("lastName", { required: "Last name is required" })}
//         />
//         {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}
//       </div>

//       <button type="submit">Next</button>
//     </form>
//   );
// }
