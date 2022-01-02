import React from 'react'
import LoginImage from '../../assets/imagen/login.svg';
import './Auth.scss';
import { 
    Link, useHistory
} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import useForm from '../../hooks/useForm';
import { login } from '../../actions/authActions';


export const Login = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        email: '',
        password: ''
    });

    const {error} = useSelector(state => state.auth);
    const history = useHistory();

    const { email, password } = formValues;

    const dispatch = useDispatch();

    const startSession = e => {
        e.preventDefault();

        console.log("sdasd");
        
        dispatch(login(formValues,history));
    
        history.push('/')        
    }

    return (
            <div id="auth-container">
                <div id="auth-card">
                    <div className="card-shadow">
                        <div className="image-section">
                            <img src={LoginImage} alt="Login" />
                        </div>
                        <div className="form-section">
                            <h2>Welcome Back</h2>
                            <form onSubmit={startSession}>
                                <div className="input-field mb-1">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Email" 
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="input-field mb-2">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                            </div>

                            <button type="submit">Login</button>
                        </form>
                        <Link to={"/register"} className="link">
                            <p>Don't have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
