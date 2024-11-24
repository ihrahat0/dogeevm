import { useEffect, useState } from 'react'

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd'

export const useDogePrice = () => {
  const [dogePrice, setDogePrice] = useState<number>(0)

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(COINGECKO_API_URL)
        const data = await response.json()
        setDogePrice(data.dogecoin.usd)
      } catch (error) {
        console.error('Error fetching DOGE price:', error)
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return dogePrice
}
