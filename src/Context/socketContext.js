import React, { createContext, useContext, useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import { useDispatch,useSelector } from 'react-redux';

export const SocketContext = createContext();

//exportar el provider

export const SocketProvider = ({ children }) => {
  const { online, socket, conectarSocket, desconectarSocket } = useSocket(
    "http://localhost:5000"
  );

 
  const { isLoggedIn,user  } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      // si la persona se ha logueado entonces el socket se conecta con el servidor
      conectarSocket(); // como la funcion esta memorizada  siempre va renderizar la misma instancia de la funcion de conectarSocket
    }
  }, [isLoggedIn, conectarSocket]);

  useEffect(() => {
    if (!isLoggedIn) {
      // si la persona ha cerrado sesion, el socket se desconecta del servidor

      desconectarSocket(); // como la funcion esta memorizada  siempre va renderizar la misma instancia de la funcion de conectarSocket

      //lista-usuarios
    }
  }, [isLoggedIn, desconectarSocket]);

  useEffect(() => {
    socket?.emit("join",user);
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{  }}>
      {children}
      {/** Propiedad que permite proveer la informacion del context a los componentes hijos que rodea */}
    </SocketContext.Provider>
  );
};
