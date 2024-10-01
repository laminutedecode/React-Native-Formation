import {useRef} from 'react';

import { View, Text, Button, StyleSheet, DrawerLayoutAndroid } from 'react-native';

export default function RNDrawerLayoutAndroid(){

    const drawerRef = useRef(null);

    const openDrawer = ()=> {
      drawerRef.current.openDrawer();
    }
    const closeDrawer = ()=> {
      drawerRef.current.closeDrawer();
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      drawerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
      }
    })

    return (
      <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={()=> (
        <View style={styles.drawerContent}>
          <Text>Contenu du tiroir</Text>
          <Button title="Fermer le tiroir" onPress={closeDrawer} />
        </View>
      )}
      
      
      >
        <View style={styles.container}>
          <Text>Contenu de l'application</Text>
          <Button title="ouvrir le tiroir" onPress={openDrawer}/>
        </View>
      </DrawerLayoutAndroid>
    )


}