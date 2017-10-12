import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'DECK_QUIZ_APP_NOTIFICATIONS'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY).then(res => {
        const data = JSON.parse(res)
        if (data === null) {
            Permissions.getAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(18)
                    tomorrow.setMinutes(0)
                    Notifications.scheduleLocalNotificationAsync(
                        {
                            title: 'Study today!',
                            body: 'Do not forget to study today!',
                            ios: {
                                sound: true
                            }
                        },
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
        }
    )
}