import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";  // Importa Outlet

const MinimalLayout = () => {
  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#c9d6ff",
        background: "linear-gradient(to right, #e2e2e2, #c9d6ff)",
      }}
    >
      {/* Renderiza los componentes hijos */}
      <Outlet />  
    </Box>
  );
};

export default MinimalLayout;
