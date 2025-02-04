import { Application } from './declarations';
import { todo } from './services/todo/todo.service';

export const services = (app: Application) => {
  app.configure(todo);
};
