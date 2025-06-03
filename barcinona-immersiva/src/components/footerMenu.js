import {useNavigate} from 'react-router-dom';

export default function FooterMenu () {
      const navigate = useNavigate();
    return(
<footer>
<div style={{ cursor: 'pointer' }} onClick={() => navigate('/juga')}>Juga</div>
<div style={{ cursor: 'pointer' }} onClick={() => navigate('/mapa')}>Mapa</div>
<div style={{ cursor: 'pointer' }} onClick={() => navigate('/biblioteca')}>Biblioteca</div>
<div style={{ cursor: 'pointer' }} onClick={() => navigate('/nivells')}>Nivells</div>
</footer>

    );
}