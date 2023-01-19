import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WiMoonAltNew } from "react-icons/wi";
import {useEffect, useState} from 'react';
import axios from 'axios';

const RickandMorty = () =>
{

    const [data,setdata] = useState([]);

    useEffect(() => {
       
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
});
return(
    <>
   <div className="background p-md-5 p-sm-4 p-1">
        <div className="container">
               <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center text-break">
            {
            data.map((item) => {
                return (
                <>
                    <div className="col-xxl-4 col-lg-6 col-md-12" key={item.id}>
                        <div className="d-flex m-2 rounded-4 overflow-hidden flex-wrap main_card">
                            <div className="col-sm-4 col-12">
                                <img src={item.image}  className="rounded-top" alt="" style={{width:'100%',height:'100%'}}/>
                            </div>
                            <div className="col-sm-8 col-12 px-3">
                                <div className="top py-2">
                                    <a href="#" className='fw-bolder fs-3 location_hover text-decoration-none text-dark'>
                                        <div>{item.name}</div>
                                    </a>
                                    <div className="fw-bold text-dark">
                                        {
                                            (item.status=='Alive') ? <WiMoonAltNew className='pe-1 text-success'/> : (item.status=='Dead') ? <WiMoonAltNew className='pe-1 text-danger'/> : <WiMoonAltNew className='pe-1 text-secondary'/> 
                                        }
                                        {item.status} - {item.gender} - {item.species}</div>
                                </div>
                                <div className="middle py-2">
                                    <div className="fw-bolder" style={{ color: '#fff' }}>Last known location :</div>
                                    <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                        <div>{item.location.name}</div>
                                    </a>
                                </div>
                                <div className="bottom py-2">
                                    <div className="fw-bolder" style={{ color: '#fff' }}>First seen in :</div>
                                    <a href="#" className='location_hover text-decoration-none text-dark fw-bolder'>
                                        <div>{item.origin.name}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                )
            })
            }
            </div>
        </div>
    </div>
    </>
    );
}

export default RickandMorty;