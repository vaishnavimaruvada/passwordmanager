import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    initialList: [],
    showPassword: false,
  }

  onChangewebsite = event => {
    this.setState({website: event.target.value})
  }

  ondelete = id => {
    const {initialList} = this.state
    const deletedList = initialList.filter(each => each.id !== id)
    this.setState({initialList: deletedList})
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onaddpassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordRecord = {
      url: website,
      name: username,
      passwords: password,
      id: uuidv4(),
    }
    this.setState(prevState => ({
      initialList: [...prevState.initialList, newPasswordRecord],
    }))
  }

  render() {
    const {website, username, password, initialList, showPassword} = this.state
    console.log(initialList)

    return (
      <div className="appcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
          alt="logo"
        />
        <div className="addpassword">
          <div className="container">
            <p>add Password</p>
            <form className="form-control">
              <div className="websitecon">
                <input type="text" onChange={this.onChangewebsite} />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="website"
                />
              </div>
              <div className="websitecon">
                <input type="text" onChange={this.onChangeUser} />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="website"
                />
              </div>
              <div className="websitecon">
                <input type="password" onChange={this.onChangePassword} />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="website"
                />
              </div>
              <button
                className="addbtn"
                onClick={this.onaddpassword}
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="logoimg"
          />
        </div>
        <div className="addpasswords">
          <p>Your passwords</p>
          <hr />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-input"
              id="checkbox"
              onChange={this.onCheckChange}
            />
            <label htmlFor="checkbox" className="checkbox-label">
              Show Passwords
            </label>
          </div>

          <div className="items">
            <ul>
              {initialList.map(each => (
                <PasswordItem
                  showPassword={showPassword}
                  initialList={each}
                  ondelete={this.ondelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
