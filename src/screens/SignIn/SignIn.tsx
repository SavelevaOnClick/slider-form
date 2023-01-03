import React from 'react'
import { useEffect, useState, useCallback, useMemo, useTranslation, useRoute, useAppDispatch, useAppSelector, useTheme } from '@hooks'
import { View, Text, Image, TouchableOpacity } from '@components'
import {navigate} from '@services';
import styles from './styles'
import { SignInRouteProp } from '@types';

const SignIn: React.FC = () => {
	const { t } = useTranslation()
	const {params} = useRoute<SignInRouteProp>();
	const dispatch = useAppDispatch();
    // const data = useAppSelector(selectData);
	const {colors} = useTheme();

	return (
	<View style={styles.container}>
		<Text>
			SignInScreen
		</Text>
	</View>
	)
}

export default SignIn;