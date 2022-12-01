import { environment } from "./environment";

export const routes = {
    postListRoute: environment.apiUrl + '/post/list',
    getUserPseudosRoute: environment.apiUrl + '/userPseudos',
    emailExistsRoute: environment.apiUrl + '/usersEmails/', // requires a user email parameter
    pseudoExistsRoute: environment.apiUrl + '/usersPseudo/', // requires a user pseudo parameter
    getUserByPseudoRoute: environment.apiUrl + '/userPseudo/', // requires a user pseudo parameter
    getUserByIdRoute: environment.apiUrl + '/user/', // requires a user ID parameter
    getPostRoute: environment.apiUrl + '/post/', // requires a post id parameter
    createUserRoute: environment.apiUrl + '/user',
    swaggerRoute:environment.apiUrl+'/docs', // link to API Swagger documentation
}