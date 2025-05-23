import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.use('/users', userRoutes);
 


app.listen(3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
