import {useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import { OfferCards, City } from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {MarkerIcon, classNames} from '../../const';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  points: OfferCards;
  selectedPoint: number | null;
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

const Map = ({city, points, selectedPoint, className}: MapProps) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  if (className === classNames.OfferPageMap) {
    points = points.slice(1, 4);
  }

  useEffect(() => {
    if (map) {

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker.setIcon(
          (point.id === selectedPoint ? currentCustomIcon : defaultCustomIcon)
        )
          .addTo(map);
      });

    }
  }, [map, points, selectedPoint]);
  return (
    <section
      className="className"
      ref = {mapRef}
      style={{height: '100%'}}
    >

    </section>);
};

export default Map;
