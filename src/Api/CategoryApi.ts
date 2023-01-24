import axios from 'axios'

import { apiUrl } from '@Config/Config'
import { ICategory } from '@Types/ICategory'

const route = `${apiUrl}/categories`

export const getAllAsync = async () => {
  try {
    const res = await axios.get(route, {
      params: {},
    })
    return res.data
  } catch (error) {
    console.error(error)
    return
  }
}

export const createAsync = async (body: ICategory) => {
  try {
    const res = await axios.post(route, body)
    return res.data
  } catch (error) {
    return { message: 'erorr when call API' }
  }
}

export default {
  getAllAsync,
  createAsync,
}
