import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Chart from 'react-apexcharts';



const SalesOverview = () => {
  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#1e4db7", "#a7e3f4"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 10,
      max: 40,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview = [
    {
      name: "Preventivas",
      data: [35, 39, 30, 35, 39, 18, 35, 39, 30, 35, 39, 18],
    },
    {
      name: "Correctivas",
      data: [28, 25, 32, 21, 25, 31, 28, 25, 32, 21, 25, 31],
    },
  ];





  return (
    <Card
      variant="outlined"
      sx={{
        paddingBottom: "10",
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0",
              }}
              gutterBottom
            >
              Consultas por mes
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "secondary.main",
                }}
              >
                Preventivas
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  height: 8,
                  width: 8,
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "primary.main",
                }}
              >
                Correctivas
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "25px",
          }}
        >
          <Chart
            options={optionssalesoverview}
            series={seriessalesoverview}
            type="bar"
            height="295px"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
