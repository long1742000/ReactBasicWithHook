import { useEffect, useState } from "react"

const CountDown = () => {
    const [count, setCount] = useState(5);
    let timer;

    // componentWillUpdate (render lại nếu count thay đổi)
    useEffect(() => {
        timer = setTimeout(() => {
            setCount(count - 1);
            console.log(count);
        }, 1000)

        if (count == 0) {
            clearTimeout(timer);
            console.log("Cleared time out");
        }

        return () => {
            clearTimeout(timer);
        }

    }, [count])

    return (
        <>
            {count == 0 &&
                <p>Done</p>
            }
            {count > 0 &&
                <p>Time: {count}</p>
            }
        </>
    )
}

export default CountDown;