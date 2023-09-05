import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TimelineScreen } from './src/pages/TimelineScreen';

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <TimelineScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
