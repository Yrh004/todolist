import { MemoryService, MemoryServiceOptions } from '@feathersjs/memory';
import { Application } from '../../declarations';

export interface TodoServiceOptions extends Partial<MemoryServiceOptions> {}

export class TodoService extends MemoryService {
  constructor(options: TodoServiceOptions, app: Application) {
    super(options);
  }
}
