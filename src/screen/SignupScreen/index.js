
import React from 'react';
import { View, TextInput, Button, Text, StyleSheet,} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';

const email =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const isValidEmail = email => {
		return emailReg.test(String(email).toLowerCase());
	};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Not a correct format for email address').required('Email is required'),
  password: Yup.string().min(6, 'Please use at least 6 characters').max(12, 'Maximum 12 characters allowed').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignupScreen = ({navigation}) => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '', rememberMe: false }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // Handle form submission
        console.log(values);
        navigation.navigate('BottomTab');

      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <View style={styles.container}>
          <Text style={styles.title}>SignUp</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
          />
          {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={values.rememberMe}
              onValueChange={value => setFieldValue('rememberMe', value)}
            />
            <Text style={styles.label}>Remember me</Text>
          </View>

          <Button title="Sign Up" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
});

export default SignupScreen;

