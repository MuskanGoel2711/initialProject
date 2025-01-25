export type RootStackParamList = {
    Splash: undefined;
    Tutorial: undefined;
    Login: undefined;
    HomeScreen: undefined;
    SignUp: undefined;
    Setting: undefined;
    AddShipment: undefined;
    ForgotPassword: undefined;
    VerifyOtp: undefined;
    PhoneSignUp: undefined;
    OtpScreen: undefined;
    Random: undefined;
};

export type RootStackParamListSplash = {
    Tutorial: undefined;
    HomeScreen: undefined;
    Login: undefined;
};

export type RootStackParamListTutorial = {
    Tutorial: undefined;
    Login: undefined
};

export type TutorialItem = {
    key: string;
    image: string;
    title: string;
    description: string;
};

export type RootStackParamListSignUp = {
    SignUp: undefined;
    VerifyOtp: undefined;
    Login: undefined;
};

export type RootStackParamListLogin = {
    Login: undefined;
    ForgotPassword: undefined;
    SignUp: undefined;
    PhoneSignUp: undefined;
    SignInGoogle: undefined;
    FaceBookLogin: undefined;
};

export type RootStackParamListHome = {
    HomeScreen: undefined;
    Setting: undefined;
    AddShipment: undefined;
};

export type RootStackParamListForgotPassword = {
    ForgotPassword: undefined;
    VerifyOtp: undefined;
};

export type RootStackParamListSetting = {
    Setting: undefined;
};

export type RootStackParamListAddShipment = {
    AddShipment: undefined;
};