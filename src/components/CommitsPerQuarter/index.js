import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const CommitsPerQuarter = props => {
  let {quarterCommitCount} = props
  const spreadedData = {...quarterCommitCount}

  // for convert object to array of objects with key name and commits
  quarterCommitCount = Object.entries(spreadedData).map(([name, commits]) => ({
    name,
    commits,
  }))

  return (
    <div className="quarter-commit-cont">
      <ResponsiveContainer width="100%" height={285}>
        <LineChart
          data={quarterCommitCount}
          width="100%"
          margin={{top: 5, right: 30, bottom: 5}}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={false}
            vertical
            stroke="#3B82F6"
          />
          <XAxis dataKey="name" stroke="#3B82F6" strokeWidth={2} />
          <YAxis stroke="#3B82F6" strokeWidth={2} />
          <Tooltip />
          <Line
            type="linear"
            dataKey="commits"
            stroke="#3B82F6"
            strokeWidth={2}
            activeDot={{r: 8}}
            dot={{fill: '#3B82F6'}}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="quarter-p">Commits Per Quarter</p>
    </div>
  )
}

export default CommitsPerQuarter
