import logo from '../assert/feuille.png'
import '../styles/Banner.css'
function Banner() {
    return (
        <div className='lmj-banner'>         
                    <img src={logo} alt="" class='lmj-logo'/>            
                    <h1 class='lmj-title'>La maison jungle</h1>          
        </div>
        )
    //<h1>La maison jungle</h1>
}



export default Banner