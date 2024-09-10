"use client"
import {useRef, useEffect} from "react";
import {Chart} from "chart.js/auto";


export default function LineChart(){
const chartRef = useRef(null)

   useEffect(()=>{
  if(chartRef.current){
        if(chartRef.current.chart){
           chartRef.current.chart.destroy()
        }
        
        const context = chartRef.current.getContext("2d");

     const newChart = new Chart(context, {
        type:"line",
        data:{
          labels:["Jan","Feb","Mar","Apr"],
          datasets: [
            {
                label: "Info",
                data: [10,20,30,40],
                backgroundColor: [
                    "rgb(255,99,132,0.2)",
                    "rgb(255,159,64,0.2)",
                    "rgb(255,205,86,0.2)",
                    "rgb(75,192,192,0.2)",
                    "rgb(54,162,235,0.2)",
                    "rgb(153,102,255,0.2)",
                    "rgb(201,203,207,0.2)",

                ],
                borderColor:[
                    "rgb(255,99,132,0.2)",
                    "rgb(255,159,64,0.2)",
                    "rgb(255,205,86,0.2)",
                    "rgb(75,192,192,0.2)",
                    "rgb(54,162,235,0.2)",
                    "rgb(153,102,255,0.2)",
                    "rgb(201,203,207,0.2)",

                ],

                borderWidth: 1,
                  
            },
          ],
        },
        options:{
          // responsive: true,
            scales:{
                x:{
                    type:"category"
                },
                y:{
                    beginAtZero: true
                }
            }
        }
     });

      chartRef.current.chart = newChart
    }

   },[]);
    return( <div style={{position:"relative", width:"400px", height:"500px"}}>
           <canvas ref={chartRef} />
    </div>);
}