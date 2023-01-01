import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import { useSelector } from 'react-redux'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'

const greenIcon = new L.Icon({
  iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const flagIcon = new L.Icon({
  iconUrl:
    'https://findicons.com/files/icons/2770/ios_7_icons/128/finish_flag.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const Routing = () => {
  const { selectRoutingsData } = useSelector((state) => state.routingSelect)
  const map = useMap()
  useEffect(() => {
    if (!map || !selectRoutingsData) return
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(selectRoutingsData.latFrom, selectRoutingsData.lngFrom),
        L.latLng(selectRoutingsData.latTo, selectRoutingsData.lngTo),
      ],
      createMarker: function (i, wp, nWps) {
        if (i === 0) {
          return L.marker(wp.latLng, {
            icon: greenIcon,
          })
        } else if (i === nWps - 1) {
          return L.marker(wp.latLng, {
            icon: flagIcon,
          })
        } else {
          return null
        }
      },
      routeWhileDragging: true,
    }).addTo(map)

    return () => {
      map.removeControl(routingControl)
    }
  }, [map, selectRoutingsData])

  return null
}

export default Routing
