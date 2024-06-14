import {Box} from "@mui/material";
import Header from "../../components/Header"
import PieChart from "../../components/PieChart";

import React from 'react'
import TopicPieChart from "../../components/TopicPie";

const Pie = () => {
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
        <Box height="75vh">
            <PieChart/>
        </Box>
        <Box height="75vh">
            <TopicPieChart/>
        </Box>
    </Box>
  )
}

export default Pie