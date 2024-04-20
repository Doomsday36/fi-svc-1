import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    BarElement,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Bar} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement 
)

function Chart() {
    const {insights} = useGlobalContext()
    console.log(insights)


    // const data = 
    // {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: 'Expense by category',
    //       data: [12, 19, 3, 5, 2, 3],
    //       borderWidth: 1
    //     }]
    // }
    if (insights.length === 0) {
        return <h1>Loading...</h1>
    }
    const labels = Object.keys(insights.categoryWiseTotal)
    const values = Object.values(insights.categoryWiseTotal)

    const data = 
    {
        labels: labels,
        datasets: [{
          label: 'Expense by category',
          data: values,
          borderWidth: 1
        }]
    }


    return (
        <ChartStyled >
            <Bar data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart