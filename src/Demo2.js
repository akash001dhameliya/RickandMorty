import { useEffect } from 'react';

const Demo2 = () =>
{

    useEffect(()=>{

        axios.get('')
        .then(function(response){
            //Handle Success
            console.log(response);
        })
        .then(function(error){
            //Handle Error
            console.log(error);
        })

    });

    return(
        <>

        </>
    )
}

export default Demo2;