import './Component.css';
import  backwardarrow from '../assets/backwardarrow.png';
import {useHistory } from "react-router";
const Header =({handleOnSearch})=>{
    let history = useHistory();
    return(
        <div className="heading">
            <div className='header1'>
                <img className="backward" src={backwardarrow} onClick={()=>{history.push("/")}} alt="loading..."/>
                <h2 style={{margin:"0"}}>Covid Data of India </h2>
            </div>
            <div className="header2">   
                <input className="search_bar" type="text" placeholder="search name" onChange={handleOnSearch}></input>
            </div>
        </div>
    )
}
export default Header;