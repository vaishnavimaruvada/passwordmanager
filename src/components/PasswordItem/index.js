import './index.css'

const PasswordItem = props => {
  const {initialList, ondelete, showPassword} = props
  const {id, name, url, passwords} = initialList
  const firstname = name.slice(0, 1)
  const passwordPattern = showPassword ? (
    <p className="website-text">{passwords}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )
  const deleted = () => {
    ondelete(id)
  }
  return (
    <div>
      <li>
        <div className="names">
          <h2>{firstname}</h2>
          <div>
            <p>{name}</p>
            <button onClick={deleted}>Delete</button>
          </div>
        </div>
        <p className="pass">
          <span>url</span>:{url}
        </p>
        <p className="pass">
          <span>password</span>:{passwordPattern}
        </p>
      </li>
    </div>
  )
}
export default PasswordItem
