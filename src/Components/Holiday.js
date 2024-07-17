import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHolidays";

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(0); // Inizializzato a 0 se è più appropriato

    const nextHoliday = () => {
        setSelected((prevValue) => (prevValue + 1) % data.length);
    };

    const prevHoliday = () => {
        setSelected((prevValue) => (prevValue - 1 + data.length) % data.length);
    };

    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data.data); // Assicurati che la struttura dei dati sia corretta
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (data.length > 0) {
        return (
            <SingleHoliday
                {...data[selected]}
                next={nextHoliday}
                prev={prevHoliday}
            />
        );
    } else {
        return <h4>No vacanza</h4>;
    }
};

export default Holiday;