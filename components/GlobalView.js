import React, { Component } from 'react';
import {WebView} from 'react-native-webview'
import { View, SafeAreaView } from 'react-native'

export default function GlobalView({ coords }) {
  console.log(coords)
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
        <WebView 
          source={{ uri: `http://10.194.6.249:3000/exibition-new?userlat=${coords.latitude}&userlng=${coords.longitude}` }} 
        />
      </SafeAreaView>
    );
  }

