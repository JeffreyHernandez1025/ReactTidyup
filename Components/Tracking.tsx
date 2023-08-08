// @ts-nocheck
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../assets/styles/styles';
import useClothesFlatList from '../hooks/useClothes';
import ClothingCard from './ClothingCard';
import See from '../assets/images/view.png';

export default function Tracking({navigation}) {
  // object destructuring
  const {clothesFlatList, setClothesFlatList, donateVisible, setDonateVisible} =
    useClothesFlatList();

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10
        }}>
        <Text style={styles.leastused}> Least Used</Text>
        <TouchableOpacity>
          <Image source={See} style={styles.viewAll} />
        </TouchableOpacity>
      </View>
      <View>
        <ClothingCard
          setClothesFlatList={setClothesFlatList}
          clothesFlatList={clothesFlatList}
          navigation={navigation}
          donateVisible={donateVisible}
          setDonateVisible={setDonateVisible}
          category="Least"
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10
        }}>
        <Text style={styles.leastused}> Shirts</Text>
      </View>

      <View style={styles.shirtsList}>
        <ClothingCard
          setClothesFlatList={setClothesFlatList}
          clothesFlatList={clothesFlatList}
          navigation={navigation}
          donateVisible={donateVisible}
          setDonateVisible={setDonateVisible}
          category="Shirt"
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10
        }}>
        <Text style={styles.leastused}> Sweaters</Text>
      </View>

      <View style={styles.pantsList}>
        <ClothingCard
          setClothesFlatList={setClothesFlatList}
          clothesFlatList={clothesFlatList}
          navigation={navigation}
          donateVisible={donateVisible}
          setDonateVisible={setDonateVisible}
          category="Sweater"
        />
      </View>
    </View>
  );
}
