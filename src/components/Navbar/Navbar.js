import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './Navbar.scss';
import { 
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import { logout } from '../../actions/authActions';
import { useHistory } from 'react-router-dom';

export const Navbar = () => {

    const dispatch = useDispatch();
    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const history = useHistory();
    const {
        user:{
            firstName,
            lastName,
            avatar
        }
    } = useSelector(state => state.auth);

    const showOptions = () => {
        setShowProfileOptions(!showProfileOptions);
    }

    return (
        <nav id="navbar" className="card-shadow">
            <h2>Chat.io</h2>
            <div className="profile-menu" onClick={showOptions}>
                <img src={avatar} alt="Avatar" height="40" width="40" />
                <p>{firstName +' '+ lastName} </p>
                <FontAwesomeIcon icon='caret-down' className="fa-icon" />

               {
                   showProfileOptions && (
                    <div id="profile-options">
                        <p>Update Profile</p>
                        <p onClick={() => {
                            dispatch(logout())
                            history.replace('/login');
                        }
                        } >Logout</p>
                    </div>
                   )
               }
            </div>
        </nav>
    )
}
