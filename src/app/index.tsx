import { Link } from "expo-router";
import { View } from "react-native";

export default function Home(){
    return(
        <View className="flex-1 justify-center">
            <Link className="p-3 text-cyan-600 font-bold text-lg" href={'./mapa1'}>Abrir Mapa 1</Link>
            <Link className="p-3 text-cyan-600 font-bold text-lg" href={'./mapa2'}>Abrir Mapa 2</Link>
            <Link className="p-3 text-cyan-600 font-bold text-lg" href={'./mapa3'}>Abrir Mapa 3</Link>
        </View>
    );
}