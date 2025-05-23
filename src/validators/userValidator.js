import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../supabase/client.js';


export function validateUser({ name, email, age, cpf, telefone })
{

    if (!name || !email || !age || !cpf) {
        return {
            status: 400,
            error: `O campo ${validateUser} são obrigatórios.`,
        };
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof age !== 'number' || typeof cpf !== 'string') {
        return {
            status: 400,
            error: `O campos ${validateUser} devem ser do tipo ${DocumentType} e "age" deve ser do tipo ${DocumentType}`,
        };
    }

    if (name.length < 3) {
        return {
            status: 400,
            error: 'O campo "name" deve ter pelo menos 3 caracteres.',
        };
    }
    
    if (!name || !email || !age || !cpf.trim() === ''){
        return{
            status: 400,
            error: `O campo ${validateUser} não pode ser vazio.`,
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            status: 400,
            error: 'O campo "email" deve ser um email válido.',
        };
    }

    //cpf não pode ser vazio (vazio ou só espaços)
    if (cpf === '') {
        return ({
        status: 400,
        error: 'O campo "cpf" não pode ser vazio.',
        });
    }

    //cpf precisa ser um número inteiro positivo
    const cpfNumber = parseInt(cpf, 10);
    if (isNaN(cpfNumber) || cpfNumber <= 0) {
        return ({
        status: 400,
        error: 'O campo "cpf" deve ser um número inteiro positivo.',
        });
    }
    
    //se cpf maior que 11 dígitos
    if (cpf.length !== 11) {
        return ({
        status: 400,
        error: 'O campo "cpf" não pode ter mais de 11 dígitos.',
        });
    }


    const id = uuidv4(); 
    const sucessMessage =  'Usuário criado com sucesso' ;
    const { error } = supabase
        .from('users')
        .insert([
            { id, name, email, age, cpf, telefone } 
        ]);
    if (error) return ({
        status: 400,
        error: error.message,
    });
    return { 
        status: 201, 
        message: sucessMessage,
    };

}

export default validateUser;