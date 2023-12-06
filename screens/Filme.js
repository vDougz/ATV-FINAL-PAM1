import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const filmes = [
    {
        codigo_filme:1,
        titulo_filme: 'Alita',
        desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
        imagem_filme:require('../assets/imagens/FotosFilmes/Alita.jpg'),
    },
    {
        codigo_filme:1,
        titulo_filme: 'As Marvels',
        desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
        imagem_filme:require('../assets/imagens/FotosFilmes/AsMarvels.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Bela e a Fera',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/BelaeaFera.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Branca de neve',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/BrancadeNeve.jpg'),
    },
    {
    codigo_filme:1,
    titulo_filme: 'Como eu era antes de você',
    desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
    imagem_filme:require('../assets/imagens/FotosFilmes/ComoEuEraAntesdeVoce.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'ELA',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/ELA.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Harry Potter',
      desc_filme:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/HarryPotter.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Jhon Wick',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/JhonWick.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Missão Impossivel Fallout',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/MissaoImpossivelFallout.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Mulan',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/Mulan.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'O Impossivel',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/OImpossivel.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Rei Leão 1',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/ReiLeao1.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Rei Leão 2',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/ReiLeao2.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Rei Leão 3',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/ReiLeao3.jpg'),
    },
    {
      codigo_filme:1,
      titulo_filme: 'Resgate',
      desc_filme:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus tellus, maximus vitae tempus id, ornare ac quam. Nullam eu diam mi.',
      imagem_filme:require('../assets/imagens/FotosFilmes/Resgate.jpg'),
    },


];

const filmeItem = ({item}) => { return (
    <View style={styles.filme_container}>
    <Image
      style={styles.filme_image}
      source={item.imagem_filme}
    />
  <View styles={styles.filme_text_container}>
    <Text style={styles.filme_data}>{item.titulo_filme}</Text>

    <Text style={styles.filme_desc}>{item.desc_filme}</Text>
  
    <TouchableOpacity style={styles.filme_button_details}>
      <Text style={styles.filme_button_text}>ASSISTIR</Text>
  
    </TouchableOpacity>

    <TouchableOpacity style={styles.filme_button_details}>
      <Text style={styles.filme_button_text}>DETALHES</Text>
  
    </TouchableOpacity>
  
  
  </View>
    </View>
    )
  }

  export default function Filme() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={filmes}
          renderItem={filmeItem}
          ListEmptyComponent={<Text>A LISTA DE FILMES ESTÁ VAZIA</Text>}
          keyExtractor={filmes => filmes.codigo_filme}
      />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171718',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filme_container:{
        flex:1,
        flexDirection:'row',
        padding:15,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#3c3c3c',
        marginBottom:10,
        marginTop:10,
        backgroundColor:'#515151',
        width: 350,
        
    },
    filme_image:{
        width:120,
        height:220,
        marginRight:10,
        marginBottom:10,
    },
    filme_text_container:{
        width:20,
        justifyContent:'center',
    },
    filme_data:{
        fontSize:19,
        fontWeight:'600',
        width:'100%',
        textAlign:'center',
        marginLeft:16,
        color: '#fff',
        
    },
    filme_desc: {
        fontSize:12,
        width:150,
        marginLeft:10,
        
        marginTop:5,
        fontWeight:'600',
        textAlign:'justify',
        color: '#fff',

    },
    filme_button_details:{
        alignItems: 'center',
        backgroundColor: '#a20202',
        padding: 10,
        borderRadius:5,
        marginTop:10,
        width:150,
        marginLeft:20,
        
    },
    filme_button_text:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'bold',
    },
  });



   