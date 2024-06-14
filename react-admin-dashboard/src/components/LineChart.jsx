import React, { useContext, useMemo } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { DataContext } from '../data/dataContext';

const LineChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let rawData = useContext(DataContext);
    rawData = rawData.data;

    const transformData = (rawData) => {
        const transformedData = rawData.map(item => {
            const date = item.published ? new Date(item.published) : new Date();
            const intensity = item.intensity !== undefined ? item.intensity : 0;

            return {
                x: date,
                y: intensity
            };
        }).filter(item => !isNaN(item.y) && item.x instanceof Date && !isNaN(item.x.getTime()));

        return [{
            id: "Intensity",
            color: colors.primary[400],
            data: transformedData
        }];
    };

    const data = useMemo(() => {
        if (!rawData || !Array.isArray(rawData)) {
            console.warn('rawData is not an array or is empty:', rawData);
            return [];
        }
        const transformed = transformData(rawData);
        console.log('Transformed Data:', transformed);
        return transformed;
    }, [rawData]);

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
            xFormat="time:%Y-%m-%d"
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 7 days',
                legend: 'Published Date',
                legendOffset: 36,
                legendPosition: 'middle',
                tickPadding: 10,
                tickRotation: 0,
                tickSize: 5
            }}
            axisLeft={{
                legend: 'Intensity',
                legendOffset: -40,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5
            }}
            enableGridX={true}
            enableGridY={true}
            enablePoints={true}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel={(point) => `${point.data.y}`}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.6}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            tooltip={({ point }) => (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
                        border: '1px solid #ccc',
                        color:"black"
                    }}
                >
                    <strong>{`Intensity: ${point.data.y}`}</strong>
                    <br />
                    {`Date: ${point.data.xFormatted}`}
                </div>
            )}
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: '#fff', 
                        },
                    },
                    legend: {
                        text: {
                            fill: '#fff', 
                        },
                    },
                },
            }}
        />
    );
};

export default LineChart;