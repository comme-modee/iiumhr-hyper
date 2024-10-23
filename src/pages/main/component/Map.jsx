import React from 'react'
import styles from '../style/Map.module.css'
import commonStyles from '../style/Common.module.css'
import { useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import { Spinner } from '@/components';
import classNames from 'classnames';

const containerStyle = {
    width: '100%',
    height: '100%'
};
const companyLocation = { lat: 37.6547758, lng: 126.7726419 };
const apiKey = 'AIzaSyALpguadc1id8kc4_SXduAg6zT01jqX4PU';

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(companyLocation)
        // map.fitBounds(bounds)
    
        setMap(map)
    }, [])
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div className={styles.mapContainer}>
            <div className={classNames(styles.map, commonStyles.flexCenter)}>
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={companyLocation}
                        zoom={16}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <Marker
                            position={companyLocation}
                            map={map}
                        />
                    </GoogleMap>
                ) : <Spinner color='primary' size='md' className='m-auto'/>}
            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.icon}></div>
                    <p>찾아오시는 길 : 3호선 정발산역 1번출구 도보 5분 거리</p>
                </div>
                <div>
                    <div className={styles.icon}></div>
                    <p>전화번호 : 031-966-7674~5｜팩스번호 : 031-688-8983</p>
                </div>
                <div>
                    <div className={styles.icon}></div>
                    <p>
                        회사주소 : (10403) 경기도 고양시 일산동구 정발산로 24,<span className={styles.lineBreak}> </span>
                        3동 512호, 513호 (장항동, 웨스턴타워)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Map