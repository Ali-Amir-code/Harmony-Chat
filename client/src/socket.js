import { io } from 'socket.io-client';

const SOCKET_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : window.location.origin;

let socket;

export const initSocket = (userId) => {
    socket = io(SOCKET_URL, {
        query: { userId },
        withCredentials: true,
    });
    return socket;
};

export const getSocket = () => {
    if (!socket) throw new Error('Socket not initialized!');
    return socket;
};