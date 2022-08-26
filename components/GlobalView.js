import React, { Component } from 'react';
import {WebView} from 'react-native-webview'
import { View, SafeAreaView } from 'react-native'

export default function GlobalView() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://inclunav.apps.iitd.ac.in/exibition-new/' }} 
        />
      </SafeAreaView>
    );
  }

