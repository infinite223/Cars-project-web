import './styles.scss'
import logo from './../../assets/google-play-icon.png'
import googlePlay from './../../assets/linkImage.png'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
export const ErrorResponsive = () => {
    const navigate = useNavigate()
    return (
      <div className='errorResponsive'>
        <MdOutlineArrowBackIosNew size={25} onClick={() => navigate('/')} className='errorResponsive-back'/>

        <img src={logo} />
        <h1>
            Aby korzytać za Cars designs na telefonie pobierz darmową aplikacjie 
            ze sklepu play
        </h1>   
        <img src={googlePlay} className='errorResponsive-googlePlayImg'/>

        <p>
            Z cars designs możesz też korzystać na komupterze, laptopie w formie strony internetowej na dowolnej przeglądarce
        </p>
      </div>
    )
}
  