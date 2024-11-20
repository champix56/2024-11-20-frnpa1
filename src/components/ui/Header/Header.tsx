import React from "react";
import { Image, StyleSheet, Text, View } from "react-native"
interface IHeaderProps {
    imageUri: string;
    text: string;
}
const Header: React.FC<IHeaderProps> = (props) => {

    return (
        <View style={styles.Header}>
            <Image source={{ uri: props.imageUri }} style={styles.image} />
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Header: { height: 60, flexDirection: 'row', alignItems:"center" },
    image: { height: 55, width: 55 },
    text: { flexGrow: 1, textAlign: 'center', color:'skyblue', fontSize:35 }

})
export default Header;