import React, { useRef, useEffect, useState } from 'react';
import {
    Modal,
    View,
    Animated,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import CustomButton from './CustomButton';

const { height } = Dimensions.get('window');

type Props = {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const ButtonSheetModal = ({ visible, onClose, children }: Props) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const [isModalContentVisible, setIsModalContentVisible] = useState(false);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

   useEffect(() => {
        if (!visible) {
            setIsModalContentVisible(false);
        }
    }, [visible]);

    const slideUp = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [height, 0],
    });

    return (
        <Modal transparent visible={visible} statusBarTranslucent animationType="none" style={{ height: 50 }}
            onShow={() => setIsModalContentVisible(true)}
            onRequestClose={() => setIsModalContentVisible(false)}
        >
            {
                isModalContentVisible ? <View style={styles.overlay}>
                    <TouchableWithoutFeedback onPress={onClose}>
                        <View style={StyleSheet.absoluteFill} />
                    </TouchableWithoutFeedback>

                    <Animated.View
                        style={[
                            styles.modalContainer,
                            { transform: [{ translateY: slideUp }] },
                        ]}
                    >
                        {children}
                        <CustomButton
                            backgroundColor='#F2C94C'
                            textColor='black'
                            text='Close modal'
                            onPress={onClose}
                        />
                    </Animated.View>
                </View> : null
            }
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000088',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333333',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom: 40
    },
});

export default ButtonSheetModal;
