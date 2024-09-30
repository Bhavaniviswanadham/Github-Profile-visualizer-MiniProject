import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiOutlineSearch} from 'react-icons/hi'
import {RiBuildingLine} from 'react-icons/ri'
import {IoMdLink} from 'react-icons/io'
import {IoLocationOutline} from 'react-icons/io5'

import Header from '../Header'
import './index.css'

const apiStatusConstance = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    username: '',
    err: '',
    apiStatus: apiStatusConstance.initail,
    profileInfo: {},
  }

  userInput = event => {
    this.setState({username: event.target.value})
  }

  camelCaseConvert = data => ({
    avatarUrl: data.avatar_url,
    login: data.login,
    followers: data.followers,
    following: data.following,
    puplicRepos: data.public_repos,
    name: data.name,
    location: data.location,
    company: data.company,
    bio: data.bio,
    blog: data.blog,
  })

  githubApi = async () => {
    this.setState({apiStatus: apiStatusConstance.inProgress})
    const {username} = this.state
    Cookies.set('username', username, {expires: 1})

    const apiKey = process.env.REACT_APP_GIT_KEY

    const promise = await fetch(
      `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=${apiKey}`,
    )
    const data = await promise.json()
    if (promise.ok === false) {
      this.setState({err: 'Enter the valid github username'})
      this.setState({
        apiStatus: apiStatusConstance.failure,
        username: '',
      })
    } else if (promise.ok) {
      const updateData = this.camelCaseConvert(data)
      this.setState({
        apiStatus: apiStatusConstance.success,
        profileInfo: updateData,
      })
    }
  }

  getInitialPage = () => {
    const {username} = this.state
    Cookies.remove('username')

    return (
      <div className="home-bg-card">
        <div className="input-cont">
          <input
            className="home-input"
            type="search"
            placeholder="Enter Github username"
            onChange={this.userInput}
            value={username}
          />
          <button
            className="searchIcon-container"
            data-testid="searchButton"
            type="button"
            onClick={this.githubApi}
          >
            {' '}
            <HiOutlineSearch className="searchIcon" />{' '}
          </button>
        </div>
        <h1 className="home-head">GitHub Profile Visualizer</h1>
        <img
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713374156/kjmz5yxi90xeqhdnjbuy.png"
          className="home-login-img"
          alt="gitHub profile visualizer home page"
        />
      </div>
    )
  }

  getFailureView = () => {
    const {username, err} = this.state
    return (
      <div className="home-bg-card">
        <div className="input-cont">
          <input
            type="search"
            className="home-input err-input"
            placeholder="Enter Github username"
            onChange={this.userInput}
            value={username}
          />
          <button
            data-testid="searchButton"
            className="searchIcon-container"
            type="button"
            onClick={this.githubApi}
          >
            {' '}
            <HiOutlineSearch className="searchIcon" />
          </button>
        </div>
        <p className="err">{err}</p>
        <h1 className="home-head">GitHub Profile Visualizer</h1>
        <img
          className="home-login-img"
          alt="failure view"
          src="https://res.cloudinary.com/dkk6a7svu/image/upload/v1713380049/ik5oau3ijw25xzrqttuo.png"
        />
        <p className="err-retry">Something went wrong. Please try again</p>
        <button type="button" className="try-again" onClick={this.githubApi}>
          Try again
        </button>
      </div>
    )
  }

  getRenderLoder = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  renderSucessView = () => {
    const {username, profileInfo} = this.state
    const {
      avatarUrl,
      login,
      followers,
      following,
      puplicRepos,
      name,
      location,
      company,
      bio,
      blog,
    } = profileInfo

    return (
      <>
        <div className="home-search success-input">
          <div className="input-cont">
            <input
              className="home-input"
              type="search"
              placeholder="Enter Github username"
              onChange={this.userInput}
              value={username}
            />
            <button
              className="searchIcon-container"
              data-testid="searchButton"
              type="button"
              onClick={this.githubApi}
            >
              {' '}
              <HiOutlineSearch className="searchIcon" />
            </button>
          </div>
          <div className="profile-cont">
            <img className="profile-img" alt={name} src={avatarUrl} />
            <h1 className="profile-name">{name}</h1>
            <p className="profile-desc">{login}</p>
            <p className="profile-desc">
              BIO <br />
              {bio}
            </p>
            <div className="profile-follow-cont">
              <div>
                <p className="por-f">{followers}</p>
                <p className="pro-follow">FOLLOWERS</p>
              </div>
              <div className="hr">
                <hr />
              </div>
              <div>
                <p className="por-f">{following}</p>
                <p className="pro-follow">FOLLOWING</p>
              </div>
              <div className="hr">
                <hr />
              </div>
              <div className="por-f">
                <p className="por-f">{puplicRepos}</p>
                <p className="pro-follow">PUBLIC REPOS</p>
              </div>
            </div>
            <div className="profile-locate-info-cont">
              <div className="company-location-cont">
                <p className="locate-title">Company</p>
                <div className="at-company">
                  <RiBuildingLine className="bulid-icon" />
                  <p>{company}</p>
                </div>
              </div>
              <div className="company-url large-device-comp-url">
                <p className="locate-title">Blog</p>
                <div className="at-company">
                  <IoMdLink className="bulid-icon" />
                  <p>{blog}</p>
                </div>
              </div>
              <div className="company-location-cont">
                <p className="locate-title">Location</p>
                <div className="at-company">
                  <IoLocationOutline className="bulid-icon" />
                  <p>{location}</p>
                </div>
              </div>
            </div>
            <div className="company-url">
              <p className="locate-title">Blog</p>
              <div className="at-company">
                <IoMdLink className="bulid-icon" />
                <p>{blog}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  getPageRender = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstance.initail:
        return this.getInitialPage()
      case apiStatusConstance.inProgress:
        return this.getRenderLoder()
      case apiStatusConstance.failure:
        return this.getFailureView()
      case apiStatusConstance.success:
        return this.renderSucessView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="home-bg-container">
        <Header />
        {this.getPageRender()}
      </div>
    )
  }
}

export default Home
