import React, {useCallback} from 'react';
import {NativeSyntheticEvent, Pressable, StyleSheet, TextInputFocusEventData, View} from 'react-native';
import {ChangeButton, Text, TextInput} from '@components';

const genderData = ['мужской', 'женский'];
type TProps = {
  handleChangeGender: (text: string) => void;
  //   secondNameValue: string;
  //   handleBlurSecondName: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onPress: () => void;
  onPressNext: () => void;
  //   secondNameError?: string;
};

const ThirdPage: React.FC<TProps> = ({
  //   secondNameValue,
  handleChangeGender,
  //   secondNameError,
  onPress,
  onPressNext,
}) => {
  const onPressHandlerGender = useCallback(
    (gender: string) => () => {
      handleChangeGender(gender);
      onPress();
      console.log('fsdfsdfsd');
      onPressNext();
    },
    [handleChangeGender, onPress],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Укажите свой пол</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {genderData.map(gender => (
          <ChangeButton
            title={gender}
            onPresss={onPressHandlerGender(gender)}
            key={gender}
            style={styles.changeButton}
          />
        ))}
      </View>
      {/* <Pressable disabled={!.length} style={styles.button} onPress={onPress}>
        <Text style={{color: !secondNameValue.length || !!secondNameError ? '#D3D3D3' : '#000'}}>регистрация</Text>
      </Pressable> */}
      {/* {data ? <Text>{JSON.stringify(data)}</Text> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    height: 40,
    marginBottom: 40,
    borderRadius: 9,
  },
  button: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
  changeButton: {
    marginBottom: 16,
  },
});

export default ThirdPage;
