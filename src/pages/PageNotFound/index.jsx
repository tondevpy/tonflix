

import FotoErro from '../../../public/erro404.png'
import './index.css'
function PageNotFound() {
  return (
    <div className='erropage'>
      <img src={FotoErro} alt="" />
    </div>
  )
}

export default PageNotFound