import React,{useEffect, useState} from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch    
} from 'react-router-dom';
import { Login } from '../components/Auth/Login';
import { Register } from '../components/Auth/Register';
import { Chat } from '../components/Chat/Chat';
import { ProtectedRoute } from './ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faSmile,faImage,faSpinner,
    faEllipsisV,faUserPlus,
    faSignOutAlt,faTrash,
    faCaretDown,faUpload,faBell

} from '@fortawesome/free-solid-svg-icons';
import { getCurrentUser } from '../actions/authActions';
import { useDispatch } from 'react-redux';

library.add(faSmile,faImage,faSpinner,
    faEllipsisV,faUserPlus,
    faSignOutAlt,faTrash,
    faCaretDown,faUpload,faBell
);



export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const validateSession = async () => {

            await dispatch(getCurrentUser());
            setChecking(false);
        };

        validateSession();
    }, [dispatch]);

    if(checking) return <h1>Espere...</h1>;

    return (
        <Router>
            <div>
                <Switch>
                    <ProtectedRoute exact path="/" component={Chat} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register}/>
                    <Route render= {() => {
                        return <h1>Page Not Found</h1>
                    }} />
                </Switch>
            </div>
        </Router>
    )
}
