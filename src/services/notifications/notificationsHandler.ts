// need to refactor
// import {Platform} from 'react-native';
// import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import PushNotification from 'react-native-push-notification';
// import { navigate } from '@services';
// import storage from '../../store';
// import { setNotifications, getNotifications } from '@reducers/notifications';
// import { TNotification } from '@types';

// type TRemoteMessage = FirebaseMessagingTypes.RemoteMessage | null;

// const notifications: TSubjectNotification[] = storage?.store?.getState().notifications;
// const dispatchNotifications = (notifications: TNotification[]) => storage?.store?.dispatch(setNotifications(notifications))
// const getNotificationsList = () => storage?.store?.dispatch(getNotifications())

// export const notificationsHandler = async (remoteMessage: TRemoteMessage) => {
  // if (!!remoteMessage) {
	// PushNotification.removeAllDeliveredNotifications();
    // if (Platform.OS === 'ios') {
       // PushNotificationIOS.removeAllDeliveredNotifications();
      	// PushNotificationIOS.setApplicationIconBadgeNumber(0);
    // }
	  // navigate('TypeNotifications', {needRefresh: true})
	  // getNotificationsList()

    // if (remoteMessage.data && remoteMessage.data.badge) {
    //   if (Platform.OS == 'ios') {
    //       PushNotificationIOS.setApplicationIconBadgeNumber(
    //       Number(remoteMessage.data.badge)
    //     );
    //   }
    // }

	// uniq check
	//  if (notifications[0].id !== remoteMessage?.data?.id) {
    //      dispatchNotifications([remoteMessage?.data, ...notifications])
	//  }

	//  PushNotification.getDeliveredNotifications(data => {
	// 	if (data.length) {
	// 	    const modifiedNotifications = data.map(item => {
	// 	    return {

	// 	    };
	// 	  });
	// 	    dispatchNotifications(
	// 	      [...modifiedNotifications, ...notifications],
	// 	    )
	// 	 }
	// })
  // }
// };

