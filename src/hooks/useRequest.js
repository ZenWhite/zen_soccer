import { useEffect, useState } from 'react'

import { request } from 'utils/request'

export const useRequest = (...args) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState(null)

  const action = async () => {
    setLoading(true)

    try {
      const raw = await request(...args)
      const data = await raw.json()

      setValue(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return [{ loading, error }, action, value]
}
