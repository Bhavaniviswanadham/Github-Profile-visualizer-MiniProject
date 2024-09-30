import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {v4 as uuid} from 'uuid'

import Header from '../Header'
import RepoItem from '../RepoItems'
import './index.css'

const constantOfStatus = {
  initial: 'INITIAL',
  inProgress: 'LOADING',
  empty: 'EMPTY',
  noData: 'NODATA',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Repository = props => {
  const [apiStatus, setApiStatus] = useState(constantOfStatus.initial)

  const [repositoryList, setRepository] = useState([])

  const getRepositories = async () => {
    setApiStatus(constantOfStatus.inProgress)
    const username = Cookies.get('username')
    if (username === undefined || username === '') {
      setApiStatus(constantOfStatus.noData)
    } else {
      const apiKey = process.env.REACT_APP_GIT_KEY

      const url = `https://apis2.ccbp.in/gpv/repos/${username}?api_key=${apiKey}`
      const promise = await fetch(url)
      if (promise.ok) {
        const data = await promise.json()
        if (data.length > 0) {
          const formattedReposList = data.map(eachItem => ({
            name: eachItem.name,
            description: eachItem.description,
            languages: eachItem.languages,
            id: eachItem.id,
            stargazersCount: eachItem.stargazers_count,
            forksCount: eachItem.forks_count,
            avatarUrl: eachItem.owner.avatar_url,
            login: eachItem.owner.login,
          }))
          setRepository(formattedReposList)
          setApiStatus(constantOfStatus.success)
        } else {
          setApiStatus(constantOfStatus.empty)
        }
      } else {
        setApiStatus(constantOfStatus.failure)
      }
    }
  }

  useEffect(() => {
    getRepositories()
  }, [])

  const pushToHome = () => {
    const {history} = props
    history.push('/')
  }

  const showLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  const emptyView = () => (
    <div className="empty-repo-cont">
      <img
        style={{minWidth: '300px', maxWidth: '450px'}}
        alt="no repositories"
        src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713846282/savx8zla5j8zhawxwu8u.png"
      />
      <h1 style={{fontFamily: 'Roboto', textAlign: 'center'}}>
        No Repositories Found!
      </h1>
    </div>
  )

  const noDataView = () => (
    <div className="empty-repo-cont">
      <img
        alt="empty repositories"
        src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713866849/gl29oaabb5z4yxoadspg.png"
        className="empty-repo-img"
      />
      <h1>No Data Found</h1>
      <p>
        GitHub username is empty, please provide a valid username for
        Repositories
      </p>
      <button type="button" className="no-data-btn" onClick={pushToHome}>
        Go to Home
      </button>
    </div>
  )

  const renderFailureView = () => (
    <div className="empty-repo-cont">
      <img
        style={{minWidth: '300px', maxWidth: '450px'}}
        alt="failure view"
        src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713380049/ik5oau3ijw25xzrqttuo.png"
      />
      <p style={{fontFamily: 'Roboto', textAlign: 'center'}}>
        Something went wrong. Please try again
      </p>
      <button className="retry-btn" type="button" onClick={getRepositories}>
        Try again
      </button>
    </div>
  )

  const successView = () => (
    <div className="repositories">
      <h1>Repositories</h1>
      <div className="owner">
        <img alt={repositoryList[0].login} src={repositoryList[0].avatarUrl} />
        <h1>{repositoryList[0].login}</h1>
      </div>
      <ul key={uuid()} data-testid="repoItem" className="repos-list-cont">
        {repositoryList.map(eachItem => (
          <RepoItem key={eachItem.id} repo={eachItem} />
        ))}
      </ul>
    </div>
  )

  const getViews = () => {
    switch (apiStatus) {
      case constantOfStatus.inProgress:
        return showLoader()
      case constantOfStatus.success:
        return successView()
      case constantOfStatus.empty:
        return emptyView()
      case constantOfStatus.noData:
        return noDataView()
      case constantOfStatus.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <div className="repo-bg-cont">
      <Header />
      {getViews()}
    </div>
  )
}
export default Repository
