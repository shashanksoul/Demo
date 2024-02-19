import React, {Dispatch, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import lnList from './../localization/translations/languageList.json';
import i18next from './../localization';
import {saveCurrentLng} from '../utils/language';

const LanguagePicker = () => {
  const [open, setOpen] = useState(false);
  const [lng, setLng] = useState(i18next.language);
  const lngList = Object.keys(lnList).map((key: string) => ({
    label: lnList[key].nativeName,
    value: key,
  }));

  const setValue = (val: any) => {
    setLng(val);
    saveCurrentLng(val);
    i18next.changeLanguage(val);
  };

  useEffect(() => {
    i18next.on('languageChanged', ln => setLng(ln));
    return () => i18next.off('languageChanged');
  }, []);
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
