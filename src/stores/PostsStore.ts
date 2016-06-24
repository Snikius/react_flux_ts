
export interface PostData {
    text: string,
    author:string
}

export default class PostsStore {
    get comments(): PostData[] {
        let data:PostData[] = [];

        return data;
    }
}