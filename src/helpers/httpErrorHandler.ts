import {Alert} from 'react-native';

export const errorHandler = (error: any, method?: string) => {
	console.log('!!! REQUEST ERROR', method || 'Pass the method', error);
	// const message = error.data?.message || '';
    let resultString = '';

	// if (error.status === 418) {
	//   return Alert.alert(
	//     '',
	//     'Please check your internet connection or try again later',
	//   );
	// }

  const errors = error?.data?.errors || [];
  // const resultString = `${message}\n${errors.join('\n')}`;
  if (error.data.message === 'Unauthenticated.') {
    console.log('Unauthenticated');
  }
  if (errors.length) {
    resultString = `${errors.join('\n')}`;
  } else {
    resultString = error.data?.message || '-';
  }
  Alert.alert('', resultString);
};
