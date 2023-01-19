import { checkError, client } from './client';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*, authors(*)');
  return checkError(resp);
}

// export async function getAuthorById(author_id) {
//   const resp = await client.from('authors').select('*').match({ author: author_id });
//   return checkError(resp);
// }