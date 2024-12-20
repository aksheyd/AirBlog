import { Post, UnitPost } from './definitions';

let posts: UnitPost[] = [];

(async () => {
    posts = await loadPosts();
})();

async function loadPosts(): Promise<UnitPost[]> {
    try {
        const base = process.env.NEXT_PUBLIC_URL
        console.log(`Fetching data from ${base}/api/v1/posts`);
        const response = await fetch(base + '/api/v1/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`Error ${error}`);
        return [];
    }
}

export const createPost = async (post: Post): Promise<UnitPost[]> => {
    const id = posts.length + 1;
    const newPost: UnitPost = { ...post, id };
    posts.push(newPost);
    return posts;
}

export const findAll = async (): Promise<UnitPost[]> => posts;