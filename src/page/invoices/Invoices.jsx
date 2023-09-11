import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Invoices = () => {
  return (
<Box>
  
    
  
  
        <Box sx={{ height: 650,   mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
  
  
  
</Box>

  );
};

export default Invoices;
