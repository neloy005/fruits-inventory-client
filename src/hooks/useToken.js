import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        //JWT
        const email = user?.user?.email;
        console.log('token er jnno aisi', email);

        const getToken = async () => {
            const email = user?.user?.email;
            if (email) {
                const res = await fetch('https://rocky-ravine-30128.herokuapp.com/login', {

                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                })
                const data = await res.json();
                console.log(data)
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user])

    return [token];
}
export default useToken;
