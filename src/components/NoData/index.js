import Header from '../Header'

import './index.css'

const NoData = () => (
  <div className="nodata-bg-cont">
    <Header />
    <div className="no-data-content">
      <img
        alt="empty repositories"
        src="https://res.cloudinary.com/dxyggtax2/image/upload/c_thumb,w_200,g_face/v1722928181/Frame_8827_aqnki3.png"
      />
      <h4>No Data Found</h4>
      <p>
        GitHub Username is empty, Please provide a valid username for
        Repositories
      </p>
      <button className="button3">
        Go to Home
      </button>
    </div>
  </div>
)

export default NoData
