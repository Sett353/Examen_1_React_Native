import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import { ListaProductos } from './components/ListaProductos';


export default function App() {

  const [listProducts, setlistProducts] = useState([
    {
      id: "producto-inicial",
      Imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      Nombre: "Producto 1",
      Descripcion: "Descripcion del producto 1",
      Stock: 10,
      Categoria: "Categoria 1",
      Precio: 10.99
    }
  ])

  const [modal, setModal] = useState(false);
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const guardarDatos = () => {
    setlistProducts([
      ...listProducts,
      {
        id: Date.now().toString(),
        Imagen: imagen.trim(),
        Nombre: nombre,
        Descripcion: descripcion,
        Stock: stock,
        Categoria: categoria,
        Precio: precio
      }
    ])
    setImagen("");
    setNombre("");
    setDescripcion("");
    setStock("");
    setCategoria("");
    setPrecio("");
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Listado de Productos</Text>
      </View>
      <View style={styles.barSearch}>
        <Text style={styles.textBarSearch}>Buscar</Text>
        <TextInput
          style={styles.inputSearch}
          placeholder='Buscar producto'
          placeholderTextColor='#9ca3af'
        />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={listProducts}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          contentContainerStyle={styles.productList}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <View style={styles.Mensaje}>
              <Text style={styles.mensajeError}>No tienes productos</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.productCell}>
              <ListaProductos Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} Stock={item.Stock} Categoria={item.Categoria} Precio={item.Precio} />
            </View>
          )}
        >
        </FlatList>
      </View>
      <Modal
        visible={modal}
        animationType='slide'
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.cabeceraModal}>
            <Text style={styles.tituloModal}>Nuevo producto</Text>
            <Pressable
              onPress={() => setModal(false)}>
              <Text style={styles.tituloModal}>X</Text>
            </Pressable>
          </View>
          <View style={styles.cuerpoFormulario}>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>Nombre producto</Text>
              <TextInput style={styles.inputText}
                placeholder='Nombre producto'
                placeholderTextColor='#9ca3af'
                value={nombre}
                onChangeText={setNombre}
              />
            </View>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>URL de la imagen</Text>
              <TextInput style={styles.inputText}
                placeholder='https://ejemplo.com/imagen.jpg'
                placeholderTextColor='#9ca3af'
                value={imagen}
                onChangeText={setImagen}
                autoCapitalize='none'
              />
            </View>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>Descripcion</Text>
              <TextInput style={styles.inputText}
                placeholder='Descripcion'
                placeholderTextColor='#9ca3af'
                value={descripcion}
                onChangeText={setDescripcion}
              />
            </View>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>Stock</Text>
              <TextInput style={styles.inputText}
                placeholder='Stock'
                placeholderTextColor='#9ca3af'
                value={stock}
                onChangeText={setStock}
              />
            </View>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>Categoria</Text>
              <TextInput style={styles.inputText}
                placeholder='Categoria'
                placeholderTextColor='#9ca3af'
                value={categoria}
                onChangeText={setCategoria}
              />
            </View>
            <View style={styles.CamposFormulario}>
              <Text style={styles.fieldLabel}>Precio</Text>
              <TextInput style={styles.inputText}
                placeholder='Precio'
                placeholderTextColor='#9ca3af'
                value={precio}
                onChangeText={setPrecio}
              />
            </View>
          </View>
            <Pressable
              onPress={guardarDatos}
              style={styles.btnSaveData}>
              <Text style={styles.textBtnSaveData}>Agregar producto</Text>
            </Pressable>
        </View>
      </Modal>
      <StatusBar style="light" />
      <Pressable
        onPress={() => setModal(true)}
        style={styles.ProductoNuevo}>
        <Text style={styles.TextnewRegister}>Agregar Producto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    backgroundColor: '#0b1220',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#273449'
  },
  textHeader: {
    color: '#f3f4f6',
    fontSize: 22,
    fontWeight: 'bold'
  },
  barSearch: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 6,
    backgroundColor: '#111827'
  },
  textBarSearch: {
    fontSize: 16,
    fontWeight: '600',
    color: '#d1d5db'
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    color: '#f3f4f6',
    backgroundColor: '#1f2937'
  },
  containerList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10
  },
  productList: {
    paddingBottom: 90
  },
  productRow: {
    marginBottom: 10
  },
  productCell: {
    width: '50%',
    flexGrow: 0,
    flexShrink: 0,
    paddingHorizontal: 5
  },
  Mensaje: {
    paddingVertical: 28,
    alignItems: 'center'
  },
  mensajeError: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9ca3af'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#111827'
  },
  cabeceraModal: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#0b1220',
    alignItems: 'center'
  },
  tituloModal: {
    color: '#f3f4f6',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cuerpoFormulario: {
    padding: 24,
    flex: 1,
    backgroundColor: '#111827'
  },

  CamposFormulario: {
    marginTop: 16
  },
  fieldLabel: {
    color: '#d1d5db',
    marginBottom: 5
  },

  inputText: {
    borderWidth: 1,
    borderColor: '#374151',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: '#f3f4f6',
    backgroundColor: '#1f2937'
  },
  btnSaveData: {
    position: 'absolute',
    bottom: 25,
    left: 24,
    backgroundColor: '#14b8a6',
    width: '90%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnSaveData: {
    color: '#062925',
    fontSize: 18,
    fontWeight: 'bold'
  },
  ProductoNuevo: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#14b8a6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    elevation: 5
  },
  TextnewRegister: {
    color: '#062925',
    fontWeight: 'bold'
  }
});
