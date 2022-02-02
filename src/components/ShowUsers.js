import useFetch from "./useFetch"
import '../App.css'

const ShowUsers = () => {
    const [data] = useFetch('http://localhost:5000/users')

    return (
        <div className='wrapper-app'>
            <h1>Aqui se muestran los usuarios</h1>
            {data &&
                data.map(
                    (item) => {
                        return <p key={item.id}>{item.username}</p>
                    }
                ) 
            }
        </div>
    )
}

export default ShowUsers