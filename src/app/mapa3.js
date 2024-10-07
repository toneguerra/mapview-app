import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Mapa3(){
    const mapRegion= {
        latitude: -24.713786,
        longitude: -47.8723759,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      markers = [
        {latitude: -24.7124488, longitude: -47.8828853},
        {latitude: -24.71408131178064, longitude: -47.88012795267149},
        {latitude: -24.712775323109707, longitude: -47.88038544474944},
      ]
    return(
        <View className="flex-1 justify-center items-center">
            <Text>MapView - 1</Text>
            <MapView
                style={{width:'100%', height:'90%'}}
                region={mapRegion}
                showsUserLocation
            >

            
            {markers.map((val, index) => {
                console.log(index)
                return (
                <Marker
                    key={index}
                    coordinate={val}
                />
                );
            })}
            </MapView>
        </View>
    );

}