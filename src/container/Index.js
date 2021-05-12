import { useEffect, useState } from "react";
import Card from "../componnent/Card";
import Header from "../componnent/Header";
import './Container.css';
const WrapperContainer =()=>{

    const [volatile, setVolatile] = useState({
        biharData:[],
        biharDistrict:[],
        searchData:[]
    })
    useEffect(()=>{
        const fetchCovidData = async () => {
            let covidData;
            try {
                const response = await fetch('https://api.covid19india.org/v4/min/data.min.json');
                covidData = await response.json();
            } catch (error) {
              console.log("btn list error", error);
            }
            setVolatile((state)=>({
                ...state,
                biharData:covidData?.BR?.districts,
                biharDistrict: Object.keys(covidData?.BR?.districts) || [],
                searchData:Object.keys(covidData?.BR?.districts) || [],
            }))
        }
       fetchCovidData();
    },[])
    const handleOnSearch =({target})=>{
        const {value} = target;
        const searchDistrictName = volatile.biharDistrict.filter(e=>e.toLowerCase().includes(value.toLowerCase()));
        setVolatile((state)=>({
            ...state,
            searchData: searchDistrictName
        }))
        console.log("searchDistrictName",searchDistrictName);
    }
    return(
        <>
            <Header handleOnSearch={handleOnSearch}/>
                <div className="container">
                    {
                        volatile?.searchData?.map((e,i)=>{
                            return(
                                    <div key={e}>
                                        <Card 
                                            name={e}
                                            districtsData={volatile?.biharData[e]}
                                        />
                                    </div>
                            )
                        })
                    }
                </div>
        </>
    )
}
export default WrapperContainer;