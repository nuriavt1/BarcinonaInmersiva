import { useNavigate } from 'react-router-dom';
import ButtonText from '../components/botons/buttonText';

function OnBoarding() {
  const navigate = useNavigate();

  const videoSrc = './../assets/videos/video360.mp4'; // Canvia pel teu nom exacte

  return (
    <div>
      <p>Aquesta és la pàgina de OnBoarding</p>
      <p>Estàs a punt de veure un vídeo a 360°!</p>
      <p>Arrossega amb el dit o mou el dispositiu per explorar l'escena completa.</p>
      <ButtonText onClick={() => navigate('/video', { state: { src: videoSrc } })}>
        D'acord
      </ButtonText>
    </div>
  );
}

export default OnBoarding;
