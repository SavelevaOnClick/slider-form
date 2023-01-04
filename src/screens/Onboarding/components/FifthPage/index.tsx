import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ChangeButton, Text, View} from '@components';

const socialStatusData = [
  'Домохозяйка',
  'Студент',
  'Пенсионер',
  'Служащий гос. структур',
  'Служащий ком. структур',
  'Безработный',
  'Другое',
];

type TProps = {
  handleChangeStatus: (text: string) => void;
  onPressSubmit: () => void;
};

const FifthPage: React.FC<TProps> = ({handleChangeStatus, onPressSubmit}) => {
  const onPressHandlerSocialStatus = useCallback(
    (status: string) => () => {
      handleChangeStatus(status);
      onPressSubmit();
    },
    [handleChangeStatus, onPressSubmit],
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
      <Text style={styles.title}>Укажите ваш социальный статус</Text>
      <View style={styles.formContainer}>
        {socialStatusData.map(socialStatus => (
          <ChangeButton
            key={socialStatus}
            title={socialStatus}
            onPresss={onPressHandlerSocialStatus(socialStatus)}
            style={styles.changeButton}
          />
        ))}
      </View>
    </ScrollView>
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
    marginBottom: 34,
  },
  changeButton: {
    marginBottom: 16,
  },
  formContainer: {
    flex: 1,
  },
});

export default FifthPage;
