import { environment } from "./environment";

export const routes = {
    postListRoute: environment.apiUrl + '/post/list',
    getUserPseudosRoute: environment.apiUrl + '/userPseudos',
    getUserByPseudoRoute: environment.apiUrl + '/userPseudo/', // requires a user pseudo parameter
    getUserByIdRoute: environment.apiUrl + '/user/', // requires a user ID parameter
    getPostRoute: environment.apiUrl + '/post/', // requires a post id parameter
}