'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps?: any
  }
}

export const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  const initYandexMap = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    window.ymaps.ready(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-new, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      const map = new window.ymaps.Map('map', {
        center: [55.971078, 37.935827],
        zoom: 17,
      })

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      map.geoObjects.add(new window.ymaps.Placemark([55.971078, 37.935827], {}))
    })
  }

  useEffect(() => {
    const isInitYandexMap = !!mapRef.current.childNodes.length

    if (window.ymaps && !isInitYandexMap) {
      initYandexMap()
    }
  }, [])

  return (
    <>
      <div ref={mapRef} id='map' className='w-full max-w-full h-[400px]' />
      <Script
        async
        src='https://api-maps.yandex.ru/2.1/?apikey=08e724a3-f438-4378-9b9d-264c64194743&lang=ru_RU'
        onLoad={initYandexMap}
      />
    </>
  )
}
