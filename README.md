In this project let's build a **GitHub Profile Visualizer** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a component, displaying that data, **routing** and **context** concepts, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You can request for the feedback after your project submission in the discussions.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">website</a>
- Create a Free account in Figma.
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a free Figma account. Watch the video upto **00:50**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in a Figma screen. Watch the video upto **02:45**.
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from a Figma screen.
  - Click on the Export button to get Export options as shown in the below image.

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding.

</details>

#### API Prerequisites

<details open>
<summary>Click to view</summary>

- What is GitHub?

  - GitHub is a web-based version-control and collaboration platform for software developers. GitHub facilitates social coding by providing a web interface to the Git code repository and management tools for collaboration. GitHub can be thought of as a serious social networking site for software developers. <a href="https://github.com/" target="_blank">Website</a>

- GitHub API:

  - GitHub provides public APIs that allow us to extract the public data of the GitHub users. <a href="https://docs.github.com/en/rest" target="_blank">Read more</a>

- <a href="https://www.iorad.com/player/2052920/Github---How-to-generate-classic-personal-access-tokens">Tutorial to generate classic personal access tokens</a>
</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/9LiB5x6qaZ7EskY8tcAZSe/Github-Profile-Visualizer?type=design&node-id=0-1&mode=design" target="_blank" >here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Home Route**

  - When a user opens the Home Route,

    - When a username is provided in the search input and the button with the search icon is clicked

      - Make an HTTP GET request to the **GitHub User Profile Details API URL** with path parameter value as the username provided in the search input and query parameter `api_key` with the value of GitHub personal access token

      - For example: When the search input value is **kentcdodds** and search icon is clicked, then the **GitHub User Profile Details API URL** will be as follows

      ```js
      const apiUrl = 'https://apis2.ccbp.in/gpv/profile-details/kentcdodds?api_key=289234723783_38'
      ```

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the user profile details received from the response
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Try Again** button is clicked, an HTTP GET request should be made to **GitHub User Profile Details API URL**

    - **Header**

      - When the **GitHub Profile Visualizer** title in the header is clicked, then the page should be navigated to the Home Route
      - When the **Home** link in the Header is clicked, then the page should be navigated to the Home Route
      - When the **Repositories** link in the Header is clicked, then the page should be navigated to the Repository Route
      - When the **Analysis** link in the Header is clicked, then the page should be navigated to the Analysis Route

- **Repository Route**

  - When a user opens the Repository Route

    - Make an HTTP GET request to the **GitHub User Repository Details API URL** with path parameter value as the username provided in the search input in the **Home Route** and query parameter `api_key` with the value of GitHub personal access token
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the list of user repositories received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **GitHub User Repository Details API URL**

  - When a **Repository** item is clicked, then the page should be navigated to the Repository Item Details Route
  - All the header functionalities mentioned in the Home Route should work in this route accordingly
  - When the Repository Route is opened without giving a valid username, then the "No Data" view given in the Figma screens should be displayed.

- **Repository Item Details Route**

  - When an user opens the Repository Item Details Route

    - Make an HTTP GET request to the **GitHub User Repository Item Details API URL** with path parameter value as the username provided in the search input in the **Home Route** and query parameter `api_key` with the value of GitHub personal access token
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the user repositories item details received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **GitHub User Repository Item Details API URL**

  - All the header functionalities mentioned in the Home Route should work in this route accordingly

- **Analysis Route**

  - When a user opens the Analysis Route

    - Make an HTTP GET request to the **GitHub User Analysis Details API URL** with path parameter value as the username provided in the search input in the **Home Route** and query parameter `api_key` with the value of GitHub personal access token
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the user analysis details received from the response
    - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
    - When the **Try Again** button is clicked, an HTTP GET request should be made to **GitHub User Analysis Details API URL**

  - All the header functionalities mentioned in the Home Route should work in this route accordingly
  - When the Analysis Route is opened without giving a valid username, then the "No Data" view given in the Figma screens should be displayed.

- **Not Found Route**

  - When a random path is provided as the URL, then the page should navigate to the Not Found Route

- Users should be able to view the website responsively in mobile view, tablet view as well.

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- Use **Recharts** package to implement given charts
  - Recharts <a href="https://www.npmjs.com/package/recharts" target="_blank" >Documentation</a>.
  - Linear chart implementation <a href="https://codesandbox.io/s/simple-line-chart-g3mus?file=/src/LinearChart.js" target="_blank">CodeSandbox</a>.
  - Pie chart implementation <a href="https://codesandbox.io/s/pie-chart-example-cn47w?file=/src/piechart.js" target="_blank">CodeSandbox</a>.
  - Commit graph implementation <a href="https://codesandbox.io/s/commitgraph-devr4?file=/src/CommitGraph.js" target="_blank">CodeSandbox</a>.

