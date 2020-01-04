import { Alert } from 'react-native'
import { all, takeLatest, put, call, delay } from 'redux-saga/effects'

import api from '../../../services/api'

import { signSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { id } = payload

    const response = yield call(api.post, `students/${id}/checkins`, {
     id
    })

    const { student_id } = response.data

    api.defaults.headers.student_id = `${student_id}`

    yield delay(3000)
    yield put(signSuccess(student_id))
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    )
    yield put(signFailure())
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
])
