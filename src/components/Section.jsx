import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SectionStyle from './Section.style';

export const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={SectionStyle.sectionContainer}>
      <Text
        style={[
          SectionStyle.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <View style={SectionStyle.children}>{children}</View>
    </View>
  );
};
