import React from "react";
import { Grid, Box } from "@mui/material";
// import useScrollToTop from "../s/useScrollToTop";
import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
  DailyActivities,
} from "./dashboard1-components";

const Dashboard1 = () => {
  // useScrollToTop(); 

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <SalesOverview />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DailyActivities />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductPerformance />
        </Grid>
        <BlogCard />
      </Grid>
    </Box>
  );
};

export default Dashboard1;
