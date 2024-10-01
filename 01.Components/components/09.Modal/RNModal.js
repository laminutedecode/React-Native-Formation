import {useState} from 'react'
import {View, Text, Button, Modal} from 'react-native'

export default function RNModal() {

  const [modalVisible, setModalVisible] = useState(false);
  return (
   <>
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Ouvrir modal" onPress={()=> setModalVisible(true)} />
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={()=> {
        setModalVisible(!modalVisible)
      }}
      
      >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,.5)'}}>
          <View style={{backgroundColor: 'white', padding: 20, borderRadius: 10}}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto quos labore quod, quo dicta sapiente perspiciatis accusamus illum quis autem. Velit est necessitatibus dolorem. Quae, nihil nostrum doloremque, eaque ullam inventore consectetur eius ipsa a exercitationem dolor omnis quam quibusdam deserunt atque sunt dolorem perspiciatis et nobis itaque modi.
            </Text>
            <Button title="Fermer" onPress={()=> setModalVisible(!modalVisible)} />
          </View>

        </View>
      </Modal>


   </View>
   
   </>
  )
}
