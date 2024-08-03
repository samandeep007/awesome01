import React from 'react';
import { Text, View, Alert, Button, SafeAreaView,  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "pink", fontSize: 30, padding: 20 }}>Let's learn about React Native together</Text>
        <Text style={{marginBottom: 20, fontSize: 20, padding: 20}}>React-native is very similar to the react that we have for web development, the only difference is that react native uses JSX elements of its own to render the things to the activity.
          While react uses HTML. View tag is used as alternative to HTML div. Everything is wrapped inside these views, and these views are further wrapped within a single element called SafeAreaView which is responsible for handling the notches that most of the latest phones have
        </Text>
        
        <Button color={"red"}  title="Hello" onPress={() => Alert.alert("Hello", "Kii haal ne")}></Button>
      </View>
    </SafeAreaView>
  )
}