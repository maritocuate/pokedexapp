import { useEffect } from 'react'

interface useInfiniteScrollProps {
  fetchData: (index: number) => void
  offset: number
}

const useInfiniteScroll = ({ fetchData, offset }: useInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollTop = Math.ceil(document.documentElement.scrollTop)
      const offsetHeight = document.documentElement.offsetHeight

      if (windowHeight + scrollTop !== offsetHeight) return
      fetchData(offset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset, fetchData])
}

export default useInfiniteScroll
