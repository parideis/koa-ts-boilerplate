/* istanbul ignore file */

import { injectable } from 'inversify';
import { InversifyKoaServer } from 'inversify-koa-utils';
import Koa from 'koa';
import container from './config/dic';
import { init } from './loaders/init';
import swagger from './config/swagger';
import './subscribers/register'; // all subscribers need to be imported before use

@injectable()
class App {
  protected app: Koa;

  constructor() {
    this.app = new Koa();
  }

  init(): Koa {
    // init services, middleware
    init(this.app);

    const builtApp = new InversifyKoaServer(container, undefined, undefined, this.app).build();

    // add swagger docs
    builtApp.use(swagger.routes()).use(swagger.allowedMethods());

    return builtApp;
  }
}

export default App;
