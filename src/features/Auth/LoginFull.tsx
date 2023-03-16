import React from 'react'
import {loginTC} from '../../state/login-reducer'
import {Navigate} from 'react-router-dom'
import {useAppDispatch} from '../../common/hooks/useAppDispatch'
import {useAppSelector} from '../../common/hooks/useAppSelector'
import {selectAuthIsLoggedIn} from '../../state/selectors'
import {Button, StyleSheet, TextInput, View, Text} from 'react-native'
import {Checkbox} from 'expo-checkbox'
import {useFormik} from 'formik'
import {Link} from '@react-navigation/native';

type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginFull = () => {

    const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: (values: any) => {
            // alert(JSON.stringify(values));
            dispatch(loginTC(values));
        },
        validate: (values: any) => {
            if (!values.email) {
                return {
                    email: 'Enter e-mail'
                }
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                return {
                    email: 'Invalid email'
                }
            }

            if (!values.password) {
                return {
                    password: 'Enter password'
                }
            }
        }
    })

    // if (isLoggedIn) {
    //     return <Navigate to={'/'}/>
    // }

    return (
        <View style={todolistMainStyles.loginGrid}>
            <View>
                <form onSubmit={formik.handleSubmit} style={todolistMainStyles.form}>
                    <View>
                        {/*<View style={todolistMainStyles.formLabel}>*/}
                        <View>
                            <Text>
                                To login get registered <Link to={'https://social-network.samuraijs.com'}>here</Link>
                            </Text>
                            <Text>
                                or use common account credentials
                            </Text>
                            <Text>
                                <Text>E-mail:</Text> free@samuraijs.com
                            </Text>
                            <Text>
                                <Text>Password:</Text> free
                            </Text>
                        </View>

                        <View>
                            <View style={todolistMainStyles.formGroupEmail}>
                                <TextInput // label="E-mail"
                                           style={{width: '252px'}}
                                           {...formik.getFieldProps('email')}
                                />
                                {
                                    formik.errors.email && formik.touched.email
                                        ? <div>{formik.errors.email}</div>
                                        : null
                                }
                            </View>

                            <View style={todolistMainStyles.formGroupPassword}>
                                <TextInput // label="Password"
                                           style={{width: '252px'}}
                                           {...formik.getFieldProps('password')}
                                           // type="password"
                                />
                                {
                                    formik.errors.password && formik.touched.password
                                        ? <div>{formik.errors.password}</div>
                                        : null
                                }
                            </View>

                            {/*<View label={'Remember Me'}*/}
                            {/*      style={{marginBottom: '10px'}}*/}
                            {/*      control={<Checkbox*/}
                            {/*          {...formik.getFieldProps('rememberMe')}*/}
                            {/*          checked={formik.values.rememberMe}*/}
                            {/*          color={'primary'}*/}
                            {/*      />}*/}
                            {/*/>*/}

                            <Button onPress={() => {formik.handleSubmit}} title='Submit'/>
                        </View>

                    </View>
                </form>
            </View>
        </View>
    )
}

// export default {}

const todolistMainStyles = StyleSheet.create({
    loginGrid: {
        marginTop: 60,
    },
    form: {
        padding: 20,
        borderRadius: 5,
        // box-shadow: 2px 2px 10px 1px gray,
        width: 300,
        textAlign: 'center',
    },
    formLabel: {
        textAlign: 'center',
    },
    formGroupEmail: {
        height: 90,
        width: '100%',
    },
    formGroupPassword: {
        height: 90,
        marginBottom: 20,
    },
})