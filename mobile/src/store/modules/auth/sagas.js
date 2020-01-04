import { Alert } from 'react-native'
import { all, takeLatest, put, call, delay } from 'redux-saga/effects'

import api from '~/services/api'

import { signSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password } = payload

    const response = yield call(api.post, 'sessions', {
      email,
      password
    })
    console.tron.log(response.data)
    const { token, user } = response.data

    if (user.provider) {
      Alert.alert('Erro na Login', 'Usuario não pode ser prestador de serviços')
      // yield put(signFailure())
      return
    }
    api.defaults.headers.Authorization = `Bearer ${token}`
    yield delay(3000)
    yield put(signSuccess(token, user))
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    )
    yield put(signFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload
    yield call(api.post, 'users', {
      name,
      email,
      password
    })
  } catch (error) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    )
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
])
