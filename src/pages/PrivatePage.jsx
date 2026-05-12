import Hero from "../components/Hero";
import {useState, useEffect} from 'react';


const PrivatePage = () => {

    const [names, setNames] = useState([]);

    useEffect(() => {
    const fetchNames = () => {
        setNames(['Alice', 'Bob', 'Charlie']);
    }
    fetchNames();
}, []);


    return (
        <>
        <Hero />
        <ul>
            {names.map((name, index) => (
                <li key = {index}>{name}</li>
            ))}
        </ul>
        </>
    )
};
export default PrivatePage;