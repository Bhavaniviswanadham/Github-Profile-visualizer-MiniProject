import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {v4 as uuidv4} from 'uuid'
import './index.css'

// Function to generate random colors
const generateRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`

const PiechartComponent = props => {
  const {piechartData, isLastPie} = props
  const spreadedData = {...piechartData}
  // const spreadedData = {
  //   JavaScript: 237,
  //   HTML: 24,
  //   Unknown: 15,
  //   TypeScript: 14,
  //   Java: 6,
  //   Meta: 237,
  //   Black: 24,
  // }

  // for convert object to array of objects with key name and count
  const data = Object.entries(spreadedData).map(([name, count]) => ({
    name,
    count,
  }))

  const CustomLegend = ({payload}) => (
    <ul
      className={`legend-ul-cont analysis-legend ${
        isLastPie ? 'customLegendOne' : ''
      }`}
    >
      {payload.map(entry => (
        <li
          className="legend-li-cont"
          key={uuidv4()}
          style={{color: '#cbd5e1'}}
        >
          <span
            className="legend-icon"
            style={{
              backgroundColor: entry.color,
              width: '16px',
              height: '16px',
              display: 'inline-block',
              marginRight: '15px',
            }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  )

  const colors = data.map(() => generateRandomColor())

  const lastPieClassName = isLastPie ? 'last-pie-cont' : ''

  return (
    <>
      <ResponsiveContainer
        className={`responsive-analysis-cont ${lastPieClassName} ${
          isLastPie ? 'last-pie-md' : ''
        }`}
        width="100%"
        // width={100} for passing testcases
        height={400}
      >
        <PieChart>
          <Pie
            cx="40%"
            cy="50%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="50%"
            outerRadius="80%"
            stroke="#ffffff"
            strokeWidth={1}
            dataKey="count"
          >
            {data.map((entry, index) => (
              <Cell
                key={uuidv4()}
                name={entry.name}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>

          <Legend
            iconType="square"
            layout="vertical"
            verticalAlign="middle"
            align="right"
            content={<CustomLegend />}
          />
        </PieChart>
      </ResponsiveContainer>
      {isLastPie && (
        <ResponsiveContainer className="last-pie-sm" width="100%" height="100%">
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              startAngle={0}
              endAngle={360}
              innerRadius="50%"
              outerRadius="80%"
              stroke="#ffffff"
              strokeWidth={1}
              dataKey="count"
            >
              {data.map((entry, index) => (
                <Cell
                  key={uuidv4()}
                  name={entry.name}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Legend
              iconType="square"
              layout="vertical"
              verticalAlign="bottom"
              align="center"
              content={<CustomLegend />}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

export default PiechartComponent
