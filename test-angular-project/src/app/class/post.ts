export interface Post{
    id:string;
    idCreator:string;
    creationDate:Date;
    title:string;
    text:string;    
}

export interface PostList{
    posts:Array<Post>
}