// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="list-app">
      <img src={imageUrl} className="img" alt={appName} />

      <p className="para-name">{appName}</p>
    </li>
  )
}

export default AppItem
