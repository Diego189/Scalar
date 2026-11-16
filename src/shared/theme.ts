import {configureFonts, MD3LightTheme} from 'react-native-paper';

const fonts = configureFonts({
    config: {
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
});

export const theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#348B74',
        lightPrimary: '#5DA290',
        lightGrey: '#F7F7F8',
    },
    fonts: {
        ...fonts,
    },
    headlineMedium: {
        ...fonts.headlineMedium,
        fontFamily: 'RobotoBold',
    },

    titleLarge: {
        ...fonts.titleLarge,
        fontFamily: 'RobotoBold',
    },
};