import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const products = [
  {
    id: "1",
    name: "Shampoo y Acondicionador",
    post: "Para pelajes exigentes",
    pname: "Pedigree",
    priority: "Disponible",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    name: "Jabón antibacterial",
    post: "Elimina el 99% de las bacterias",
    pname: "Real Pets",
    priority: "Demandado",
    pbg: "secondary.main",
    budget: "24.5",
  },
  {
    id: "3",
    name: "Juguete anticaries",
    post: "Alternativa para la higiene de tu perro",
    pname: "Happy dogs",
    priority: "Agotado",
    pbg: "error.main",
    budget: "12.8",
  },
  {
    id: "4",
    name: "Mochila transportadora",
    post: "¡Sal a todos lados con tu gato!",
    pname: "Catchow",
    priority: "Descuento",
    pbg: "success.main",
    budget: "2.4",
  },
];

const ExTable = () => {
  return (
    <Table
      aria-label="Tabla Productos"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Assigned
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="textSecondary" variant="h6">
              Priority
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Budget
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {product.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.pname}
              </Typography>
            </TableCell>
            <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.priority}
              ></Chip>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">${product.budget}k</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExTable;
