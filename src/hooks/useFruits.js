import { useEffect, useState } from "react";

const useFruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('https://rocky-ravine-30128.herokuapp.com/fruit')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])
    return [fruits, setFruits];
}

export default useFruits;