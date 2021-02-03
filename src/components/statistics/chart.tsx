import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts'
import styled from '@emotion/styled'

// @ts-ignore
const Chart = ({data}) => {
    if (data.length < 3) {
        return (
            <StyledNotEnoughData>
                Not enough data to show chart
            </StyledNotEnoughData>
        )
    }
    return (
        <StyledChartWrapper>
            <ResponsiveContainer>
                <BarChart data={data} layout="horizontal">
                    <XAxis type="category" dataKey="name" interval={0} tick={false} />
                    <YAxis type="number" />

                    <Bar dataKey="value" />

                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </StyledChartWrapper>
    );
}

export default Chart

const StyledChartWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
`

const StyledNotEnoughData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: 20px;
  font-weight: 500;
`
