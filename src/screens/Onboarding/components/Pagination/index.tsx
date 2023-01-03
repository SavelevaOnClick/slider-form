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
      {new Array(4).fill(0).map((_, index) => {
        return (
          <View
            key={index.toString()}
            style={[styles.paginationItemStyle, {backgroundColor: activePage === index ? 'red' : 'violet'}]}
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
