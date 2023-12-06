import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const categoria = [
    {
        codigo_categoria:1,
        titulo_categoria: 'Disney',
        imagem_categoria:require('../assets/imagens/CateCapa/Disney.png'),
    },
    {
      codigo_categoria:2,
      titulo_categoria: 'Terror',
      imagem_categoria:require('../assets/imagens/CateCapa/Terror.png'),
    },
    {
      codigo_categoria:3,
      titulo_categoria: 'Ação',
      imagem_categoria:require('../assets/imagens/CateCapa/Acao.png'),
    },
    {
      codigo_categoria:4,
      titulo_categoria: 'Romance',
      imagem_categoria:require('../assets/imagens/CateCapa/Romance.png'),
    },
];

const categoriaItem = ({item}) => { return (
    <View style={styles.categoria_container}>
    <Image
      style={styles.categoria_image}
      source={item.imagem_categoria}
    />
  <View styles={styles.categoria_text_container}>
    <Text style={styles.categoria_data}>{item.titulo_categoria}</Text>

    <TouchableOpacity style={styles.categoria_button_details}>
      <Text style={styles.categoria_button_text}>VER TODOS</Text>
    </TouchableOpacity>
  
  
  </View>
    </View>
    )
  }

  export default function Categoria() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categoria}
          renderItem={categoriaItem}
          ListEmptyComponent={<Text>A LISTA DE CATEGORIA ESTÁ VAZIA</Text>}
          keyExtractor={categoria => categoria.codigo_categoria}
      />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171718',
        alignItems: 'center',
        

        
    },
    categoria_container:{
        padding:15,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#3c3c3c',
        marginBottom:20,
        marginTop:10,
        backgroundColor:'#515151',
        width: 350,
        alignItems: 'center',
        
        
    },
    categoria_image:{
      width:'100%',
      height:220,
      marginBottom:20,
      borderRadius:15,
  },
    categoria_text_container:{
      width:200,
      justifyContent: 'center',
  },
    categoria_data:{
        fontSize:20,
        fontWeight:'600',
        width:'100%',
        color: '#fff',
        alignSelf:'center',
        
    },
    
    categoria_button_details:{
        alignItems: 'center',
        backgroundColor: '#a20202',
        padding: 10,
        borderRadius:5,
        marginTop:20,
        width:150,
        
    },
    categoria_button_text:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'bold',
    },
  });
