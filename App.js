import { useState } from 'react';
import {
  FlatList, Pressable, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

import ItemLista from './components/ItemLista';
import { ITENS_INICIAIS } from './data/itens';

export default function App() {
  const [itens, setItens] = useState(ITENS_INICIAIS);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const resumo = {
    total: itens.length,
    comprados: itens.filter((item) => item.comprado).length,
  };

  const totalUnidades = itens.reduce((soma, item) => soma + item.quantidade, 0);

  function adicionarItem() {
    if (nome.trim() === '') return;

    const novo = {
      codigo: String(Date.now()),
      nome: nome.trim(),
      quantidade: Number(quantidade) || 1,
      comprado: false,
    };

    setItens([...itens, novo]);
    setNome('');
    setQuantidade('');
  }

  function alternarComprado(codigo) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setItens(
      itens.map((item) =>
        item.codigo === codigo ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.campoNome}
          placeholder="Item"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.campoQuantidade}
          placeholder="Qtd"
          keyboardType="numeric"
          value={quantidade}
          onChangeText={setQuantidade}
        />
        <Pressable style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </Pressable>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <ItemLista item={item} onAlternar={alternarComprado} />
        )}
      />

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>
          {resumo.comprados} de {resumo.total} itens · {totalUnidades} unidades
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  titulo: {
    fontSize: 24, fontWeight: 'bold', color: '#15467A',
    paddingHorizontal: 16, paddingTop: 12, paddingBottom: 8,
  },
  formulario: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingBottom: 12, gap: 8,
  },
  campoNome: {
    flex: 1, borderWidth: 1, borderColor: '#D6D9DE',
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8,
  },
  campoQuantidade: {
    width: 60, borderWidth: 1, borderColor: '#D6D9DE',
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#15467A', borderRadius: 8,
    paddingHorizontal: 14, paddingVertical: 10,
  },
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold' },
  rodape: {
    borderTopWidth: 1, borderTopColor: '#E5E5E5',
    paddingHorizontal: 16, paddingVertical: 12,
  },
  rodapeTexto: { color: '#5B6472', fontSize: 14 },
});
