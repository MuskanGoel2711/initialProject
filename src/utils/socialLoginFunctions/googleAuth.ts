// googleAuth.ts
import { WEB_CLIENT_ID } from '@env';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// Configure Google Sign-In
export const configureGoogleSignIn = () => {
    GoogleSignin.configure({
        webClientId: WEB_CLIENT_ID,
        offlineAccess: false,
    });
};

// Handle Google Sign-In
export const handleGoogleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const response = await GoogleSignin.signIn();
        const idToken = response?.data?.idToken;

        if (!idToken) {
            throw new Error('No idToken received from Google');
        }
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        const userCredential = await auth().signInWithCredential(googleCredentials);

        return userCredential;
    } catch (error) {
        if ((error as { code?: string }).code === statusCodes.SIGN_IN_CANCELLED) {
            throw 'User cancelled the login flow';
        } else if ((error as { code?: string }).code === statusCodes.IN_PROGRESS) {
            throw 'Sign-in operation is in progress';
        } else if ((error as { code?: string }).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            throw 'Google Play Services not available';
        } else {
            throw error; 
        }
    }
};