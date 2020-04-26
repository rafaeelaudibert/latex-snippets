import { GET, POST, PUT, DELETE } from './common.service'

export const createSnippet = ( { name, content, isPublic, userId }, currentUser ) => {
  return POST( 'createSnippet', { name, content, isPublic, userId }, currentUser )
}

export const updateSnippet = ( { id, name, content, isPublic }, currentUser ) => {
  return PUT( 'updateSnippet', { id, name, content, isPublic }, currentUser )
}

export const deleteSnippet = ( { id }, currentUser ) => {
  return DELETE( 'deleteSnippet', { id }, currentUser )
}

export const getSnippet = ( { id }, currentUser ) => {
  return GET( `getSnippet?id=${id}`, currentUser )
}
