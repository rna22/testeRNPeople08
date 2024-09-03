import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';
import { auth } from '../services/firebaseConfig';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

const fetchDogs = async (page = 1, limit = 4) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/images/search?page=${page}&limit=${limit}`);
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};

const fetchBreeds = async () => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    return response.data || [];
  } catch (error) {
    console.error("Erro ao buscar dados das raças:", error);
    return [];
  }
};

const combineDogsWithBreeds = (dogs, breeds) => {
  return dogs.map(dog => {
    const breed = breeds.find(b => dog.url.includes(b.reference_image_id));
    return {
      ...dog,
      breed: breed || null,
    };
  });
};

const DogCard = ({ dog, isFavorite, onToggleFavorite, isGuest }) => {
  const breed = dog.breed;
  return breed ? (
    <View style={styles.itemContainer}>
      <Image source={{ uri: dog.url }} style={styles.image} />
      {!isGuest && (
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={() => onToggleFavorite(dog.id)}
        >
          <Text style={styles.favoriteButtonText}>{isFavorite ? '♥' : '♡'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.name}>{breed.name}</Text>
      <Text style={styles.details}>Life Span: {breed.life_span}</Text>
    </View>
  ) : null;
};

const HomeScreen = () => {
  const [dogs, setDogs] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const loadDogs = async (pageNumber = 1) => {
    if (loading) return;

    setLoading(true);

    try {
      const [newDogs, breeds] = await Promise.all([fetchDogs(pageNumber), fetchBreeds()]);
      const combinedDogs = combineDogsWithBreeds(newDogs, breeds);
  
      if (combinedDogs.length > 0) {
        setDogs(prevDogs => [...prevDogs, ...combinedDogs]);
        setPage(pageNumber);
      } else {
        console.warn("Nenhum cachorro retornado para a página:", pageNumber); // Esta linha foi adicionada
      }
    } catch (error) {
      console.error('Error loading dogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
      if (currentUser) {
        loadDogs();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoadMore = () => {
    if (!loading) {
      loadDogs(page + 1);
    }
  };

  const toggleFavorite = (dogId) => {
    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(dogId)) {
        newFavorites.delete(dogId);
      } else {
        newFavorites.add(dogId);
      }
      return newFavorites;
    });
  };

  const filteredDogs = dogs.filter(dog => dog.breed != null);

  const getItemLayout = (data, index) => ({
    length: 150,
    offset: 150 * index,
    index,
  });

  const renderDog = useCallback(({ item }) => (
    <DogCard
      dog={item}
      isFavorite={favorites.has(item.id)}
      onToggleFavorite={toggleFavorite}
      isGuest={user?.isAnonymous}
    />
  ), [favorites, user]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("Você desconectou-se do sistema!");
        router.replace('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.internalContainer}>
      <View style={styles.topBar}>
        <Pressable onPress={logout}>
          <Text style={styles.txt}>Sair</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredDogs}
        renderItem={renderDog}
        keyExtractor={(item) => item.id}
        initialNumToRender={4}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => loading && <ActivityIndicator size="large" color="#FF8C00" style={{ padding: 10 }} />}
        getItemLayout={getItemLayout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  favoriteButtonActive: {
    borderColor: 'red',
  },
  favoriteButtonText: {
    fontSize: 20,
    color: 'black',
  },
  infoContainer: {
    padding: 10,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: 10,
    paddingTop: 5,
  },
  topBar: {
    flexDirection: 'row-reverse',
    padding: 10,
    backgroundColor: "#FF8C00",
    width: '100%',
  },
  internalContainer: {
    paddingTop: 25,
  }
});

export default HomeScreen;
