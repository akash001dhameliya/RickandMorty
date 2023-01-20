import { PuffLoader } from "react-spinners";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Loader = () =>
{
    return(
        <>
        <div className="row">
            <div className="col-12 w-100 d-flex align-items-center justify-content-center load">
                <PuffLoader color="#000" />
            </div>
        </div>
        </>
    );
}

export default Loader;