</details>

### Important Note

<details>
<summary>Click to view</summary>
<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - <IndexItem href="api-prerequisites">Click here to know how to create GitHub personal access token</IndexItem>
  - Don't use any third-party packages other than packages mentioned in the **Quick Tips**
  - Use media queries for responsiveness. Instead of rendering the same elements twice for responsiveness.
  - For Mini Projects, You have to use HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, If you use styled components.
  - Refer to the below example for the usage of `data-testid` in the HTML elements.

    - Example: `<div data-testid="repoItem" className="repo-item"/>`.

- **Routes**

  - Render `Home` Route component when the path in URL matches `/`
  - Render `Repository` Route component when the path in URL matches `/repositories`
  - Render `Repository Item Details` Route component when the path in URL matches `/repositories/:repoName`
  - Render `Analysis` Route component when the path in URL matches `/analysis`

- The Failure View images should consist of alt attribute value as `failure view`
- Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" data-testid="loader">
    <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
  </div>
  ```

- **Home Route**

  - The HTML button element with search icon should have the `data-testid` attribute value as **searchButton** to it
  - `HiOutlineSearch` icon from react-icons should be used for the **Search Icon** button
  - `RiBuildingLine` icon from react-icons should be used for the **Building Icon** in Company
  - `IoMdLink` icon from react-icons should be used for the **Link Icon** in Blog
  - `IoLocationOutline` icon from react-icons should be used for the **Location Icon** in Location
  - The website home page image should consist of alt attribute value as `github profile visualizer home page`
  - The user profile picture in the Home Route should have the alt and src as the values of the keys `name` and `avatar_url` from each object in GitHub user profile details Response

- **Repository Route**

  - When the **Repository Route** is opened without giving a valid username, then the page should consists of **No Data Found** image with alt attribute value as `empty repositories`
  - The user profile picture in the Repository Route should have the alt and src as the values of the keys `login` and `avatar_url` in owner from each object in GitHub user repository details Response
  - When the repository API return an empty list, then the No Repositories image should consist of alt attribute value as `no repositories`

- **Analysis Route**

  - When the **Analysis Route** is opened without giving a valid username, then the page should consists of **No Data Found** image with alt attribute value as `empty analysis`
  - The user profile picture in the Analysis Route should have the alt and src as the values of the keys `login` and `avatarUrl` in user from each object in GitHub user analysis details Response
  - When the analysis API return an empty list, then the No Analysis image should consist of alt attribute value as `no analysis`

- **Repositories Item Details Route**

  - The Contributors Profile images should consist of alt attribute value as `contributor profile`

- **Not Found Route**

  - The Not Found image should consist of alt attribute value as `not found`

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- Use the _username_ entered in the search input as a path parameter to the below APIs.

**GitHub User Profile Details API**

#### API: `https://apis2.ccbp.in/gpv/profile-details/{username}`

#### Example: `https://apis2.ccbp.in/gpv/profile-details/kentcdodds`

#### Method: `GET`

#### Description:

Returns a response containing the profile details of the given user

#### Sample Response

```json
{
  "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
  "bio": "Improving the world with quality software · Husband, Father, Latter-day Saint, Teacher, OSS · @remix-run · TestingJavaScript.com · EpicReact.Dev · Be Kind",
  "blog": "https://kentcdodds.com",
  "company": "@remix-run",
  "created_at": "2012-03-04T22:32:01Z",
  "email": "me+github@kentcdodds.com",
  "events_url": "https://api.github.com/users/kentcdodds/events{/privacy}",
  "followers": 22212,
  "followers_url": "https://api.github.com/users/kentcdodds/followers",
  "following": 42,
  "following_url": "https://api.github.com/users/kentcdodds/following{/other_user}",
  "gists_url": "https://api.github.com/users/kentcdodds/gists{/gist_id}",
  "gravatar_id": "",
  "hireable": null,
  "html_url": "https://github.com/kentcdodds",
  "id": 1500684,
  "location": "Salt Lake City, Utah, USA",
  "login": "kentcdodds",
  "name": "Kent C. Dodds",
  "node_id": "MDQ6VXNlcjE1MDA2ODQ=",
  "organizations_url": "https://api.github.com/users/kentcdodds/orgs",
  "public_gists": 236,
  "public_repos": 631,
  "received_events_url": "https://api.github.com/users/kentcdodds/received_events",
  "repos_url": "https://api.github.com/users/kentcdodds/repos",
  "site_admin": false,
  "starred_url": "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kentcdodds/subscriptions",
  "twitter_username": "kentcdodds",
  "type": "User",
  "updated_at": "2021-12-02T21:13:19Z",
  "url": "https://api.github.com/users/kentcdodds"
}
```

