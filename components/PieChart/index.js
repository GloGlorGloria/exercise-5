import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'
import {
    Chart as chartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import { useEffect, useState } from 'react'

chartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState ({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(255, 162, 10, 0.4)',
                        'rgba(53, 40, 15, 0.4)',
                        'rgba(155, 22, 25, 0.4)',
                        'rgba(30, 162, 235, 0.4)',
                        'rgba(12, 46, 95, 0.4)',
                        'rgba(180, 50, 115, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(255, 162, 10, 0.4)',
                        'rgba(53, 40, 15, 0.4)',
                        'rgba(155, 22, 25, 0.4)',
                        'rgba(30, 162, 235, 0.4)',
                        'rgba(112, 46, 95, 0.4)',
                        'rgba(180, 50, 115, 0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend:{
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return(
        <div>
            <Pie data ={chartData} options = {chartOptions} style ={{width: "700px", height: "600px"}}/>
        </div>
    )
}