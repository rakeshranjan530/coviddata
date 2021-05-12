import './Component.css';
const Card =({name,districtsData})=>{
    return(
            <div className="card">
                    <label style={{fontSize:"x-large",fontWeight:"600",textDecorationLine:"underline"}}>{name}</label>
                    <label style={{fontWeight:"bold"}}>Population : {districtsData.meta.population}</label>
                    <label style={{fontWeight:"bold"}}>Confirmed :{districtsData.total.confirmed}</label>
                    <label style={{fontWeight:"bold"}}>Recovered :{districtsData.total.recovered}</label>
                    <label style={{fontWeight:"bold"}}>Deceased :{districtsData.total.deceased}</label>
                    <label style={{fontWeight:"bold"}}>Tested :{districtsData.total.tested}</label>
                    <label style={{fontWeight:"bold"}}>vaccinated :{districtsData.total.vaccinated}</label>
            </div>
    )
}
export default Card;