import {Formik, FormikHelpers} from 'formik';
import React, {useCallback, useRef, useState} from 'react';
import PagerView from 'react-native-pager-view';
import * as Yup from 'yup';
import {View, Text} from '@components';
import {useTranslation, useTheme} from '@hooks';
import {FifthPage, FirstPage, FourthPage, Pagination, SecondPage, ThirdPage} from './components';
import styles from './styles';

type TFormData = {
  name: string;
  secondName: string;
  city: string;
  birthday: string;
  gender: 'мужской' | 'женский' | '';
  married: string;
  socialStatus: string;
};
const initialFormValue: TFormData = {
  name: '',
  secondName: '',
  city: '',
  birthday: '',
  gender: '',
  married: '',
  socialStatus: '',
};
const Onboarding: React.FC = () => {
  const {t} = useTranslation();
  const {colors} = useTheme();

  const CarouselRef = useRef<PagerView>(null);
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<null | {}>(null);

  const validationSchema = Yup.object({
    name: Yup.string().trim().required('name is required!'),
    secondName: Yup.string().trim().required('second name is required!'),
    city: Yup.string().trim().required('city is required!'),
  });

  const onSubmitForm = useCallback((values: TFormData, actions: FormikHelpers<TFormData>) => {
    console.log(values);
    setData(values);
    actions.resetForm();
  }, []);

  const onPressNext = useCallback(() => {
    CarouselRef.current?.setPage(page + 1);
    setPage(page + 1);
  }, [page]);

  return (
    <View style={styles.container}>
      <Formik initialValues={initialFormValue} onSubmit={onSubmitForm} validationSchema={validationSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => {
          return (
            <PagerView
              ref={CarouselRef}
              style={styles.pageViewContainer}
              initialPage={0}
              overScrollMode="never"
              overdrag={true}
              scrollEnabled={false}>
              <View key="0">
                <FirstPage
                  handleChangeBirthday={handleChange('birthday')}
                  birthdayValue={values.birthday}
                  handleChangeName={handleChange('name')}
                  handleChangeSecondName={handleChange('secondName')}
                  nameValue={values.name}
                  secondNameValue={values.secondName}
                  onPressNext={onPressNext}
                  handleBlurName={handleBlur('name')}
                  handleBlurSecondName={handleBlur('secondName')}
                  nameError={errors.name}
                  secondNameError={errors.secondName}
                />
              </View>
              <View key="1">
                <SecondPage cityValue={values.city} handleChangeCity={handleChange('city')} onPressNext={onPressNext} />
              </View>
              <View key="2">
                <ThirdPage handleChangeGender={handleChange('gender')} onPressNext={onPressNext} />
              </View>
              <View key="3">
                <FourthPage handleChangeMarried={handleChange('married')} onPressNext={onPressNext} />
              </View>
              <View key="4">
                <FifthPage handleChangeStatus={handleChange('socialStatus')} onPressSubmit={handleSubmit} />
              </View>
            </PagerView>
          );
        }}
      </Formik>
      <Pagination activePage={page} />
    </View>
  );
};

export default Onboarding;
