import Hero from "../components/Hero";
import {useState, useEffect} from 'react';
import {toast} from 'react-toastify';


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
        <button onClick={() => {toast.success("Toast success")}}>Show toast</button>
        <button onClick={() => {toast.error("Toast error")}}>Show toast error</button>
        </>
    )
};
export default PrivatePage;