import { Space } from 'antd'
import { Link } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Space direction="vertical">
        <Link to="/project">Project Form</Link>
        <Link to="/add">Add Request Form</Link>
        <Link to="/other">Other Request Form</Link>
        <Link to="/add-with-project">Add Request With Project Form</Link>
        <Link to="/other-with-project">Other Request With Project Form</Link>
      </Space>
    </div>
  )
}

export default App
