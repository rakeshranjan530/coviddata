import './Component.css';
const Header =({handleOnSearch})=>{
    return(
        <div className="heading">
            <h2 style={{margin:"0"}}>Covid Data </h2>
            <input className="search_bar" type="text" placeholder="search name" onChange={handleOnSearch}></input>
        </div>
    )
}
export default Header;