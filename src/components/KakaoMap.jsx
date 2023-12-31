// import { height } from "@mui/system";
import React,{ useEffect} from "react";

const { kakao } = window;

function Kakao(){

    useEffect(() => {
    const container = document.getElementById('map');//지도를 담을 영역의 DOM 레퍼런스
	const options = {
		center: new kakao.maps.LatLng(33.450701,126.570667),//지도의 중심좌표
		level:3
	};
	const map = new kakao.maps.Map(container,options);//지도 생성 및 객체 리턴
   
	// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
   var mapTypeControl = new kakao.maps.MapTypeControl();

   // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
   // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
   map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

   // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
   var zoomControl = new kakao.maps.ZoomControl();
   map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
 }, []);

 return (
   <>
	 <div id="map" style={{ width: '100%', height: '100vh' }}></div>
   </>
 );
};

export default Kakao;