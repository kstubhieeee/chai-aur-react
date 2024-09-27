import { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/kstubhieeee")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [data])

    return (
        <div className="text-center m-4 bg-black text-white p-4 text-3xl">
            Github username : {data.login}
            <br />
            <br />
            Github followers : {data.followers}
            <br />
            <br />
            <img src={data.avatar_url} className="rounded-full" style={{ marginLeft: "500px" }} alt="" />
        </div>
    )
}

export default Github
