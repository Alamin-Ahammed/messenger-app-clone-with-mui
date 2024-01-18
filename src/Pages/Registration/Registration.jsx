// import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import messengerIcon from "../../assets/messenger.svg";
// import { Form, useNavigate } from "react-router-dom";

// const validateInput = (input) => {
//     const { inputName, value } = input;
//     let error = "";
  
//     switch (inputName) {
//       case "Name":
//         // Check if Name is at least 3 characters
//         if (value.trim().length < 3) {
//           error = "Name must be at least 3 characters.";
//         }
//         break;
  
//       case "Email":
//         // Check if Email is a valid email address
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) {
//           error = "Invalid email address.";
//         }
//         break;
  
//       case "Phone":
//         // Check if Phone contains only numbers
//         const phoneRegex = /^\d+$/;
//         if (!phoneRegex.test(value)) {
//           error = "Phone must contain only numbers.";
//         }
//         break;
  
//       case "Country":
//         // Check if Country contains only text
//         const textRegex = /^[A-Za-z]+$/;
//         if (!textRegex.test(value)) {
//           error = "Country must contain only text.";
//         }
//         break;
  
//       case "City":
//         // Check if City contains only text
//         if (!textRegex.test(value)) {
//           error = "City must contain only text.";
//         }
//         break;
  
//       case "Password":
//         // Check if Password is at least 6 characters
//         if (value.length < 6) {
//           error = "Password must be at least 6 characters.";
//         }
//         break;
  
//       case "ConfirmPassword":
//         // Check if Confirm Password matches Password
//         const password = '';
//         if (value !== password) {
//           error = "Passwords do not match.";
//         }
//         break;
  
//       default:
//         break;
//     }
  
//     return error;
//   };
  


// export default function Registration() {
//   const navigate = useNavigate();

//   const handleSubmition = (e) => {
//     e.preventDefault();
//     console.log(e.target[e.target.length - 3].value);
//     [...e.target].forEach((element) => {
//         if (element.tagName === 'INPUT') {
//             if (e.target[e.target.length - 4].value === element.value) {
                
//             }
//             validateInput({
//                 inputName: element.name,
//                 value: element.value
//             })
//         }
//     });
//   };
//   return (
//     <Container
//       sx={{
//         p: "1rem",
//       }}
//     >
//       <Box sx={{ maxWidth: "450px", mx: "auto" }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "0.5rem",
//             m: "1rem",
//           }}
//         >
//           <img src={messengerIcon} />
//           <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 800 }}>
//             Registration
//           </Typography>
//         </Box>
//         <Box sx={{ width: "100%", div: { width: "100%", my: "0.3rem" } }}>
//           <Form onSubmit={(e) => handleSubmition(e)}>
//             <TextField variant="outlined" label="Name" />
//             <TextField variant="outlined" label="Email" />
//             <TextField variant="outlined" label="Phone Number" />
//             <Box sx={{ display: "flex", gap: "1rem" }}>
//               <TextField variant="outlined" label="Country" />
//               <TextField variant="outlined" label="City" />
//             </Box>
//             <TextField
//               helperText="Must be at least 6 characters"
//               variant="outlined"
//               label="Password"
//               type="password"
//             />
//             <TextField
//               variant="outlined"
//               label="Confirm Password"
//               type="password"
//             />
//             <Box>
//               <Button type="submit" variant="contained" sx={{ width: "100%" }}>
//                 Register
//               </Button>
//             </Box>
//           </Form>
//         </Box>

//         <Box sx={{ mt: "1rem" }}>
//           <Typography sx={{ fontSize: "0.9rem" }}>
//             Already have an account?{" "}
//             <Button variant="Text" onClick={() => navigate("/login")}>
//               <Typography
//                 sx={{
//                   borderBottom: "1px solid #1565C0",
//                   fontSize: "0.9rem",
//                   color: "#1565C0",
//                 }}
//               >
//                 Login
//               </Typography>
//             </Button>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }



import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import messengerIcon from "../../assets/messenger.svg";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      Country: "",
      City: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().matches(/^[A-Za-z ]+$/, "Name must contain only text.").min(3, "Name must be at least 3 characters.").required("Required"),
      Email: Yup.string().email("Invalid email address.").required("Required"),
      Phone: Yup.string().matches(/^\d+$/, "Phone must contain only numbers.").required("Required"),
      Country: Yup.string().matches(/^[A-Za-z]+$/, "Country must contain only text.").required("Required"),
      City: Yup.string().matches(/^[A-Za-z]+$/, "City must contain only text.").required("Required"),
      Password: Yup.string().min(6, "Password must be at least 6 characters.").required("Required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords do not match.")
        .required("Required"),
    }),
    onSubmit: (values,{resetForm}) => {
      // Your form submission logic goes here
      console.log(values);
      resetForm();
    },
  });

  return (
    <Container sx={{ p: "1rem" }}>
      <Box sx={{ maxWidth: "450px", mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            m: "1rem",
          }}
        >
          <img src={messengerIcon} alt="messenger icon" />
          <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 800 }}>
            Registration
          </Typography>
        </Box>
        <Box sx={{ width: "100%", div: { width: "100%", my: "0.3rem" } }}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              label="Name"
              {...formik.getFieldProps("Name")}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
            />

            <TextField
              variant="outlined"
              label="Email"
              {...formik.getFieldProps("Email")}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
            />

            <TextField
              variant="outlined"
              label="Phone Number"
              {...formik.getFieldProps("Phone")}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
            />

            <Box sx={{ display: "flex", gap: "1rem" }}>
              <TextField
                variant="outlined"
                label="Country"
                {...formik.getFieldProps("Country")}
                error={formik.touched.Country && Boolean(formik.errors.Country)}
                helperText={formik.touched.Country && formik.errors.Country}
              />

              <TextField
                variant="outlined"
                label="City"
                {...formik.getFieldProps("City")}
                error={formik.touched.City && Boolean(formik.errors.City)}
                helperText={formik.touched.City && formik.errors.City}
              />
            </Box>

            <TextField
              variant="outlined"
              label="Password"
              type="password"
              {...formik.getFieldProps("Password")}
              error={formik.touched.Password && Boolean(formik.errors.Password)}
              helperText={formik.touched.Password && formik.errors.Password}
            />

            <TextField
              variant="outlined"
              label="Confirm Password"
              type="password"
              {...formik.getFieldProps("ConfirmPassword")}
              error={
                formik.touched.ConfirmPassword &&
                Boolean(formik.errors.ConfirmPassword)
              }
              helperText={
                formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
              }
            />

            <Box>
              <Button type="submit" variant="contained" sx={{ width: "100%" }}>
                Register
              </Button>
            </Box>
          </form>
        </Box>

        <Box sx={{ mt: "1rem" }}>
          <Typography sx={{ fontSize: "0.9rem" }}>
            Already have an account?{" "}
            <Button variant="Text" onClick={() => navigate("/login")}>
              <Typography
                sx={{
                  borderBottom: "1px solid #1565C0",
                  fontSize: "0.9rem",
                  color: "#1565C0",
                }}
              >
                Login
              </Typography>
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Registration;
