import {Box} from "@mui/material";
import Header from "../../components/Header"
import BarChart from "../../components/BarChart";

import React from 'react'
import RelevanceBar from "../../components/relevanceBarChart";
import LikelihoodBar from "../../components/LikelihoodBar";

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
        <Box height="75vh">
            <BarChart/>
            
            
        </Box>
        <Box height="75vh">
            <RelevanceBar/>
            
        </Box>
        <Box height="75vh">
            <LikelihoodBar/>
            
        </Box>
        
        
    </Box>
  )
}

export default Bar