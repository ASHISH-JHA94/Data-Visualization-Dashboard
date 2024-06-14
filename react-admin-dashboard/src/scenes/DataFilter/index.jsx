import React, { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { DataContext } from "../../data/dataContext";

const DataFilters = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = useContext(DataContext); 

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "added", headerName: "Added", flex: 1 },
    { field: "country", headerName: "Country", flex: 1 },
    { field: "end_year", headerName: "End Year", flex: 1 },
    { field: "impact", headerName: "Impact", flex: 1 },
    { field: "insight", headerName: "Insight", flex: 1 },
    { field: "intensity", headerName: "Intensity", type: "number", flex: 1 },
    { field: "likelihood", headerName: "Likelihood", type: "number", flex: 1 },
    { field: "pestle", headerName: "Pestle", flex: 1 },
    { field: "published", headerName: "Published", flex: 1 },
    { field: "region", headerName: "Region", flex: 1 },
    { field: "relevance", headerName: "Relevance", type: "number", flex: 1 },
    { field: "sector", headerName: "Sector", flex: 1 },
    { field: "source", headerName: "Source", flex: 1 },
    { field: "start_year", headerName: "Start Year", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Data Filters" subtitle="List of All Data For Filter Purpouse" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid 
          rows={data.data.map((item, index) => ({ ...item, id: item._id || index }))} 
          columns={columns} 
          getRowId={(row) => row.id} 
          components={{ Toolbar: GridToolbar }} 
        />
      </Box>
    </Box>
  );
};

export default DataFilters;
