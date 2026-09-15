'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import type { Map as MlMap } from 'maplibre-gl'
import { SITE } from '@/lib/site'

function MapInner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MlMap | null>(null)

  useEffect(() => {
    let canceled = false
    ;(async () => {
      try {
        const ml = await import('maplibre-gl')
        if (canceled || !containerRef.current) return
        const map = new ml.Map({
          container: containerRef.current,
          style: 'https://tiles.openfreemap.org/styles/positron',
          center: [SITE.geo.lng, SITE.geo.lat],
          zoom: 14.2,
          attributionControl: { compact: true },
        })
        map.addControl(new ml.NavigationControl({ showCompass: false }), 'top-right')
        const popup = new ml.Popup({ closeOnClick: false, offset: 16 })
          .setHTML(
            `<div style="font-family: var(--font-sans); font-size:13px;">
              <strong>Cabinet KSNB</strong><br/>${SITE.address.street}<br/>${SITE.address.postalCode} ${SITE.address.city}
            </div>`
          )
        new ml.Marker({ color: '#2563EB' })
          .setLngLat([SITE.geo.lng, SITE.geo.lat])
          .setPopup(popup)
          .addTo(map)
          .togglePopup()
        mapRef.current = map
      } catch (e) {
        // map failed silently
      }
    })()
    return () => {
      canceled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full rounded-xl overflow-hidden bg-muted shadow-[var(--shadow-md)]"
      role="img"
      aria-label="Carte du cabinet KSNB à Nantes Chantenay"
    />
  )
}

const NoSSRMap = dynamic(() => Promise.resolve(MapInner), { ssr: false })

export function CabinetMap() {
  return <NoSSRMap />
}
