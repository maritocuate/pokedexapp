import { useEffect } from 'react'

interface useInfiniteScrollProps {
  fetchData: (index: number) => void
  offset: number
}

const useInfiniteScroll = ({ fetchData, offset }: useInfiniteScrollProps) => {
  useEffect(() => {
    console.log('1.UE')
    const handleScroll = () => {
      console.log('2.Scroll')
      const windowHeight = window.innerHeight
      const scrollTop = document.documentElement.scrollTop
      const offsetHeight = document.documentElement.offsetHeight
      console.log('windowHeight: ' + windowHeight)
      console.log('scrollTop: ' + scrollTop)
      console.log('offsetHeight: ' + offsetHeight)

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
