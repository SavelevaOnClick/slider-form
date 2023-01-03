import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ChangeButton, Text} from '@components';

const CityData = ['Бишкек', 'Кант', 'Токмок', 'Балыкчи', 'Чолпон-Ата'];

type TProps = {
  cityValue: string;
  handleChangeCity: (text: string) => void;
  onPressNext: () => void;
};

const SecondPage: React.FC<TProps> = ({handleChangeCity, onPressNext}) => {
  const onPressHandlerCity = useCallback(
    (city: string) => () => {
      handleChangeCity(city);
      onPressNext();
    },
    [handleChangeCity, onPressNext],
  );
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>Укажите ваш город проживания</Text>
      {CityData.map(city => (
        <ChangeButton title={city} style={styles.changeButton} key={city} onPresss={onPressHandlerCity(city)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 46,
  },
  changeButton: {
    marginBottom: 16,
  },
});

export default SecondPage;
