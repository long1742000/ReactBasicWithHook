import React, { useState, useEffect } from 'react';

const Home = (props) => {
    // state
    let [user, setUser] = useState({ name: '', age: '', address: '' });

    const changeName = (event) => {
        setUser(prevState => ({
            ...prevState,
            name: event.target.value
        }));
    }

    const changeAge = (event) => {
        setUser(prevState => ({
            ...prevState,
            age: event.target.value
        }));
    }

    const changeAddress = (event) => {
        setUser(prevState => ({
            ...prevState,
            address: event.target.value
        }));
    }

    const sendData = () => {
        if (!user.name || !user.age || !user.address) {
            alert("Please type full input !!!");
            return;
        }
        document.getElementById("data").innerHTML = `You are ${user.name} ${user.age} years old, living in ${user.address}`;
        console.log(user);
    }

    //Effect
    useEffect(() => {
        if (!user.name && !user.age && !user.address) {
            document.getElementById("data").innerHTML = ``;
        }
    })

    useEffect(() => {
        console.log("componentDidMount");
    }, [])

    useEffect(() => {
        return () => {
            console.log("componentWillUnmount");
        }
    }, [])

    return (
        <>
            <p>{props.mess}</p>
            <input type='text' onChange={(event) => { changeName(event) }} placeholder='Name'></input>
            <br />
            <input type='text' onChange={(event) => { changeAge(event) }} placeholder='Age'></input>
            <br />
            <input type='text' onChange={(event) => { changeAddress(event) }} placeholder='Address'></input>
            <br />
            <button onClick={() => { sendData() }}>Send data</button>
            <br />
            <p id="data"></p>
        </>
    )
}

export default Home;