**GitHub User Repository Details API**

#### API: `https://apis2.ccbp.in/gpv/repos/{username}`

#### Example: `https://apis2.ccbp.in/gpv/repos/kentcdodds`

#### Method: `GET`

#### Description:

Returns a response containing the list of repositories

#### Sample Response

```json
[
  {
    "allow_forking": true,
    "archive_url": "https://api.github.com/repos/kentcdodds/.kenv/{archive_format}{/ref}",
    "archived": false,
    "assignees_url": "https://api.github.com/repos/kentcdodds/.kenv/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/kentcdodds/.kenv/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/kentcdodds/.kenv/branches{/branch}",
    "clone_url": "https://github.com/kentcdodds/.kenv.git",
    "collaborators_url": "https://api.github.com/repos/kentcdodds/.kenv/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/kentcdodds/.kenv/comments{/number}",
    "commits_url": "https://api.github.com/repos/kentcdodds/.kenv/commits{/sha}",
    "compare_url": "https://api.github.com/repos/kentcdodds/.kenv/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/kentcdodds/.kenv/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/kentcdodds/.kenv/contributors",
    "created_at": "2021-05-25T17:26:22Z",
    "default_branch": "main",
    "deployments_url": "https://api.github.com/repos/kentcdodds/.kenv/deployments",
    "description": null,
    "disabled": false,
    "downloads_url": "https://api.github.com/repos/kentcdodds/.kenv/downloads",
    "events_url": "https://api.github.com/repos/kentcdodds/.kenv/events",
    "fork": false,
    "forks": 0,
    "forks_count": 0,
    "forks_url": "https://api.github.com/repos/kentcdodds/.kenv/forks",
    "full_name": "kentcdodds/.kenv",
    "git_commits_url": "https://api.github.com/repos/kentcdodds/.kenv/git/commits{/sha}",
    "git_refs_url": "https://api.github.com/repos/kentcdodds/.kenv/git/refs{/sha}",
    "git_tags_url": "https://api.github.com/repos/kentcdodds/.kenv/git/tags{/sha}",
    "git_url": "git://github.com/kentcdodds/.kenv.git",
    "has_downloads": true,
    "has_issues": true,
    "has_pages": false,
    "has_projects": true,
    "has_wiki": true,
    "homepage": "",
    "hooks_url": "https://api.github.com/repos/kentcdodds/.kenv/hooks",
    "html_url": "https://github.com/kentcdodds/.kenv",
    "id": 370775161,
    "is_template": false,
    "issue_comment_url": "https://api.github.com/repos/kentcdodds/.kenv/issues/comments{/number}",
    "issue_events_url": "https://api.github.com/repos/kentcdodds/.kenv/issues/events{/number}",
    "issues_url": "https://api.github.com/repos/kentcdodds/.kenv/issues{/number}",
    "keys_url": "https://api.github.com/repos/kentcdodds/.kenv/keys{/key_id}",
    "labels_url": "https://api.github.com/repos/kentcdodds/.kenv/labels{/name}",
    "language": "JavaScript",
    "languages": [
      {"name": "JavaScript", "value": 20784},
      {"name": "TypeScript", "value": 4868}
    ],
    "languages_url": "https://api.github.com/repos/kentcdodds/.kenv/languages",
    "license": null,
    "merges_url": "https://api.github.com/repos/kentcdodds/.kenv/merges",
    "milestones_url": "https://api.github.com/repos/kentcdodds/.kenv/milestones{/number}",
    "mirror_url": null,
    "name": ".kenv",
    "node_id": "MDEwOlJlcG9zaXRvcnkzNzA3NzUxNjE=",
    "notifications_url": "https://api.github.com/repos/kentcdodds/.kenv/notifications{?since,all,participating}",
    "open_issues": 0,
    "open_issues_count": 0,
    "owner": {
      "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
      "events_url": "https://api.github.com/users/kentcdodds/events{/privacy}",
      "followers_url": "https://api.github.com/users/kentcdodds/followers",
      "following_url": "https://api.github.com/users/kentcdodds/following{/other_user}",
      "gists_url": "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/kentcdodds",
      "id": 1500684,
      "login": "kentcdodds",
      "node_id": "MDQ6VXNlcjE1MDA2ODQ=",
      "organizations_url": "https://api.github.com/users/kentcdodds/orgs",
      "received_events_url": "https://api.github.com/users/kentcdodds/received_events",
      "repos_url": "https://api.github.com/users/kentcdodds/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kentcdodds/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/kentcdodds"
    },
    "permissions": {
      "admin": false,
      "maintain": false,
      "push": false,
      "triage": false,
      "pull": true
    },
    "private": false,
    "pulls_url": "https://api.github.com/repos/kentcdodds/.kenv/pulls{/number}",
    "pushed_at": "2021-11-19T00:19:06Z",
    "releases_url": "https://api.github.com/repos/kentcdodds/.kenv/releases{/id}",
    "size": 84,
    "ssh_url": "git@github.com:kentcdodds/.kenv.git",
    "stargazers_count": 18,
    "stargazers_url": "https://api.github.com/repos/kentcdodds/.kenv/stargazers",
    "statuses_url": "https://api.github.com/repos/kentcdodds/.kenv/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/kentcdodds/.kenv/subscribers",
    "subscription_url": "https://api.github.com/repos/kentcdodds/.kenv/subscription",
    "svn_url": "https://github.com/kentcdodds/.kenv",
    "tags_url": "https://api.github.com/repos/kentcdodds/.kenv/tags",
    "teams_url": "https://api.github.com/repos/kentcdodds/.kenv/teams",
    "topics": [],
    "trees_url": "https://api.github.com/repos/kentcdodds/.kenv/git/trees{/sha}",
    "updated_at": "2021-11-19T00:19:09Z",
    "url": "https://api.github.com/repos/kentcdodds/.kenv",
    "visibility": "public",
    "watchers": 18,
    "watchers_count": 18
  },
  "...."
]
```

