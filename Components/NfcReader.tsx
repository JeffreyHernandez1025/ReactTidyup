// @ts-nocheck
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import NfcManager, { Ndef, NfcEvents, NfcTech } from 'react-native-nfc-manager';
import styles from '../assets/styles/styles';
import NfcDropDown from './nfcDropDown';
import Add from '../assets/images/addimg.png'
import Exit from '../assets/images/Exit.png'


export default function NfcReader({ navigation }): JSX.Element {
  const [nfc, setNfc] = useState<Boolean>(false);
  const [img, setImg] = useState(false)
  const [text, onChangeText] = useState('')

  // checks if the device supports NFC
  useEffect(() => {
    const checkSupported = async () => {
      const deviceSupported = await NfcManager.isSupported();

      setNfc(deviceSupported);
      if (deviceSupported) {
        await NfcManager.start();
      }
    };

    checkSupported();
  }, []);

  // read the nfc tag

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  /// Write to the NFC-using async when sending or recieving data
  const writeNFC = async () => {
    let result = false;

    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const byteData = Ndef.encodeMessage([
        Ndef.uriRecord('https://www.instagram.com/partyingwiththetates/?hl=en'),
      ]);
      if (byteData) {
        await NfcManager.ndefHandler.writeNdefMessage(byteData);
        console.log('wrote');
        result = true;
      }
    } catch (e) {
      console.warn(e);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
    return result;
  };

  if (nfc === null) return <></>;

  if (!nfc) {
    return (
      <View>
        <Text>NFC not supported</Text>
      </View>
    );
  }

  return (
    <View>
      {/* Page Container */}
      <View style={[styles.scanBackground, {backgroundColor: img ? 'white' : '#D9D9D9', justifyContent: img ? 'flex-end' : 'center'}]}>
        {img ? <Image source={{uri: 'https://is4.revolveassets.com/images/p4/n/z/NIKR-MS3_V1.jpg'}} style={{height: 380, width: 320, alignSelf:'center'}} /> : <TouchableOpacity onPress={() => {
          setImg(true)
        }}>
          <Image source={Add} style={styles.addImage} />
        </TouchableOpacity>}
      </View>

      <View style={styles.scanAndWriteContainer}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.addTagText}> Add Hanger</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Home')
              console.log('tapped')
            }}
              style={{ top: 37, left: 240 }}
            >
              <Image source={Exit} style={styles.exitNFC} />
            </TouchableOpacity>
          </View>
          <View>
            <TextInput placeholder='Name' placeholderTextColor='#61646B' style={styles.writeNfcButtonInput} value={text} onChangeText={onChangeText} />
          </View>
          <View>
          </View>
          {/* Name Input */}

          <View style={{ top: 195 }} >
            <NfcDropDown />
          </View>
          {/* Done Button Container */}
          <View>
            <TouchableOpacity
              onPress={writeNFC}
              style={styles.writeToNfcDoneButton}>
              <Text style={styles.writeToNfcButtonText}>Done</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  );
}
