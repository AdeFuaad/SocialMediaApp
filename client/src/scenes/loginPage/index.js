import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "linear-gradient(90deg, rgba(2,106,158,1) 47%, rgba(195,72,245,1) 100%, rgba(109,9,121,1) 100%);",
      }}
    >
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
        position="absolute"
        top={0}
        bgcolor={theme.palette.background.alt}
      >
        <Typography fontWeight="bold" fontSize="32px" color="#5077be">
        DevPal
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        borderRadius="1.5rem"
        boxShadow={3}
        bgcolor={theme.palette.background.alt}
      >
       <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
    Welcome to DevPal!
  </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