**GitHub User Repository Item Details API**

#### API: `https://apis2.ccbp.in/gpv/specific-repo/{username}/{repoName}`

#### Method: `GET`

#### Description:

Returns a response containing the details of the Repository

#### Sample Response

```json
{
  "id": 370775161,
  "node_id": "MDEwOlJlcG9zaXRvcnkzNzA3NzUxNjE=",
  "name": ".kenv",
  "full_name": "kentcdodds/.kenv",
  "private": false,
  "owner": {
    "login": "kentcdodds",
    "id": 1500684,
    "node_id": "MDQ6VXNlcjE1MDA2ODQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kentcdodds",
    "html_url": "https://github.com/kentcdodds",
    "followers_url": "https://api.github.com/users/kentcdodds/followers",
    "following_url": "https://api.github.com/users/kentcdodds/following{/other_user}",
    "gists_url": "https://api.github.com/users/kentcdodds/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kentcdodds/subscriptions",
    "organizations_url": "https://api.github.com/users/kentcdodds/orgs",
    "repos_url": "https://api.github.com/users/kentcdodds/repos",
    "events_url": "https://api.github.com/users/kentcdodds/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kentcdodds/received_events",
    "type": "User",
    "site_admin": false
  },
  "html_url": "https://github.com/kentcdodds/.kenv",
  "description": null,
  "fork": false,
  "created_at": "2021-05-25T17:26:22Z",
  "updated_at": "2021-11-19T00:19:09Z",
  "pushed_at": "2021-11-19T00:19:06Z",
  "git_url": "git://github.com/kentcdodds/.kenv.git",
  "ssh_url": "git@github.com:kentcdodds/.kenv.git",
  "clone_url": "https://github.com/kentcdodds/.kenv.git",
  "svn_url": "https://github.com/kentcdodds/.kenv",
  "homepage": "",
  "size": 84,
  "stargazers_count": 18,
  "watchers_count": 18,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "allow_forking": true,
  "is_template": false,
  "topics": [],
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 18,
  "default_branch": "main",
  "permissions": {
    "admin": false,
    "maintain": false,
    "push": false,
    "triage": false,
    "pull": true
  },
  "temp_clone_token": "",
  "network_count": 0,
  "subscribers_count": 1,
  "contributors": [
    {
      "login": "kentcdodds",
      "id": 1500684,
      "node_id": "MDQ6VXNlcjE1MDA2ODQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1500684?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kentcdodds",
      "html_url": "https://github.com/kentcdodds",
      "followers_url": "https://api.github.com/users/kentcdodds/followers",
      "following_url": "https://api.github.com/users/kentcdodds/following{/other_user}",
      "gists_url": "https://api.github.com/users/kentcdodds/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kentcdodds/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kentcdodds/subscriptions",
      "organizations_url": "https://api.github.com/users/kentcdodds/orgs",
      "repos_url": "https://api.github.com/users/kentcdodds/repos",
      "events_url": "https://api.github.com/users/kentcdodds/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kentcdodds/received_events",
      "type": "User",
      "site_admin": false,
      "contributions": 15
    }
  ],
  "lanuages": [
    {"name": "JavaScript", "value": 20784},
    {"name": "TypeScript", "value": 4868}
  ]
}
```

