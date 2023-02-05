import React from 'react'
import './styles.scss'
import backgroundCharts from './../../../assets/charts/backgroundCharts.png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
export const ImagesCharts = () =>{
    const navigate = useNavigate()
  return (
    <motion.div  className='imagesCharts' whileInView={{opacity: [.1, 1]}} viewport={{ once: true }} transition={{ delay: .6 }}>
        <div className='imagesCharts-images'/>
        <motion.div className='imagesCharts-info' viewport={{ once: true }}  whileInView={{left: [-100, 0]}}   transition={{ delay: .5 }}>
            <h1>Udostępniaj wykresy, przyrosty, efekty działań</h1>
            <h1>Pokaż innym co ciekawego można stworzyć</h1>
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
