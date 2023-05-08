import axios from "axios";
import { useEffect, useState } from "react";

const useFecthData = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const ourRequest = axios.CancelToken.source();

        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token
                });
                let listData = res && res.data.data ? res.data.data : [];
                setData(listData);

            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log("Request cancelled: ", e.message);
                }
                else {
                    console.log(e);
                }
            }
        }

        fetchData();

        return () => {
            ourRequest.cancel("Don't have data");                           // Cleanup
        }

    }, [url]);

    return { data }
}

export default useFecthData;