import React from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import {AppButton, SecondaryButton} from 'components/MainButton';
import {Section} from 'components/Section';

const App = () => {
  const onPress = () => {
    Alert.alert('Information', 'Scan Messages');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/secure.png')}
        style={styles.images}
      />
      <View style={styles.button}>
        <SecondaryButton onPress={onPress} title="Scan Apps" />
        <SecondaryButton onPress={onPress} title="Scan Network" />
        <SecondaryButton onPress={onPress} title="Scan Devices" />
      </View>
      <Section title="Scan App">
        <AppButton onPress={onPress} title="Click to Scan!" />
      </Section>
      <Section title="Scan Devices">
        <AppButton onPress={onPress} title="Click to Scan!" />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
