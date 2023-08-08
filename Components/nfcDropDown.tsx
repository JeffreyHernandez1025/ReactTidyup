// @ts-nocheck
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';


function NfcDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Shirt', value: 'Shirt'},
    {label: 'Sweater', value: 'Sweater'},
  ]);


  return (
    
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      
      //default is setopen but by changing it to writeNFCS u will make it do the write function
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='Category'
      // use this to put selected item in variable for pants or shirt
      style={{
        borderRadius: 15, height: 58, width: 343, alignSelf: "center",  borderStyle: "solid",
        borderWidth: 1,
      }}
      textStyle={{
        textAlign: "left",
        fontSize: 14,
        fontWeight: '400',
        color: '#61646B'
      }}


      
      
     

    />

    
  );
}
export default NfcDropDown;



