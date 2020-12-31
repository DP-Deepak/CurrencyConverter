import * as express from 'express';
import { connectDB } from './src/config/db';
import { envVariable } from './src/config/configuration';
import { router } from './src/router';
import { errorHandler, notFoundRoute } from './src/libs';


const app: any = express()
// Connect DataBase
connectDB();
const PORT = envVariable.port

app.use(express.json());
app.get('/', (req, res) => res.send('API running'))

// Define Routes
app.use('/api', router);
app.use(notFoundRoute);
app.use(errorHandler);


app.listen(PORT, () => console.log('Server started on PORT:', PORT))
