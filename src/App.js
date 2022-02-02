import React, {useEffect, useState} from 'react';
import './App.css'
import {useMutation, useQuery} from "@apollo/client";
import {GET_APPOINTMENTS} from "./query/user";


const App = () => {
    const {data, loading, error, refetch} = useQuery(GET_APPOINTMENTS, {
        variables: {parameters: {firstName: "", lastName: "", max: 10, maxDate: "", minDate: ""}}
    })

    const buttonHandler = () => {
        refetch()
        if (!loading) {
            console.log(data)
        }
        
    }

    return (
        <div>
            <button onClick={buttonHandler}>Click</button>
        </div>
    );
};

export default App;
