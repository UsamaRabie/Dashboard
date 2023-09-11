import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box } from "@mui/material";
import { geo } from "./world_countries";
import { data } from "./data";
import Geo from "./geo";


const Geography = () => {

  return (
    <Box>
   

      <Geo />
    </Box>
  );
};

export default Geography;
