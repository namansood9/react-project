import { useForm } from "react-hook-form";
import { TextField, Button, Box, FormHelperText } from "@mui/material";

export default function DateRange({ onNext, defaultValues }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      startDate: defaultValues.startDate || "",
      endDate: defaultValues.endDate || "",
    },
    mode: "onChange",
  });

  const startDate = watch("startDate");

  const onSubmit = (data) => {
    console.log("onSubmit with:", data);
    onNext(data); // sends { startDate, endDate }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="flex flex-col gap-6 p-4 max-w-md mx-auto">
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register("startDate", { required: "Start date is required" })}
          error={!!errors.startDate}
          helperText={errors.startDate?.message}
        />

        <TextField
          label="End Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          {...register("endDate", {
            required: "End date is required",
            validate: (value) =>
              new Date(value) >= new Date(startDate) ||
              "End date must be after start date",
          })}
          error={!!errors.endDate}
          helperText={errors.endDate?.message}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
}

// import { useForm } from "react-hook-form";

// export default function DateRange({ onNext, defaultValues }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm({
//     defaultValues: {
//       startDate: defaultValues.startDate || "",
//       endDate: defaultValues.endDate || "",
//     },
//     mode: "onChange",
//   });

//   const startDate = watch("startDate");

//   const onSubmit = (data) => {
//     console.log(" onSubmit with:", data);
//     onNext(data); 
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h3>Select Booking Date Range:</h3>

//       <div>
//         <label>Start Date: </label>
//         <input
//           type="date"
//           {...register("startDate", { required: "Start date is required" })}
//         />
//         {errors.startDate && (
//           <p style={{ color: "red" }}>{errors.startDate.message}</p>
//         )}
//       </div>

//       <div>
//         <label>End Date: </label>
//         <input
//           type="date"
//           {...register("endDate", {
//             required: "End date is required",
//             validate: (value) =>
//               new Date(value) >= new Date(startDate) ||
//               "End date must be after start date",
//           })}
//         />
//         {errors.endDate && (
//           <p style={{ color: "red" }}>{errors.endDate.message}</p>
//         )}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
