import React from 'react'
import { useSelector } from 'react-redux';
import {
    Route,
    Redirect
} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, ...props}) => { // se recibe el componente actual y las propiedades 

    const { isLoggedIn } = useSelector(state => state.auth);

    return (
        <Route 
            render={componentProps => { // estos props son los que la ruta tiene por aparte de los que recibe de a fuera, estos son los props que se 
                // le envian al componente que va renderizar

                if(isLoggedIn ) {
                    return <Component {...componentProps} /> // retornar un componente si esta logueado
                } else {
                    return <Redirect to="/login" />
                }
            }} 
            {...props} 
        />
    )
}
