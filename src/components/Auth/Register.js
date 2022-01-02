import React from 'react'
import registerImage from '../../assets/imagen/register.svg';
import { 
 Link, useHistory
} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/authActions';

export const Register = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [formValues,handleInputChange] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: ''
    })

    const {  firstName,lastName,email,password,gender} = formValues;

    const getValuesSelect = () => {

        return [
            {value: '', descp: 'Gender'},
            {value: '1', descp: 'Male'},
            {value: '0', descp: 'Female'},
        ]
    }

    const onSubmit = e => {

        e.preventDefault();

        //validaciones


        dispatch(register(formValues,history));
    }

    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div className="image-section">
                        <img src={registerImage} alt="Register" />
                    </div>
                    <div className="form-section">
                        <h2>Register</h2>
                        <form onSubmit={onSubmit}>
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
                                                if(gender === el.value){
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

                            <button type="submit">Register</button>
                        </form>
                        

                        <Link to={"/login"} className="link">
                            <p>Already have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
