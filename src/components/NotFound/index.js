import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="home-bg-cont">
    <div className="failure-view">
      <img
        className="home-img"
        src="https://res.cloudinary.com/dlij3u1jb/image/upload/v1718696497/no_data_found_ax3wph.jpg"
        alt="page not found"
      />
      <h1 className="home-h1 failure-para not-found-h1">PAGE NOT FOUND</h1>
      <p className="not-found-p">
        we are sorry, the page you requested could not be found Please go back
        to the homepage.
      </p>
      <button className="retry-btn not-found-btn" type="button">
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Go to Home
        </Link>
      </button>
    </div>
  </div>
)

export default NotFound
