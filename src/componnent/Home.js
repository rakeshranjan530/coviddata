import { StateCard } from "./Card";
import {useHistory } from "react-router";
import Header from "./Header";
import { useState } from "react";
const Home =({stateName,stateSearchName})=>{
    let history = useHistory();
    const handleOnclick =(statename)=>{
        history.push({pathname:`/district/${statename}`,data:stateName[statename]})
    }

    const [volatile, setVolatile] = useState({
        stateData:stateSearchName
    })
    const handleOnSearch =({target})=>{
        const {value} = target;
        const stateSearchValue = stateSearchName.filter(e=>e.toLowerCase().includes(value.toLowerCase()));
        setVolatile((state)=>({
            ...state,
            stateData: stateSearchValue
        }))
    }
    return(
        <>
        <Header handleOnSearch={handleOnSearch}/>
        <div className="container">
            
            {
                volatile?.stateData?.map((e)=>{
                    return <div key={e}>
                        <StateCard
                            statename={e}
                            handleOnclick={handleOnclick}
                        />
                    </div>
                })
            }
        </div>
        </>
    )
}
export default Home;