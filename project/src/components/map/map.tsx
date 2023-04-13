import {useRef, useEffect } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import { City } from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import { MarkerIcon } from '../../const';
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
  const points = useAppSelector((state) => state.nearestOffers);
  const pointId = useAppSelector((state) => state.focusCardId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers = points.map(
        (point) =>
          new Marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon: pointId === point.id ? currentCustomIcon : defaultCustomIcon,
            }
          )
      );

      const markersLayer = new LayerGroup(markers);
      markersLayer.addTo(map);

      return () => {
        map.removeLayer(markersLayer);
      };
    }
  }, [map, points, pointId]);
  return (
    <section
      className="className"
      ref = {mapRef}
      style={{height: '100%', minHeight: '500px'}}
    >

    </section>);
};

export default Map;
