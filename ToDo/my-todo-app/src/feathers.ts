import feathers from '@feathersjs/client';
import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client'; // Import socketio explicitly
import authentication from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030');
const app = feathers();

app.configure(socketio(socket)); // Use imported socketio module
app.configure(authentication()); // Explicitly configure authentication

export const todoService = app.service('todos');

export default app;
