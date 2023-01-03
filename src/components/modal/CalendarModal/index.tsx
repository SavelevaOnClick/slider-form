import moment from 'moment';
import React from 'react';
import {DateData} from 'react-native-calendars';
import {Calendar, Icon, Modal} from '@components';
import {height, width} from '@constants';
import {useMemo, useCallback} from '@hooks';
import {Direction} from 'react-native-calendars/src/types';

const MOMENT_FORMAT = 'YYYY-MM-DD';
type TProps = {
  isVisible: boolean;
  value: string;
  setValue: (value: string) => void;
  closeModal: (value: boolean) => void;
};

const CalendarModal: React.FC<TProps> = ({setValue, closeModal, value, isVisible}) => {
  const onChange = useCallback((date?: DateData) => {
    if (date) {
      setValue(date.dateString);
    }
    closeModal(false);
  }, []);

  const onPressCloseHandler = useCallback(() => closeModal(false), []);

  const maxDate = useMemo(() => moment(new Date()).subtract(18, 'years').format(MOMENT_FORMAT), []);

  const initialDate = useMemo(() => value || maxDate, [value, maxDate]);

  const renderArrow = useCallback(
    (direction: Direction) => (
      <Icon name={direction === 'left' ? 'Chevron-Left' : 'Chevron-Right'} size={24} color="#D22730" />
    ),
    [],
  );
  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={400}
      onBackdropPress={onPressCloseHandler}
      backdropOpacity={0.5}
      backdropColor={'#212121'}
      deviceWidth={width}
      deviceHeight={height}
      useNativeDriver={true}>
      <Calendar
        onDayPress={onChange}
        initialDate={initialDate}
        hideExtraDays={true}
        maxDate={maxDate}
        renderArrow={renderArrow}
      />
    </Modal>
  );
};

export default CalendarModal;
