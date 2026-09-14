import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ItemLista({ item, onAlternar }) {
  return (
    <Pressable style={styles.linha} onPress={() => onAlternar(item.codigo)}>
      <View style={styles.marcador}>
        <Text style={styles.marcadorTexto}>{item.comprado ? '✓' : ''}</Text>
      </View>

      <Text style={[styles.nome, item.comprado && styles.nomeRiscado]}>
        {item.nome}
      </Text>

      <Text style={styles.quantidade}>{item.quantidade}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  marcador: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#15467A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marcadorTexto: { color: '#15467A', fontWeight: 'bold' },
  nome: { flex: 1, marginHorizontal: 12, fontSize: 16 },
  nomeRiscado: { textDecorationLine: 'line-through', color: '#9AA0A6' },
  quantidade: { fontSize: 16, fontWeight: 'bold', color: '#5B6472' },
});
