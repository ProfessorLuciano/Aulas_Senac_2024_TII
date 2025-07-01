import { useState, useEffect, useRef } from 'react'
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

export default function App() {

  const mapaRef = useRef(MapView)
  const [localizacao, setLocalizacao] = useState(null)

  useEffect(() => {
    async function requisitarLocal() {
      const { granted } = await requestForegroundPermissionsAsync()
      if (granted) {
        const posicaoAtual = await getCurrentPositionAsync()
        setLocalizacao(posicaoAtual)
      }
    }
    requisitarLocal()
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      setInterval: 1000,
      distanceInterval: 1
    }, (resposta) => {
      setLocalizacao(resposta)
      mapaRef.current.animateCamera({
        pitch: 10,
        center: resposta.coords
      })
    })
  }, [])


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle='dark-content' translucent={false} />
      {
        localizacao &&
        <MapView
          ref={mapaRef}
          style={styles.mapview}
          loadingEnabled={true}
          initialRegion={{
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
          }}
        >
          <Marker
            coordinate={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude,
            }}
          />
        </MapView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapview: {
    height: '100%',
    width: '100%'
  }
});
