import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faSlack, faInstagram, faTwitter, faDiscord} from '@fortawesome/free-brands-svg-icons'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="Socials" >
        <a href = "https://github.com/KnightHacks"><FontAwesomeIcon icon = {faGithub} margin = "5px" size = "5x" color = "ffffff"></FontAwesomeIcon></a>
        <a href = "https://www.instagram.com/knighthacks/"><FontAwesomeIcon icon = {faInstagram} size = "5x" color = "ffffff"/></a>
        <a href = "https://www.facebook.com/KnightHacks/"><FontAwesomeIcon icon = {faFacebook} size = "5x" color = "ffffff"/></a>
        <a href = "https://twitter.com/KnightHacks?lang=en/"><FontAwesomeIcon icon = {faTwitter} size = "5x"/></a>
        <a href = "https://discord.gg/Kv5g9vf"><FontAwesomeIcon icon = {faDiscord} size = "5x"/></a>
        <a href = "http://knighthacks.slack.com/"><FontAwesomeIcon icon = {faSlack} size = "5x"/></a>
        </div>
    )
  }
  
  export default Navbar