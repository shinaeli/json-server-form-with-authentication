import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
    const [loggedData, setLoggedData] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchData () {
            try {
                const response = await fetch(url, options);
                if(!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();  
                setLoggedData([...data]);
                setIsLoading(false);       
            } catch (error) {
                console.log(error);
                setErrorMessage(error.message);
                setIsLoading(false);
                setLoggedData([]);
            }
        }
        fetchData();
        return () => console.log('clean-up ran');
        // eslint-disable-next-line
    }, []);
    
    return {loggedData, errorMessage, isLoading};
}