import React from "react";
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
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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
        <Typography fontWeight="bold" fontSize="32px" color="primary">
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
