import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

export const ListaProductos = ({ Imagen, Nombre, Descripcion, Stock, Categoria, Precio }) => {
    const [imageError, setImageError] = useState(false);
    const imageUri = typeof Imagen === 'string' ? Imagen.trim() : '';

    return (
        <View style={styles.cardList}>
            {imageUri && !imageError ? (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.productImage}
                    resizeMode="contain"
                    accessibilityLabel={`Imagen de ${Nombre}`}
                    onError={() => setImageError(true)}
                />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>
                        {imageError ? 'No se pudo cargar la imagen' : 'Sin imagen'}
                    </Text>
                </View>
            )}
            <Text style={[styles.textCardClients, styles.productName]} numberOfLines={2}>
                {Nombre}
            </Text>
            <Text style={[styles.textCardClients, styles.productDescription]} numberOfLines={3}>
                {Descripcion}
            </Text>
            <View style={styles.detailsRow}>
                <Text style={[styles.textCardClients, styles.detailText]} numberOfLines={1}>
                    Stock: {Stock}
                </Text>
                <Text style={[styles.textCardClients, styles.detailText]} numberOfLines={1}>
                    {Categoria}
                </Text>
            </View>
            <Text style={[styles.textCardClients, styles.productPrice]}>
                ${Number(Precio || 0).toFixed(2)}
            </Text>
            <Pressable style={styles.cartButton}>
                <Text style={styles.textBtnSaveData}>Agregar al carrito </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        minWidth: 0,
        backgroundColor: '#1f2937',
        gap: 5,
        borderRadius: 10,
        padding: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#374151',
        elevation: 2,
    },
    productImage: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#273449',
    },
    imagePlaceholder: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        backgroundColor: '#273449',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderText: {
        color: '#9ca3af',
    },
    textCardClients: {
        fontSize: 16,
        color: '#d1d5db',
    },
    productName: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        minHeight: 46,
    },
    productDescription: {
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: 16,
        minHeight: 60,
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 4,
    },
    detailText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
    },
    productPrice: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5eead4',
        paddingVertical: 4,
    },
    cartButton: {
        width: '100%',
    },
    textBtnSaveData: {
        backgroundColor: '#14b8a6',
        color: '#062925',
        padding: 10,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
});
    
