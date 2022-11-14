import { environment } from "./environment";

export const routes = {
    postListRoute: environment.apiUrl + '/post/list',
    getUserPseudosRoute: environment.apiUrl + '/user',
    getUserRoute: environment.apiUrl + '/user/', // requires a user pseudo parameter
    getPostRoute: environment.apiUrl + '/post/', // requires a post id parameter
}