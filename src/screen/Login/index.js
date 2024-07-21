
import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';





const validationSchema = Yup.object().shape({
  
     email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be less than 12 characters')
    .required('Password is required'),
});

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignin = async values => {
    setLoading(true);
    try {
      // Your API call for sign-in
      // Example:
      // const response = await axios.post('https://yourapiurl.com/signin', values);
      // if (response.status === 200) {
      //   navigation.navigate('Home');
      // } else {
      //   alert('Sign-in Failed');
      // }
    } catch (error) {
      console.error(error);
      alert('Error: Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleSignin=>navigation.navigate('SignupScreen')}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched, }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={[
              styles.input,
              touched.email && errors.email ? styles.inputError : null,
            ]}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.password && errors.password ? styles.inputError : null,
            ]}
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <Button
            title={'Login'}
            onPress={handleSubmit}
            disabled={loading}
          />
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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
