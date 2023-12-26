
import {FaRocket} from "react-icons/fa"

import "./error.css"
const Error = () => {
  return (
    <div className='Page_Error'>
      <div className='container' >
        <p>Error 404  (+_+)!</p>
        <p>pagina não encontrada</p>
        <FaRocket size={30} />
      </div>
    </div>
  );
}

export default Error;