**GitHub User Analysis Details API**

#### API: `https://apis2.ccbp.in/gpv/profile-summary/{username}`

#### Example: `https://apis2.ccbp.in/gpv/profile-summary/kentcdodds`

#### Method: `GET`

#### Description:

Returns a response containing the Analysis Details of the given user

#### Sample Response

```json
{
  "user": {
    "hireable": false,
    "createdAt": 1330900321000,
    "collaborators": 0,
    "diskUsage": 0,
    "followers": 21245,
    "following": 42,
    "id": 1500684,
    "ownedPrivateRepos": 0,
    "privateGists": 0,
    "publicGists": 232,
    "publicRepos": 623,
    "totalPrivateRepos": 0,
    "avatarUrl": "https://www.nicepng.com/png/detail/41-410103_male-profile-round-circle-users-comments-profile-pic.png",
    "blog": "",
    "company": "",
    "email": "",
    "gravatarId": "",
    "htmlUrl": "https://github.com/kentcdodds",
    "location": "Salt Lake City, Utah, USA",
    "login": "kentcdodds",
    "name": "kentcdodds",
    "type": "User",
    "url": "https://api.github.com/users/kentcdodds",
    "plan": null
  },
  "quarterCommitCount": {
    "2012-Q1": 0,
    "2012-Q2": 0,
    "2012-Q3": 0,
    "2012-Q4": 0,
    "2013-Q1": 4,
    "2013-Q2": 120,
    "2013-Q3": 158,
    "2013-Q4": 185,
    "2014-Q1": 230,
    "2014-Q2": 74,
    "2014-Q3": 105,
    "2014-Q4": 30,
    "2015-Q1": 143,
    "2015-Q2": 164,
    "2015-Q3": 218,
    "2015-Q4": 67,
    "2016-Q1": 217,
    "2016-Q2": 100,
    "2016-Q3": 223,
    "2016-Q4": 170,
    "2017-Q1": 322,
    "2017-Q2": 272,
    "2017-Q3": 335,
    "2017-Q4": 138,
    "2018-Q1": 172,
    "2018-Q2": 238,
    "2018-Q3": 211,
    "2018-Q4": 154,
    "2019-Q1": 361,
    "2019-Q2": 504,
    "2019-Q3": 331,
    "2019-Q4": 386,
    "2020-Q1": 443,
    "2020-Q2": 533,
    "2020-Q3": 498,
    "2020-Q4": 626,
    "2021-Q1": 369,
    "2021-Q2": 355,
    "2021-Q3": 603,
    "2021-Q4": 133
  },
  "langRepoCount": {
    "JavaScript": 237,
    "HTML": 24,
    "Unknown": 15,
    "TypeScript": 14,
    "Java": 6,
    "Perl": 3,
    "Objective-C": 3,
    "Shell": 2,
    "CSS": 2
  },
  "langCommitCount": {
    "JavaScript": 6975,
    "TypeScript": 1526,
    "HTML": 326,
    "Unknown": 163,
    "Shell": 100,
    "Objective-C": 53,
    "Perl": 43,
    "CSS": 6,
    "Java": 0
  },
  "repoCommitCount": {
    "old-kentcdodds.com": 1029,
    "kentcdodds.com": 872,
    "bookshelf": 433,
    "testing-workshop": 297,
    "kcd-discord-bot": 272,
    "bucketstreams": 223,
    "react-suspense": 198,
    "kcd-scripts": 190,
    "react-performance": 179,
    "react-hooks": 170
  },
  "timeStamp": 1634914628856
}
```

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Additional Functionality to be added</summary>

- Analysis Route:
  - Users should be able to see the commit history of the last six months in a graph.

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets
