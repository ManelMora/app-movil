// @ts-ignore
import {
    ZegoUIKitPrebuiltCall, 
    ONE_ON_ONE_VIDEO_CALL_CONFIG 
} from '@zegocloud/zego-uikit-prebuilt-call-rn'
import {
    APPID,
    APP_SIGN
} from '../config'
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
    VideoCallScreen: { username: string };
    HomeScreen: undefined;
};

type VideoCallScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VideoCallScreen'>;
type VideoCallScreenRouteProp = RouteProp<RootStackParamList, 'VideoCallScreen'>;

type Props = {
    navigation: VideoCallScreenNavigationProp;
    route: VideoCallScreenRouteProp;
};

export default function VideoCallScreen({ route, navigation }: Props) {

    const { username } = route.params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={APPID}
                appSign={APP_SIGN}
                userID={`user-${Math.random().toString(36).substring(7)}`} // userID can be something like a phone number or the user id on your own user system.
                userName={username}
                callID={`call-${Math.random().toString(36).substring(7)}`} // callID can be any unique string.

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { navigation.navigate('HomeScreen') },
                    onHangUp: () => { navigation.navigate('HomeScreen') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
