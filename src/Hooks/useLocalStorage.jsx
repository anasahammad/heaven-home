
import { useEffect, useState } from "react";



const useLocalStorage = () => {
    const [localData, setLocalData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch("/estate.json")
            const data = await res.json()
            setLocalData(data)
        }
       fetchData()
    }, [])
    return {localData}
};

export default useLocalStorage;