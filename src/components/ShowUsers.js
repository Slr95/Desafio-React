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
                        return <li className="users" key={item.id}>
                                    {item.username}
                                </li>
                    }
                ) 
            }
        </div>
    )
}

export default ShowUsers