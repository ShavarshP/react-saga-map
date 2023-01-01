import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import Routing from './Routing'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const position: LatLngExpression = [59.83567701, 30.38064206]
  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={false}
      style={{ width: '50%', height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing />
    </MapContainer>
  )
}

export default Map
