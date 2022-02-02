import useFetch from "./useFetch"
import '../App.css'

const ShowMessages = () => {
    const [data] = useFetch('http://localhost:5000/messages')

    return (
        <div className='wrapper-app'>
            <h1>Aqui se muestran los mensajes</h1>
            {data &&
                data.map(
                    (item) => {
                        return <li className="users" key={item.id}>
                                    {item.text}
                                </li>
                    }
                ) 
            }
        </div>
    )
}

export default ShowMessages