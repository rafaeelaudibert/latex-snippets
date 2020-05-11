import { GET, POST, PUT, DELETE } from './common.service'

export const createSnippet = ( { name, content, isPublic }, currentUser ) => {
  return POST( 'createSnippet', { name, content, isPublic }, currentUser )
}

export const updateSnippet = ( { _id, name, content, isPublic }, currentUser ) => {
  return PUT( 'updateSnippet', { _id, name, content, isPublic }, currentUser )
}

export const deleteSnippet = ( { _id }, currentUser ) => {
  return DELETE( 'deleteSnippet', { _id }, currentUser )
}

export const getSnippet = ( { _id }, currentUser ) => {
  return GET( `getSnippet?id=${_id}`, currentUser )
}
