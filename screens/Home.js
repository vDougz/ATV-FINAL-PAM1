import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
    <View style={styles.container}>
        <Text style={styles.BV}>BEM VINDO</Text>
        <Text style={styles.corpo}>Aplicativo de streaming de filmes online e gratuito! ☠️</Text>
        <Image style={styles.imgpirata}
            source={require("../assets/imagens/HomeImage/pirataria.jpg")}
        />
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3c4349',
        alignItems: 'center',
        padding: 25
    },

    BV: {
        color: 'white',
        fontSize: 24
    },  

    corpo: {
        color:'white',
        fontSize: 20,
        paddingTop: 10
    },
    imgpirata:{
        width:300,
        height:220,
        marginTop: 25
        
    },
    

});
