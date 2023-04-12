import {useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import { City } from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {MarkerIcon } from '../../const';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';

type MapProps = {
  city: City;
  className: string;
}

const defaultCustomIcon = new Icon ({
  iconUrl: MarkerIcon.Default,
  iconSize: [MarkerIcon.Size.Width, MarkerIcon.Size.Height],
  iconAnchor: [MarkerIcon.Size.Width, MarkerIcon.Size.Height],
});

const currentCustomIcon = new Icon ({
  iconUrl: MarkerIcon.Active,
  iconSize: [MarkerIcon.Size.Width, MarkerIcon.Size.Height],
  iconAnchor: [MarkerIcon.Size.Width, MarkerIcon.Size.Height],
});

const Map = ({city, className}: MapProps) => {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const points = useAppSelector((state) => state.nearestOffers);
  const pointId = useAppSelector((state) => state.focusCardId);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(
          (pointId === point.id ? currentCustomIcon : defaultCustomIcon)
        )
          .addTo(map);
      });
    }
  }, [map, points, pointId]);
  return (
    <section
      className="className"
      ref = {mapRef}
      style={{height: '100%'}}
    >

    </section>);
};

export default Map;
