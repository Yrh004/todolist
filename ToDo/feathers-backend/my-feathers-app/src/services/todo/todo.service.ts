import { TodoService, TodoServiceOptions } from './todo.class';
import { Application } from '../../declarations';

export const todoPath = 'todos';

export const todo = (app: Application) => {
  app.use(todoPath, new TodoService({ multi: true } as TodoServiceOptions, app));

  // Ensure TypeScript correctly recognizes the service
  const service = app.service(todoPath);

  service.hooks({}); // hooks should now be available
};
