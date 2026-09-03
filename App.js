import { View, Text, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import ItemCatalogo from './ItemCatalogo';
import { catalogo } from './catalogo';

export default function App() {
  const { width } = useWindowDimensions();
  const numColumns = width > 768 ? 2 : 1;

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        numColumns={numColumns}
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        data={catalogo}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.titulo}>Melhores Filmes de 2026</Text>
            <Text style={styles.subtitulo}>Os grandes sucessos e lançamentos do cinema no ano</Text>
          </View>
        }
        renderItem={({ item }) => (
          <ItemCatalogo
            foto={item.foto}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            nivelPreco={item.nivelPreco}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f8', height: '100%' },
  lista: { flex: 1 },
  listaConteudo: {
    paddingBottom: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});