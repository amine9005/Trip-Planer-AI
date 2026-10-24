"use client";
import { useRef, useEffect, useState } from "react";
import * as mapboxgl from "mapbox-gl/esm";
import "mapbox-gl/dist/mapbox-gl.css";
import { TripPlanType } from "@/types/create-trip.types";
import { useAIMessagesStore } from "@/store/AI/messages.store";

interface Props {
  tripData?: TripPlanType;
}

const GlobalMapOrganism = ({ tripData }: Props) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markers: mapboxgl.Marker[] = [];
  const tripPlan = useAIMessagesStore((state) => state.tripPlan);
  const { updateMap } = useAIMessagesStore();
  const [data, setData] = useState<TripPlanType | null>();
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    // console.log("rendering");
    try {
      mapRef.current = new mapboxgl.Map({
        accessToken: accessToken,

        container: mapContainerRef.current ?? "",
        center: [
          data
            ? data?.itinerary[0].activities[0].geo_coordinates.longitude
            : -71.06776,
          data
            ? data?.itinerary[0].activities[0].geo_coordinates.latitude
            : 42.35816,
        ], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: data ? 6 : 0.8, // starting zoom
        projection: "globe",
      });

      const getData = () => {
        if (accessToken) {
          if (tripData) {
            setData(tripData);
          } else {
            setData(tripPlan);
          }
          setDataLoaded(true);
        }
      };

      getData();

      if (data && mapRef.current) {
        data.itinerary.map((itinerary) =>
          itinerary.activities.map((activity) => {
            const marker = new mapboxgl.Marker({ color: "red" })
              .setLngLat([
                activity.geo_coordinates.longitude,
                activity.geo_coordinates.latitude,
              ])
              .setPopup(
                new mapboxgl.Popup({
                  offset: 25,
                  className: "text-black",
                }).setText(activity.place_name),
              )
              .addTo(mapRef.current!);
            markers.push(marker);
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }

    return () => {
      markers.forEach((marker) => marker.remove());
      if (mapRef.current) mapRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLoaded, updateMap]);

  return (
    <div
      className="col-span-1 lg:col-span-2"
      id="map-container"
      ref={mapContainerRef}
      style={{
        width: "100%",
        height: "85vh",
        borderRadius: 20,
      }}
    />
  );
};

export default GlobalMapOrganism;
