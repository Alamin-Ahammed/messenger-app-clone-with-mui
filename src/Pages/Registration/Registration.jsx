import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import messengerIcon from "../../assets/messenger.svg";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config/firebaseConfig";
import { useState } from "react";
import { useAuthInfo } from "../../Context/authContext/useAuthInfo";

/**
 * @Description_of_this_component___How_it_works ?
 * Here formik takes initial arguments, validationSchema property has Yup.object method that takes an indetailed object of form validation. Here Yup.object({propertyName of this argument object must be similar as Input field or Textfield's label}.)
 * onSubmit function handle everything after submiting the form. It's @values argument is the hole data that user has been added to submit. 
 * Then by this funciton createUserWithEmailAndPassword() account is being created. 
 * Then by this sendEmailVerification() it's being checked that user's inputed email is verified or not so it sends email veryfication link on the added email. user has 60 second to verify otherwise accuont will be deleted from that database. To handle this deletation process the SetTimeOut method is working on line 126 or around.
 * This variable reNavigate is to check is the email has been verified by the user or not. If it is verified by the user then it succesfully log in the user.
 * updateProfile() function update the name in authentication or currentUser's data in firebase.
 * @returns 
 */

const Registration = () => {
  const {authInfo,setAuthInfo} = useAuthInfo();
  const navigate = useNavigate();
  /* this state (setOpen) is for modal warning. when user will succesfully submit the form then it will be shown.*/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      DateOfBirth: "",
      Phone: "",
      Country: "",
      City: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Name must contain only text.")
        .min(3, "Name must be at least 3 characters.")
        .test(
          "no-more-than-one-space",
          "Name cannot contain more than one space.",
          (value) => !value || value.split(" ").length <= 2
        )
        .required("Required"),
      Email: Yup.string().email("Invalid email address.").required("Required"),
      DateOfBirth: Yup.date()
        .test("dob", "User must be at least 14 years.", (value) => {
          const ageInMilliseconds = Date.now() - value.getTime();
          const millisecondsIn12Years = 13 * 365 * 24 * 60 * 60 * 1000;
          return ageInMilliseconds > millisecondsIn12Years;
        })
        .required("Required"),
      Phone: Yup.string()
        .matches(/^\d+$/, "Phone must contain only numbers.")
        .required("Required"),
      Country: Yup.string()
        .matches(/^[A-Za-z]+$/, "Country must contain only text.")
        .required("Required"),
      City: Yup.string()
        .matches(/^[A-Za-z]+$/, "City must contain only text.")
        .required("Required"),
      Password: Yup.string()
        .min(6, "Password must be at least 6 characters.")
        .max(36, "Password's max range is 36.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)/,
          "Password must contain at least one letter and one number."
        )
        .required("Required"),
      ConfirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), null], "Passwords do not match.")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const { Name, Email, DateOfBirth, Phone, Country, City, Password } =
        values;
      await createUserWithEmailAndPassword(auth, Email, Password);
      await sendEmailVerification(auth.currentUser);
      handleOpen();
      await updateProfile(auth.currentUser, {
        displayName: Name,
      });
      let reNavigate;
      reNavigate = setInterval(() => {
        signInWithEmailAndPassword(auth, Email, Password).then(
          (userCredential) => {
            // navigate if email has been verified
            if (userCredential.user.emailVerified) {
              const { displayName,photoURL, email, uid } = userCredential.user;
              setAuthInfo({ displayName,photoURL, email, uid })
              clearInterval(reNavigate);
              navigate("/");
            }
          }
        );
      }, 2000);
      setTimeout(() => {
        signInWithEmailAndPassword(auth, Email, Password).then(
          (userCredential) => {
            // Delete the user account
            if (!userCredential.user.emailVerified) {
              userCredential.user.delete();
              clearInterval(reNavigate);
            }
          }
        );
      }, 60 * 1000);
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
              type="date"
              variant="outlined"
              label="Date Of Birth"
              InputLabelProps={{
                shrink: true,
              }}
              {...formik.getFieldProps("DateOfBirth")}
              error={
                formik.touched.DateOfBirth && Boolean(formik.errors.DateOfBirth)
              }
              helperText={
                formik.touched.DateOfBirth && formik.errors.DateOfBirth
              }
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
              label="Phone Number"
              {...formik.getFieldProps("Phone")}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
            />

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
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%" }}
              >
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Alert severity="success">
              "Verification email has been sent to you! you have 60 seconds to
              verify, otherwise account will be deleted."
            </Alert>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default Registration;
