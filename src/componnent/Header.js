import './Component.css';
const Header =({handleOnSearch})=>{
    return(
        <div className="heading">
            <h2 style={{margin:"0"}}>Covid Data Of Bihar</h2>
            <input type="text" placeholder="search district name" onChange={handleOnSearch} style={{width:"230px",height:"26px"}}></input>
        </div>
    )
}
export default Header;