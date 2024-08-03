import React from 'react';
import {
     Text,
    StyleSheet,
} from 'react-native';


export default function App(){

  return (
  <>
<Text style={{color: "yellow", fontSize: 50}}>Samandeep Singh</Text>
  </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

