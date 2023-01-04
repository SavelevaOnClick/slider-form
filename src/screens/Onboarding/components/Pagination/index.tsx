import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {View} from '@components';

type TProps = {
  onPress?: () => void;
  activePage: number;
};

const Pagination: React.FC<TProps> = ({activePage, onPress}) => {
  return (
    <View style={styles.container}>
      {new Array(5).fill(undefined).map((_, index) => {
        return (
          <View
            key={index.toString()}
            style={[styles.paginationItemStyle, {backgroundColor: activePage === index ? '#212121' : '#A7A8A9'}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationItemStyle: {
    height: 5,
    marginHorizontal: 2,
    width: 25,
    borderRadius: 100,
  },
  container: {
    height: 20,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Pagination;
