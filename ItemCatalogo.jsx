import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

export default function ItemCatalogo({ foto, nome, descricao, preco, nivelPreco = '$$$' }) {
  const { width } = useWindowDimensions();
  const isDesktop = width > 768;
  const fonteFoto = typeof foto === 'string' ? { uri: foto } : foto;

  return (
    <View style={[styles.card, isDesktop && styles.cardDesktop]}>
      <View style={[styles.containerImagem, isDesktop && styles.containerImagemDesktop]}>
        <Image source={fonteFoto} style={styles.foto} resizeMode="cover" />
      </View>

      <View style={styles.info}>
        <View style={styles.linhaCabecalho}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.nivelPreco}>{nivelPreco}</Text>
        </View>

        <Text style={styles.descricao}>{descricao}</Text>

        <View style={styles.linhaRodape}>
          <Text style={styles.preco}>{preco}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0cfcf',
    borderRadius: 16,
    marginBottom: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
    flex: 1,
  },

  //Ajustando o espaçamento lateral entre os cards. Quando o aplicativo é aberto em telas grandes
  cardDesktop: {
    marginHorizontal: 10,
  },
  containerImagem: {
    width: '100%',
    height: 250,
  },
  containerImagemDesktop: {
    height: 350,
  },
  foto: {
    width: '100%',
    height: '90%',
  },
  info: {
    padding: 10,
  },
  linhaCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  nivelPreco: {
    fontSize: 14,
    color: '#83850c',
    fontWeight: '600',
  },
  descricao: {
    fontSize: 13,
    color: '#160f0f',
    marginBottom: 10,
  },
  linhaRodape: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});