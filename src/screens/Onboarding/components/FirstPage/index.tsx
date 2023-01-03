import React, {useMemo, useState} from 'react';
import {NativeSyntheticEvent, StyleSheet, TextInputFocusEventData, View} from 'react-native';
import localStorage from 'redux-persist/es/storage';
import {CalendarModal, Icon, Pressable, ScrollView, Text, TextInput} from '@components';
import {LocaleConfig} from '@services';

type TProps = {
  handleChangeName: (text: string) => void;
  handleChangeSecondName: (text: string) => void;
  handleChangeBirthday: (text: string) => void;
  nameValue: string;
  secondNameValue: string;
  birthdayValue: string;
  onPressNext: () => void;
  nameError?: string;
  secondNameError?: string;
  handleBlurName: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleBlurSecondName: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
LocaleConfig.defaultLocale = 'ru';
const FirstPage: React.FC<TProps> = ({
  handleChangeName,
  handleChangeSecondName,
  handleChangeBirthday,
  nameValue,
  secondNameValue,
  birthdayValue,
  onPressNext,
  handleBlurName,
  handleBlurSecondName,
  nameError,
  secondNameError,
}) => {
  const [calendarModalVisible, setCalendarModalVisible] = useState<boolean>(false);

  const buttonTitleStyle = useMemo(
    () => ({
      color:
        !nameValue.length || !!nameError || !secondNameValue.length || !birthdayValue.length || !!secondNameError
          ? '#D3D3D3'
          : '#000',
    }),
    [nameValue, secondNameValue, nameError, secondNameError, birthdayValue],
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>Наша анкета</Text>
      <TextInput
        onChangeText={handleChangeName}
        value={nameValue}
        onBlur={handleBlurName}
        placeholder="Добавьте ваше имя"
        style={styles.input}
      />
      <TextInput
        onChangeText={handleChangeSecondName}
        value={secondNameValue}
        onBlur={handleBlurSecondName}
        placeholder="Добавьте вашу фамилию"
        style={styles.input}
      />
      <View style={styles.inputCalendarContainer}>
        <TextInput
          style={styles.inputCalendar}
          editable={false}
          value={birthdayValue}
          onChangeText={handleChangeBirthday}
          placeholder="Добавьте вашу дату рождения"
        />
        <Pressable onPress={() => setCalendarModalVisible(true)}>
          <Icon name="Calendar" color={'grey'} size={24} />
        </Pressable>
      </View>

      <Pressable
        disabled={!nameValue.length || !secondNameValue.length || !birthdayValue.length}
        style={styles.buttonContainer}
        onPress={onPressNext}>
        <Text style={buttonTitleStyle}>далее</Text>
      </Pressable>
      <CalendarModal
        isVisible={calendarModalVisible}
        value={birthdayValue}
        setValue={handleChangeBirthday}
        closeModal={setCalendarModalVisible}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#E3E2E3',
    height: 50,
    marginBottom: 40,
    borderRadius: 16,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
  },
  buttonContainer: {
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
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 76,
  },
  inputCalendar: {
    height: 50,
    paddingLeft: 10,
    flex: 1,
  },
  inputCalendarContainer: {
    borderWidth: 2,
    borderColor: '#E3E2E3',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    borderRadius: 16,
    paddingRight: 15,
  },
});

export default FirstPage;
