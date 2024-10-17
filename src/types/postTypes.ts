export interface Post{
    post: {
        slug: string,
        categories: string[],
        title: string,
        descriptionOne: string,
        descriptionTwo: string,
        postImgPath: string,
        tags : string[]
    }
}