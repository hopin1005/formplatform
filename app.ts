import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';


const app = createExpressServer({
  routePrefix: '/api',
  controllers: [UserController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(4000);