import { useState, useEffect } from "react";

//this funtion return all the currniesy wrt to curency in array
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency,setData])
    
    // console.log("the data from fetch api")
    // console.log(data);
    return data
}

export default useCurrencyInfo;