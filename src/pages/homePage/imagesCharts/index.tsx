import React from 'react'
import './styles.scss'
import backgroundCharts from './../../../assets/charts/backgroundCharts.png'
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { motion } from 'framer-motion';
import { faker } from '@faker-js/faker';
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {point: {radius: 0}, arc: {borderColor: 'red'}},
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      align: 'end' as const,
      labels: {
        font: {
          size:20
        },
        padding:20
      },
    },
    title: {
      display: true,
      text: 'Run 2, Vw Scirocco stage 2',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['0', 250, 500, 750, '1000', 1250, 1500,1750, '2000',2250, 2500, 2750, '3000',3250, 3500, 2750, '4000',4250, 4500, 4750, '5000',5250, 5500,5750,  '6000', 6250,6500];

export const data = {
  labels,
  datasets: [
    {
      label: 'HP',
      data:
      // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      [10, 20, 30, 50, 55, 60, 83, 100 ,110, 120, 135, 150, 155, 160, 175, 190, 209,220, 240, 280, 310, 330, 340, 350, 360, 365, 360, 355],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Nm',
      data: //labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      [10, 20, 50, 90, 110, 160, 190, 203,250, 265, 280, 300, 330, 355, 390, 400, 405, 415, 409, 380, 370, 365, 350, 320, 300, 290, 280],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

export const ImagesCharts = () =>{
    const navigate = useNavigate()
  return (
    <motion.div  className='imagesCharts' whileInView={{opacity: [.1, 1]}} viewport={{ once: true }} transition={{ delay: .2 }}>
        {/* <div className='imagesCharts-images'/> */}
        <Line 
          options={
           options
          } 
          data={data}
        />
        <motion.div className='imagesCharts-info' viewport={{ once: true }}  whileInView={{scale: [.7, 1.1, 1], opacity:[.6, 1]}}   transition={{ delay: .5 }}>
            <h1>Udostępniaj wykresy, przyrosty, efekty działań</h1>
            <h1>Pokaż innym co ciekawego można stworzyć i co osiągnąć</h1>
            {/* <h1>Co z czego można </h1> */}
            <h2>Zacznij od założenia darmowego konta</h2>
            <div className='imagesCharts-button' onClick={()=>navigate('/start/register')}>Utwórz</div>
        </motion.div>
        {/* <img src={backgroundCharts}/> */}
        {/* <img src='https://rennlist.com/forums/attachments/944-turbo-and-turbo-s-forum/138812d1157605747-89-951-dyno-chart-gd_dyno_09_06_06-1-.gif'/>
        <img src='https://th.bing.com/th/id/R.822910577a77da38e5a73ef860b9f8c1?rik=xh0%2bDvvri6hJRg&riu=http%3a%2f%2fwww.leemotorcycles.co.uk%2fDyno-Graphs%2fGraph-1%2fGraph-2%2fZZR14.jpg&ehk=0qZlPDLeK6P7Uf5JDbMRIRUZ1KMxduwI6dhcIsdyQu8%3d&risl=&pid=ImgRaw&r=0'/>
        <img src='https://th.bing.com/th/id/R.29137ddb7e6dd0b8db09454efeb24244?rik=tRq3eVLIUjPWpA&riu=http%3a%2f%2fstat.ameba.jp%2fuser_images%2f20150204%2f12%2fzakkmotorcycles%2fcf%2fa7%2fj%2fo0800061113208273846.jpg&ehk=ByY3KtNWs3YaG9NlsteRiqfQ%2fxKl70vvcjfBqNQm4Cc%3d&risl=&pid=ImgRaw&r=0'/> */}
    </motion.div>
  )
}
