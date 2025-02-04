import { Application } from '../declarations';
import { todo } from './todo/todo.service';

export const services = (app: Application) => {
  app.configure(todo);
};
