import React, {useState}from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"
import {Ionicons} from '@expo/vector-icons'


//eye e eye-off
export function PasswordItem( {data, removePassword}){
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{passwordVisibility ? "*".repeat(data.length)  : data}</Text>
            <Pressable onPress={togglePasswordVisibility}>
                <Ionicons 
                name={passwordVisibility ? "eye-off" : "eye"} 
                size={20} 
                color="white" 
                />
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    text:{
        color: "#fff"
    }
})