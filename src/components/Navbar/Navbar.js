import React,{useState,Fragment} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './Navbar.scss';
import { 
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import { logout } from '../../actions/authActions';
import { useHistory } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import useForm from '../../hooks/useForm';
import { showError, updateUser } from '../../actions/userActions';

export const Navbar = () => {

    const dispatch = useDispatch();
    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const {
        user,
        error
    } = useSelector(state => state.auth);

    let newState = user;
    newState.password = '';

    const [profilePic, setProfilePic] = useState(null);

    const [formValues,handleInputChange] = useForm(newState);


    let { 

        firstName,
        lastName,
        avatar,    
        email,
        password,
        gender, 

    } = formValues;

    const getValuesSelect = () => {

        return [
            {value: '', descp: 'Gender'},
            {value: '1', descp: 'Male'},
            {value: '0', descp: 'Female'},
        ]
    }

    const history = useHistory();
    

    const showOptions = () => {
        setShowProfileOptions(!showProfileOptions);
    }

    const handleSubmit = e => {
        console.log(e);
        e.preventDefault();
        console.log({formValues})
        

        if(formValues.password.length < 6) {
           return dispatch(showError('Password debe contener al menos 6 caractéres'));
           
        }   
        const formData = new FormData();

        for(const key in formValues) {
            if(key === 'avatar') {
                formValues[key] = profilePic;
            }
            formData.append(key,formValues[key]); // crea un objeto donde el key va ser el nombre de la llave y form[key] es el valor de la llave
        }
        
        //dispatch para actualizar el perfil
        dispatch(updateUser(formData));
        setShowProfileOptions(false);
        window.location.reload();
    }

    const closeModal = e => {
        e.stopPropagation();
        setShowProfileModal(false);
    }

    return (

        <>
        <nav id="navbar" className="card-shadow">
            <h2>Chat.io</h2>
            <div className="profile-menu" onClick={showOptions}>
                <img src={avatar} alt="Avatar" height="40" width="40" />
                <p>{firstName +' '+ lastName} </p>
                <FontAwesomeIcon icon='caret-down' className="fa-icon" />

               {
                   showProfileOptions && (
                    <div id="profile-options">
                        <p className="update-profile" onClick={() => setShowProfileModal(true)}>Update Profile</p>
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

        {
                showProfileModal && (

                    <Modal click={setShowProfileModal}>
                        <Fragment key="header">
                            <h1 className="m-0">Update Profile</h1>
                        </Fragment>

                        <Fragment key="body">
                        
                           <form >
                               {
                                   error && (
                                       <div className="bg-error">
                                           {error}
                                       </div>
                                   )
                               }
                                <div className="input-field mb-1">
                                        <input 
                                            type="text" 
                                            name="firstName" 
                                            id="firstName" 
                                            onChange={handleInputChange}
                                            value={firstName}
                                            placeholder="First Name" 
                                        />
                                    </div>
                                    <div className="input-field mb-1">
                                        <input 
                                            type="text" 
                                            name="lastName" 
                                            id="lastName" 
                                            onChange={handleInputChange}
                                            value={lastName}
                                            placeholder="Last Name" 
                                        />
                                    </div>

                                        <div className="input-field mb-1">
                                    <select name="gender" id="gender"
                                            onChange={handleInputChange}
                                        >
                                            {
                                                getValuesSelect().map(el =>{
                                                    if(Number(gender) === Number(el.value)){
                                                        console.log(Number(gender));
                                                        
                                                    return <option key={el.value} selected value={el.value}>{el.descp}</option>
                                                    } else {
                                                        return <option key={el.value} value={el.value}>{el.descp}</option>
                                                    }
                                                })
                                            }                                     
                                        
                                    </select>
                                </div>

                                    <div className="input-field mb-1">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            onChange={handleInputChange}
                                            value={email}
                                            placeholder="Email" 
                                        />
                                    </div>

                                    <div className="input-field mb-2">
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            onChange={handleInputChange}
                                            value={password}
                                            placeholder="Password" 
                                        />
                                    </div>


                                    <div className="input-field mb-2">
                                       <input 
                                            type="file"
                                            onChange={e => {
                                                console.log(e.target.files[0]);
                                                setProfilePic(e.target.files[0])
                                            }}    
                                        />
                                    </div>
                                   
                                   
                           </form>
                        
                        </Fragment>

                        <Fragment key='footer'>
                            <button onClick={closeModal}>
                                Close
                            </button>
                            
                            <button className='btn-success' onClick={handleSubmit}>Update</button>
                        </Fragment>

                    </Modal>
                )
            }
        </>
    )
}
