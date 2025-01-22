import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native'; 
import { markTutorial } from '../../redux/config/AuthSlice';
import styles from './style';
import tutorialData from '../../assets/tutorialData';
import strings from '../../utils/strings'
import Colors from '../../utils/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

type TutorialItem = {
    key: string;
    image: string;
    title: string;
    description: string;
};

type RootStackParamList = {
    Tutorial: undefined;
    Login: undefined
};

type TutorialScreenProps = NativeStackScreenProps<RootStackParamList, 'Tutorial'>;

const Tutorial: React.FC<TutorialScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<TutorialItem>>(null);

    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < tutorialData.length) {
            flatListRef.current?.scrollToIndex({ index: nextIndex });
            setCurrentIndex(nextIndex);
        } else {
            dispatch(markTutorial());
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                })
            );
        }
    };

    const handleSkip = () => {
        dispatch(markTutorial());
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        );
    }

    const renderItem = ({ item }: { item: TutorialItem }) => (
        <View style={styles.slide}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={tutorialData}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />
            <View style={styles.pagination}>
                {tutorialData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            { opacity: index === currentIndex ? 1 : 0.3 },
                        ]}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <View>
                    <TouchableOpacity onPress={handleNext} style={[
                        styles.button, { backgroundColor: Colors.PRIMARY_buttonEnabled },
                    ]}>
                        <Text style={styles.buttonText}>
                            {currentIndex === tutorialData.length - 1 ? `${strings.finish()}` : `${strings.next()}`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSkip} style={[
                        styles.button, { backgroundColor: Colors.BLACK },
                    ]}>
                        <Text style={styles.buttonText}>{strings.skip()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Tutorial;