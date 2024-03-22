// import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
// import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "var(--iconColor)",
            "--TextField-brandBorderHoverColor": "var(--iconColor)",
            "--TextField-brandBorderFocusedColor": "var(--brandColor)",
            "& label.Mui-focused": {
              color: "var(--brandColor)",
            },
            "& label": {
              color: "var(--iconColor)",
            },
            "& .MuiInputBase-root": {
              color: "var(--headingColor)",
              // fontSize: "var(--fontSize)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "1px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "1px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "1px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "1px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "1px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "1px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default customTheme;

// export default function CustomizedInputsStyleOverrides() {
//   const outerTheme = useTheme();

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: { sm: "1fr 1fr 1fr" },
//         gap: 2,
//       }}
//     >
//       <ThemeProvider theme={customTheme(outerTheme)}>
//         <TextField label="Outlined" />
//         <TextField label="Filled" variant="filled" />
//         <TextField label="Standard" variant="standard" />
//       </ThemeProvider>
//     </Box>
//   );
// }
