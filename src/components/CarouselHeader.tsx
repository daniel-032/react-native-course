import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type CarouselHeaderProps = {
    title: string;
    onPressSeeMore: () => void;
}

const style = StyleSheet.create({
    containerHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    titleText: {
        color: "white",
        fontSize: 20,
    },
    actionText: {
        color: "#F2C94C",
        fontSize: 17
    }
});

export function CarouselHeader({ title, onPressSeeMore }: CarouselHeaderProps) {
    return (
        <View style={style.containerHeader}>
            <Text style={style.titleText}>{title}</Text>
            <TouchableOpacity onPress={onPressSeeMore}>
                <Text style={style.actionText}>See more</Text>
            </TouchableOpacity>
        </View>
    );
}
