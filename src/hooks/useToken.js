import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        //JWT
        const email = user?.user?.email;
        if (email) {
            fetch('https://rocky-ravine-30128.herokuapp.com/login', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('hi', data);
                    setToken(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken);

                })
        }
    }, [user])

    return [token];
}
export default useToken;