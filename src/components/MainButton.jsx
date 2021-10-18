import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ButtonStyle from './MainButton.style';

export const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={ButtonStyle.mainButton}>
    <Text style={ButtonStyle.mainTitle}>{title}</Text>
  </TouchableOpacity>
);

export const SecondaryButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={ButtonStyle.secondButton}>
    <Text style={ButtonStyle.secondTitle}>{title}</Text>
  </TouchableOpacity>
);
