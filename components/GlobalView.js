import React, { Component } from 'react';
import {WebView} from 'react-native-webview'
import { View, SafeAreaView } from 'react-native'

export default function GlobalView({ coords }) {
  console.log(coords)
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 5 }}>
        <WebView 
          source={{ uri: `https://inclunav.apps.iitd.ac.in/exibition-new?userlat=${coords.latitude}&userlng=${coords.longitude}` }} 
        />
      </SafeAreaView>
    );
  }

