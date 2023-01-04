import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {ChangeButton, Text, View} from '@components';

const marriedData = ['Холост / Не замужем', 'Женат / Замужем'];

type TProps = {
  handleChangeMarried: (text: string) => void;
  onPressNext: () => void;
};

const FourthPage: React.FC<TProps> = ({handleChangeMarried, onPressNext}) => {
  const onPressHandlerGender = useCallback(
    (marriedStatus: string) => () => {
      handleChangeMarried(marriedStatus);
      onPressNext();
    },
    [handleChangeMarried, onPressNext],
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Укажите ваше семейное положение</Text>
      <View style={styles.formContainer}>
        {marriedData.map(marriedStatus => (
          <ChangeButton
            title={marriedStatus}
            onPresss={onPressHandlerGender(marriedStatus)}
            key={marriedStatus}
            style={styles.changeButton}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
  },
  changeButton: {
    marginBottom: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default FourthPage;
