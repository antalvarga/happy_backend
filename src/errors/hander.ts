// Aula2 - 1:42:49
import { ErrorRequestHandler } from 'express';

// Aula2 - 1:49:28 - validação 
import {ValidationError} from 'yup';



interface ValidationErrors {
    [key: string]: string[];
}



// Aula2 - 1:42:05 - Exception handler
const errorHandler: ErrorRequestHandler = ( error, request, response, next) => {
    // Aula2 - 1:49:42
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });
        return response.status(400).json({message: 'Validation fails', errors});
    }




    console.error(error);

    return response.status(500).json({ message: 'Internal babou'})
};

export default errorHandler;
