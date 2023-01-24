import axios from 'axios'

import { apiUrl } from '@Config/Config'
import { IAccount } from '@Types/IAccount'

const route = `${apiUrl}/accounts`

interface IValid {
  valid: boolean
}

export const validatePasswordAsync = async (account: IAccount) => {
  try {
    const res = await axios.get<IValid>(`${route}/validate`, {
      params: account,
    })
    return res.data
  } catch (error) {
    console.error(error)
    return
  }
}

export default {
  validatePasswordAsync,
}
