import { useRef, useEffect } from "react";
import styled from "styled-components";

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
        minZoom: 15,
        center: new naver.maps.LatLng(37.56045, 126.9217681),
        zoom: 20,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.560494, 126.9217681),
        map: map,
      });
    };
    initMap();
  }, []);

  return (
    <Wrapper id="map">
      <div id="marker"></div>
    </Wrapper>
  );
};

export default NaverMap;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;
