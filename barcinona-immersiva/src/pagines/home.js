import {useNavigate} from 'react-router-dom';
import ButtonText from '../components/botons/buttonText';

function Home(){
    const navigate = useNavigate();
    return(
<div>
<p>Aquesta és la pàgina de Home</p>
<ButtonText onClick={() => navigate('/onBoarding')}>Començar</ButtonText>
<ButtonText onClick={() => navigate('/onBoarding')}>Configuració</ButtonText>
<ButtonText onClick={() => navigate('/onBoarding')}>Crèdits</ButtonText>
</div>
    );
}

export default Home;