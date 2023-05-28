import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import React from 'react'; 

export default function ListItem({name, abbv, currentPrice, priceChangePercentage7d, logoURL, onPress}) 
{
    const priceChangeColor = priceChangePercentage7d > 0 
                           ? "lightgreen" 
                           : "red"; 
  
    return (
    <View> 
    <TouchableOpacity onPress={onPress}> 
        <View style={styles.itemWrapper}> 
            {/* Left side */} 
            <View style={styles.leftWrapper}>
                <Image style={styles.image} source={{uri: logoURL}} /> 
                <View style={styles.titlesWrapper}> 
                    <Text style={styles.title}>{name}</Text> 
                    <Text style={styles.subtitle}>{abbv.toUpperCase()}</Text> 
                </View> 
            </View> 
            {/* Right side */} 
            <View style={styles.rightWrapper}> 
                <Text style={styles.title}>${currentPrice.toLocaleString("en-US", {currency:"USD"})}</Text> 
                <Text style={[styles.subtitle, {color:priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text> 
            </View> 
        </View> 
    </TouchableOpacity> 
    </View> 
  ); 
}; 

const styles = StyleSheet.create
({
    itemWrapper: 
    {
        paddingHorizontal: 16, 
        margin: 8, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    }, 
    leftWrapper: 
    {
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    image: 
    {
        height: 48, 
        width: 48, 
    }, 
    titlesWrapper: 
    {
        marginLeft: 8, 
    }, 
    rightWrapper: 
    {
        alignItems: 'flex-end', 
    }, 
    title: 
    {
        fontSize: 18, 
        color: "black", 
    }, 
    subtitle: 
    {
        marginTop: 4, 
        fontSize: 14, 
        color: "lightgray", 
        fontWeight: 'bold', 
    }, 
}); 