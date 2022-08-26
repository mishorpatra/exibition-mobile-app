import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import html_script from './html_script';


//components
import GlobalView from './components/GlobalView';

export default function App() {
  return (
    <GlobalView />
  );
}

