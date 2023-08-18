import logo from '../images/logo.png';
import logoReverse from '../images/logo-reverse.png';

const Nav = ({minimal}, {authToken}) => {

    //const minimal = true

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? logo : logoReverse }/>
            </div>

            {!authToken && !minimal &&<button className='nav-button '>Log in</button>}
        </nav>
    )
}

export default Nav