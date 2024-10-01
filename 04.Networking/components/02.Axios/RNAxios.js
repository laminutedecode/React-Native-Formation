import {useState, useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import axios from 'axios'


export default function RNComposant(){

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=> {
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


  return (
    <View style={styles.container}>
      <Text style={styles.title}>liste des 2 premiers articles</Text>
      {posts.map(post => (
        <View key={post.id}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postBody}>{post.body}</Text>
        </View>
      ))}
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