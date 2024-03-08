import CommentForm from "../components/comments";
import Logo from "../images/all-n-one-logo.png"
import "./home.css";

export default function home () {
    return (
        <>
        <div className="welcome-page">
            <div>
                <img className="logo" src={Logo}></img>
            </div>
            <div className="welcome-text">
                Welcome to my All n 1 app!
            </div>
        </div>
        <CommentForm/>
        </>
    )
}