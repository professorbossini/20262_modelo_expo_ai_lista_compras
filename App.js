import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import {
  Alert, FlatList, Pressable, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
      quantidade: Number(quantidade) || 0,
      comprado: false,
    };

    setItens([...itens, novo]);
    setNome('');
    setQuantidade('');
  }

  function alternarComprado(codigo) {
    setItens((itensAtuais) => itensAtuais.map((item) => (
      item.codigo === codigo ? { ...item, comprado: !item.comprado } : item
    )));
  }

  function escapar(texto) {
    return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  async function copiarLista() {
    // U+0336 (tachado combinado) mantém o risco quando o destino descarta o HTML.
    const riscar = (texto) => [...texto].map((c) => `${c}\u0336`).join('');
    const linhas = itens.map((item) => {
      const texto = `${item.nome} (${item.quantidade})`;
      if (!item.comprado) return `<li>${escapar(texto)}</li>`;
      return `<li><s style="text-decoration: line-through">${escapar(riscar(texto))}</s></li>`;
    });
    const html = `<h3>Lista de compras</h3><ul>${linhas.join('')}</ul>`;

    await Clipboard.setStringAsync(html, { inputFormat: Clipboard.StringFormat.HTML });
    Alert.alert('Lista copiada');
  }

  return (
    <SafeAreaProvider>

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
          <Pressable style={styles.botao} onPress={copiarLista}>
            <Text style={styles.textoBotao}>Copiar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  rodapeTexto: { color: '#5B6472', fontSize: 14 },
});
