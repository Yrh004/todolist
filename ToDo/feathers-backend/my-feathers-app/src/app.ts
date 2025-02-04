import { feathers } from '@feathersjs/feathers';
import { Application } from './declarations';
import socketio from '@feathersjs/socketio';

const app: Application = express(feathers());

app.configure(socketio());  // Ensure this line exists

function express(arg0: any): Application {
  throw new Error('Function not implemented.');
}
