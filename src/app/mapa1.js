import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Mapa1(){
    const mapRegion= {
        latitude: -24.713786,
        longitude: -47.8723759,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };


    return(
        <View className="flex-1 justify-center items-center">
            <Text>MapView - 1</Text>
            <MapView
                style={{width:'100%', height:'90%'}}
                region={mapRegion}
                showsUserLocation
            >
            <Marker coordinate={mapRegion} title='Marker' />
            </MapView>
        </View>
    );

}