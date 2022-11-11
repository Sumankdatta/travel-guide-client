import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Swanky Travels`;
    },[title])
}

export default useTitle;