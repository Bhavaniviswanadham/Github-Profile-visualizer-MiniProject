import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'

import ContextObject from '../../context/context'
import './index.css'

const Header = props => {
  const [showPopup, setPopup] = useState(false)

  const {match} = props
  const {path} = match

  return (
    <ContextObject.Consumer>
      {value => {
        const {activeTabChange} = value

        const changeActiveTabHome = () => {
          activeTabChange(path)
        }

        const changeActiveTabRepo = () => {
          activeTabChange(path)
        }

        const changeActiveTabAnalysis = () => {
          activeTabChange(path)
        }

        const showPopupFunc = () => {
          setPopup(preve => !preve)
        }

        const popusClassName = showPopup ? 'sm-divese-show' : 'sm-device'
        return (
          <>
            <nav className="nav-bar">
              <h1 className="nav-head">
                <Link style={{textDecoration: 'underline'}} to="/">
                  GitHub Profile Visualizer
                </Link>
              </h1>
              <ul className="nav-content">
                <li onClick={changeActiveTabHome}>
                  <Link to="/" className={path === '/' ? 'active' : 'link'}>
                    Home
                  </Link>
                </li>

                <li onClick={changeActiveTabRepo}>
                  <Link
                    to="/repositories"
                    className={
                      path === '/repositories' ||
                      path === '/repositories/:repoName'
                        ? 'active'
                        : 'link'
                    }
                  >
                    Repositories
                  </Link>
                </li>
                <li onClick={changeActiveTabAnalysis}>
                  <Link
                    to="/analysis"
                    className={path === '/analysis' ? 'active' : 'link'}
                  >
                    Analysis
                  </Link>{' '}
                </li>
              </ul>
              <button className="btn" onClick={showPopupFunc} type="button">
                {' '}
                <VscThreeBars className="nav-small-divise" />
              </button>
            </nav>
            <ul className={popusClassName} onClick={changeActiveTabHome}>
              <li className="li">
                <Link to="/" className={path === '/' ? 'active' : 'link'}>
                  Home
                </Link>
              </li>
              <li className="li" onClick={changeActiveTabRepo}>
                <Link
                  to="/repositories"
                  className={
                    path === '/repositories' ||
                    path === '/repositories/:repoName'
                      ? 'active'
                      : 'link'
                  }
                >
                  Repositories
                </Link>
              </li>
              <li className="li" onClick={changeActiveTabAnalysis}>
                <Link
                  to="/analysis"
                  className={path === '/analysis' ? 'active' : 'link'}
                >
                  Analysis
                </Link>
              </li>
            </ul>
          </>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default withRouter(Header)
