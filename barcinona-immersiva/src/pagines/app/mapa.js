import FooterMenu from "../../components/footerMenu";
import GoogleMap from "../../components/googleMap";

function Mapa(){
    return(
<div>
<p>Aquesta és la pàgina de mapa</p>
<GoogleMap></GoogleMap>
<FooterMenu></FooterMenu>
</div>
    );
}

export default Mapa;