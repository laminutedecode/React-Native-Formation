import {FlatList, Text, View} from 'react-native'


const data = [
  {id: '1', name: 'Element 1'},
  {id: '2', name: 'Element 2'},
  {id: '3', name: 'Element 3'},
  {id: '4', name: 'Element 4'}
]

const ListExemple = ()=> {
  const renderItem = ({item})=> (
    <Text>{item.name}</Text>
  )

  const renderSeparator = ()=> (
    <View style={{
      height: 1,
      backgroundColor: '#000',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 10,
    }} />
  )




  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} ItemSeparatorComponent={renderSeparator} />
  )
}

export default ListExemple;