import {Link} from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import {FaStar, FaRegStar} from 'react-icons/fa'
import {RiGitBranchLine} from 'react-icons/ri'

import './index.css'

const colorsList = [
  '#ff3399',
  '#80ff00',
  '#ff3300',
  '#ffcc00',
  '#990099',
  ' #034efc',
  '#e600e6',
  '#339933',
  '#99ff33',
]

const RepoItem = props => {
  const {repo} = props
  const {name, description, languages, stargazersCount, forksCount, id} = repo

  return (
    <li key={id} className="single-repo-cont">
      <Link style={{textDecoration: 'none'}} to={`/repositories/${name}`}>
        <h1 style={{fontSize: '25px'}} className="repo-head">
          {name}
        </h1>
        <p className="repo-description">{description}</p>
        <ul className="repo-languages">
          {languages.map(eahItem => {
            const background = {
              backgroundColor:
                colorsList[Math.ceil(Math.random() * (colorsList.length - 1))],
            }
            return (
              <li className="each-language" style={background} key={uuid()}>
                <p style={{display: 'inline'}}>{eahItem.name}</p>
              </li>
            )
          })}
        </ul>
        <div className="repos-item-icon-cont">
          <div className="repos-icon-cont">
            <button type="button" className="star-btn">
              {stargazersCount > 0 ? (
                <FaStar className="star-icon fill-start" />
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
      </Link>
    </li>
  )
}

export default RepoItem
