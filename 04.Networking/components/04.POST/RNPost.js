import {useState, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity, TextInput} from 'react-native'
import axios from 'axios'


export default function RNComposant(){

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data.slice(0,2));
      setLoading(false)

    }catch(error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(()=> {
      fetchPosts()
  }, []);


  if(loading){
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    )
  }

  if(error){
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    )
  }

  const renderitem= ({item})=> (
    <View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body}</Text>
    </View>
  )

  const handleRefresh = ()=> {
    setLoading(true);
    fetchPosts()
  }

  const handleSubmit = async ()=> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1
        }),
      });
      if(!response.ok){
        throw new Error('Erreur lors de lajout')
      }
      const newData = await response.json();
      setPosts([...posts, newData])
      setTitle('')
      setBody('')
    }catch(error){
      console.error('Erreur', error)
    }
  }


  return (
    <View style={styles.container}>


      <TextInput 
      placeholder='Title'
      value={title}
      onChangeText={text => setTitle(text)}
      />
      <TextInput 
      placeholder='Body'
      value={body}
      onChangeText={text => setBody(text)}
      multiline
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Ajouter l'article</Text>
      </TouchableOpacity>



      <Button title="Refresh" onPress={handleRefresh} />
      {loading ? (
        <Text>Chargement ....</Text>
      ): (
        <FlatList data={posts} renderItem={renderitem} keyExtractor={item => item.id.toString()} />
      )
    }
    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title : {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContainer : {
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postBody: {
    fontSize: 16,
  },
  error: {
    color: 'red',
  }
})