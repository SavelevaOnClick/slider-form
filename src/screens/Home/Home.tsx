import React from 'react'
import { useEffect, useState, useCallback, useMemo, useTranslation, useRoute, useAppDispatch, useAppSelector, useTheme } from '@hooks'
import { View, Text, Image, TouchableOpacity } from '@components'
import {navigate} from '@services';
import styles from './styles'
import { HomeRouteProp } from '@types';

const Home: React.FC = () => {
	const { t } = useTranslation()
	const {params} = useRoute<HomeRouteProp>();
	const dispatch = useAppDispatch();
    // const data = useAppSelector(selectData);
	const {colors} = useTheme();

	return (
	<View style={styles.container}>
		<Text>
			HomeScreen
		</Text>
	</View>
	)
}

export default Home;