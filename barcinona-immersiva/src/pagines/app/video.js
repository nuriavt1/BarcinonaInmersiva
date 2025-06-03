import ButtonText from "../../components/botons/buttonText";
import {useNavigate} from 'react-router-dom';


function Video({src}) {
   const navigate = useNavigate();
    return (
        <div>
            <p>Aquesta és la pàgina de video</p>
{/**           <Video360Player src={src}/>*/}  

<ButtonText onClick={() => navigate('/mapa')}>Següent</ButtonText>
        </div>
    );
}

export default Video;