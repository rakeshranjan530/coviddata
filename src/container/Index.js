import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import District from "../componnent/District";
import Home from "../componnent/Home";
import './Container.css';
const WrapperContainer =()=>{

    const [volatile, setVolatile] = useState({
        stateData:[],
        stateName:[],
    })
    useEffect(()=>{
        const fetchCovidData = async () => {
            let covidData;
            try {
                const response = await fetch('https://api.covid19india.org/v4/min/data.min.json');
                covidData = await response.json();
            } catch (error) {
              console.log("Covid data error", error);
            }
            setVolatile((state)=>({
                ...state,
                stateName:covidData || [],
                stateData: Object.keys(covidData) || [],
            }))
        }
       fetchCovidData();
    },[])
    return(
        <>
            <Router>
                    <Switch>
                        <Route exact path="/" component={()=><Home stateSearchName={volatile?.stateData} stateName={volatile?.stateName}/>}/>
                        <Route exact path="/district/:af" component= {District} />
                    </Switch>
            </Router>
                   
        </>
    )
}
export default WrapperContainer;