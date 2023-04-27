import style from "../styles/Navbar.module.css";
import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreaters } from "../state/index";


export default function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = useSelector(state => state.login);
    const theme = useSelector(state => state.theme);

    if (theme) {
        // document.body.style = 'background: red;';
        document.body.classList.add(style.background_dark);
    }
    else {
        // document.body.style = 'background: green;';
        document.body.classList.remove(style.background_dark);
    }
    // const [login, SetLogin] = useState([Boolean(localStorage.getItem('authToken'))]);
    // let navigate=useNavigate();
    const handleLogout = () => {
        // SetLogin(false)
        dispatch(actionCreaters.setLogin(false))
        localStorage.removeItem("authToken");
        // navigate('/');
    }

    return (
        <>
            <div className={style.sticky_nav}>
                <div className={`${style.navbar} ${theme ? style.background_dark : null}`}>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <ul className={`${style.nav_ul} ${style.left}`} id="left">
                            <li><img className={`${style.fclogo}`} id='fclogo' src='https://img.icons8.com/color/48/null/gallery.png' alt='fc logo' /></li>
                            <li><h2 className={`${style.fc}`} id="fc">Image Gallery</h2></li>
                        </ul>
                    </Link>

                    {/* central section */}
                    <div className={style.search_area}>
                        <input className={style.search_bar} id="search" type="text" placeholder="Search"></input>
                        <img className={style.search_icon}
                        onClick={()=>{navigate(`/search?q=${document.getElementById('search').value}`)}}
                        alt="search"
                        src="https://img.icons8.com/glyph-neue/64/null/search--v1.png" />
                    </div>

                    <ul className={`${style.nav_ul} ${style.right} ${theme ? style.background_dark : null}`} id="right">
                        <li onClick={() => {
                            dispatch(actionCreaters.setThemeDark(!theme));
                            localStorage.setItem('theme', theme);
                            console.log(theme);
                            console.log('local storage ', localStorage.getItem('theme', theme));
                        }}>
                            <div className={style.theme}>
                                {theme ?
                                    <img alt='toggle theme'
                                        src="https://img.icons8.com/ios/50/null/moon-symbol.png" /> :
                                    <img alt='toggle theme'
                                        src="https://img.icons8.com/ios/50/ffffff/sun--v1.png" />
                                }
                            </div>
                        </li>
                        <li className={style.login} onClick={() => navigate("/")}>
                            Home
                        </li>
                        <li className={style.login} onClick={() => navigate("/about")}>
                            About Us
                        </li>
                        <li onClick={() => {
                            // SetLogin(true);
                            dispatch(actionCreaters.setLogin(!login))
                        }} className={style.login}>
                            {
                                <div><p id='login'>{!login ? "Login" : "LogOut"}</p></div>
                            }
                        </li>
                        {login ? <>
                            <li>
                                <div>
                                    <img className={`${style.profile}`} src="https://img.icons8.com/windows/32/ffffff/user-male-circle.png" alt="profile" id="profile" />
                                </div>
                            </li>
                        </> : null}
                    </ul>
                </div>
            </div>
        </>
    );
}