import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
import Header from "../../components/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
     
      <Bar />
    </Box>
  );
};

export default BarChart;
