import axios from 'axios';
import { useEffect ,useState } from "react";

const Demo = () =>
{

    const [data,setdata] = useState([]);

    useEffect(()=>
    {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(function(response){
            //Handel Success
            setdata(response.data.results);
            console.log(response.data.results);
        })
        .then(function(erorr){
            //Handle Error
            console.log(error);
        })
    });

    return(
        <>

        {
            data.map((item)=>{
                return(
                    <>
                    <h1>Name : {item.name}</h1>
                    </>
                )
            })
        }

        </>
    )
}

export default Demo;