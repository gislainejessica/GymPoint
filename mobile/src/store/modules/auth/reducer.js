import produce from 'immer'

const INICIAL_STATE = {
  student_id: null,
  signed: false,
  loading: false
}

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true
        break
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.student_id = action.payload.student_id
        draft.signed = true
        draft.loading = false
        break
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false
        break
      }
      case '@auth/SIGN_OUT': {
        draft.student_id = null
        draft.signed = false
        break
      }
      default:
    }
  })
}
