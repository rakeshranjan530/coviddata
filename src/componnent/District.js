import { useEffect, useState } from "react";
import { DistrictCard } from "./Card";
import Header from "./Header";

const District =({location,history})=>{
    const {data} = location || {};
    const stateData = data?.districts || {}
    const districtsName = Object.keys(stateData)


    const [volatile, setVolatile] = useState({
        searchDistrictsName:districtsName
    })
    useEffect(()=>{
        if(!data){
            history.push("/")
        }

    },[])
    const handleOnSearch =({target})=>{
        const {value} = target;
        const districtsSearchValue = districtsName.filter(e=>e.toLowerCase().includes(value.toLowerCase()));
        setVolatile((state)=>({
            ...state,
            searchDistrictsName: districtsSearchValue
        }))
    }
    return(
        <>
        <Header handleOnSearch={handleOnSearch}/>
        <div className="container">
            {
                volatile?.searchDistrictsName?.map((e)=>{
                    return <div key={e}>
                        <DistrictCard
                            name={e}
                            districtsData={stateData[e]}
                        />
                    </div>
                })

            }
        </div>
        </>
    )
}
export default District;