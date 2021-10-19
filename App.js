import React, {useEffect} from 'react';
import {Alert, BackHandler, Image, StyleSheet, View} from 'react-native';
import {AppButton, SecondaryButton} from 'components/MainButton';
import {Section} from 'components/Section';

const App = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', exitApp);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', exitApp);
    };
  }, []);

  const scanApps = () => {
    Alert.alert('', 'Scan Apps');
  };

  const scanNetwork = () => {
    Alert.alert('', 'Scan Network');
  };

  const scanDevice = () => {
    Alert.alert('', 'Scan Device');
  };

  const exitApp = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/secure.png')}
        style={styles.images}
      />
      <View style={styles.button}>
        <SecondaryButton onPress={scanApps} title="Scan Apps" />
        <SecondaryButton onPress={scanNetwork} title="Scan Network" />
        <SecondaryButton onPress={scanDevice} title="Scan Devices" />
      </View>
      <Section>
        <AppButton onPress={exitApp} title="Exit" />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  images: {
    width: 240,
    height: 200,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default App;
