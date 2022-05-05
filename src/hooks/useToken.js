import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        //JWT
        console.log(user);
        const email = user?.user?.email;
        if (email) {
            fetch('http://localhost:5000/login', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('hi', data);
                    setToken(data.accessToken);
                    localStorage.setItem('accessToken', data.accessToken);

                })
        }
    }, [user])

    return [token];
}
export default useToken;