import React, {Dispatch, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import lnList from './../localization/translations/languageList.json';
import i18next from './../localization';

const LanguagePicker = () => {
  const [open, setOpen] = useState(false);
  const [lng, setLng] = useState('en');
  const lngList = Object.keys(lnList).map((key: string) => ({
    label: lnList[key].nativeName,
    value: key,
  }));

  const setValue = (val: any) => {
    setLng(val);
    i18next.changeLanguage(val);
  };
  return (
    <>
      <DropDownPicker
        testID="picker"
        open={open}
        value={lng}
        items={lngList}
        setOpen={setOpen}
        setValue={callback => setValue(callback(lng))}
        dropDownContainerStyle={style.container}
        style={style.container}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    width: 100,
    borderRadius: 25,
    textAlign: 'left',
  },
});

export default LanguagePicker;
