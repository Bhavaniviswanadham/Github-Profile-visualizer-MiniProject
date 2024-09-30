import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import {v4 as uuid} from 'uuid'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import Loader from 'react-loader-spinner'
import {FaStar, FaRegStar} from 'react-icons/fa'
import {RiGitBranchLine} from 'react-icons/ri'

import Header from '../Header'

import './index.css'

const differentView = {
  inProgress: 'IN_PROGRESS',
  succcess: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}
const colorsList = ['#ff0066', '#ff8000', '#ff3399']

const RepositoryItem = props => {
  const [apiRespose, setResponse] = useState(differentView.initial)
  const [repoItemDetail, setDetail] = useState({})

  const {match} = props
  const {params} = match
  const {repoName} = params

  const username = Cookies.get('username')

  const getApi = async () => {
    setResponse(differentView.inProgress)
    const apiKey = process.env.REACT_APP_GIT_KEY
    const response = await fetch(
      `https://apis2.ccbp.in/gpv/specific-repo/${username}/${repoName}?api_key=${apiKey}`,
    )
    if (response.ok) {
      const data = await response.json()
      const updateData = {
        id: data.id,
        name: data.name,
        description: data.description,
        languages: data.lanuages,
        stargazersCount: data.stargazers_count,
        forksCount: data.forks_count,
        contributors: data.contributors,
        watchersCount: data.watchers_count,
        issuesCount: data.open_issues_count,
      }
      setDetail(updateData)
      setResponse(differentView.succcess)
    } else {
      setResponse(differentView.failure)
    }
  }

  useEffect(() => {
    if (username === undefined || username === '') {
      setResponse(differentView.failure)
    } else {
      getApi()
    }
  }, [username])

  const getContributors = data => (
    <li key={data.id} style={{marginRight: '10px'}}>
      <img
        className="contributors-img"
        alt="contributor profile"
        src={data.avatar_url}
      />
    </li>
  )

  const successView = () => {
    const {
      name,
      description,
      languages,
      stargazersCount,
      forksCount,
      contributors,
      watchersCount,
      issuesCount,
    } = repoItemDetail

    let contributeList
    let balancecount
    if (contributors.length > 4) {
      contributeList = contributors.slice(0, 5)
      balancecount = contributors.length - 4
    } else {
      contributeList = contributors
      balancecount = 0
    }

    return (
      <div className="repo-detail">
        <h1 className="repo-head">{name}</h1>
        <p className="repo-description">{description}</p>
        <ul className="repo-languages">
          {languages.map(eahItem => {
            const background = {
              backgroundColor:
                colorsList[Math.ceil(Math.random() * (colorsList.length - 1))],
            }
            return (
              <li
                className="each-language"
                style={background}
                key={eahItem.value}
              >
                <p style={{textAlign: 'center', display: 'inline'}}>
                  {eahItem.name}
                </p>
              </li>
            )
          })}
        </ul>
        <div className="repos-item-icon-cont">
          <div className="repos-icon-cont">
            <button type="button" className="star-btn">
              {stargazersCount > 0 ? (
                <FaStar className="star-icon" />
              ) : (
                <FaRegStar className="star-icon" />
              )}
            </button>
            <p className="repos-icon-p">{stargazersCount}</p>
          </div>
          <div className="repos-icon-cont">
            <RiGitBranchLine className="git-icon" />
            <p className="repos-icon-p">{forksCount}</p>
          </div>
        </div>
        <div className="commit-total-cont">
          <div className="commit-cont">
            <p className="commit-p">Commits Counts</p>
            <p className="commit-value">
              {watchersCount < 10 ? `0${watchersCount}` : watchersCount}
            </p>
          </div>
          <div className="commit-cont">
            <p className="commit-p">Issues Counts</p>
            <p className="commit-value">
              {issuesCount < 10 ? `0${issuesCount}` : issuesCount}
            </p>
          </div>
        </div>
        <p style={{display: 'none'}}>Watchers Counts</p>
        <div className="contributors">
          <h2>Contributors:</h2>
          <p>{contributors.length} Members</p>
          <ul className="contributors-avatar-cont">
            {contributeList.map(eachItem => getContributors(eachItem))}
            {balancecount > 0 && (
              <li key={uuid()} className="extra-count">
                {balancecount - 5} +
              </li>
            )}
          </ul>
        </div>

        <h1 style={{fontFamily: 'Roboto'}}>Languages :</h1>
        <ResponsiveContainer
          className="responsive-cont"
          width="100%"
          height={300}
        >
          <PieChart className="piechart">
            <Pie
              cx="40%"
              cy="40%"
              data={languages}
              startAngle={0}
              endAngle={360}
              innerRadius="50%"
              outerRadius="80%"
              stroke="#ffffff"
              strokeWidth={1}
              dataKey="value"
            >
              {languages.map((entry, index) => (
                <Cell key={uuid()} name={entry.name} fill={colorsList[index]} />
              ))}
            </Pie>

            <Legend
              iconType="square"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }

  const showLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  const renderFailureView = () => (
    <div className="failure-view">
      <img
        alt="failure view"
        src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713380049/ik5oau3ijw25xzrqttuo.png"
        style={{minWidth: '300px', maxWidth: '450px'}}
      />
      <p className="home-h1 failure-para">
        Something went wrong. Please try again
      </p>
      <button className="retry-btn" type="button" onClick={getApi}>
        Try again
      </button>
    </div>
  )

  const getView = () => {
    switch (apiRespose) {
      case differentView.inProgress:
        return showLoader()
      case differentView.succcess:
        return successView()
      case differentView.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <div className="single-page-repository-cont">
      <Header />
      {getView()}
    </div>
  )
}
export default RepositoryItem
