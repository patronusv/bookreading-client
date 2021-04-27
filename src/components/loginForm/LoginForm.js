import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleAuth from '../googleAuth/GoogleAuth';
// import { useHistory } from 'react-router';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import authOperations from '../../redux/operations/authOperations';
import LoginFormWrapper from './LoginFormStyled';
// import { isAuth } from '../../redux/selectors/authSelectors';

const LoginForm = () => {
	// const isAuthFlag = useSelector(isAuth);

	const validateSchema = yup.object().shape({
		email: yup.string().email('Введіть вірну адресу').required("Обов'язково"),
		password: yup
			.string()
			.min(8, 'Пароль не менш 8 символів')
			.max(16, 'Пароль не більш 16 символів')
			.required("Обов'язково")
			.matches(
				'^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
				'Не менше 8 символів, 1 верхній регістр, 1 нижній регістр, 1 число та 1 символ спеціального регістру'
			),
	});

	const dispatch = useDispatch();

	const onHandleSubmit = values => {
		dispatch(authOperations.loginOperation(values));
	};

	return (
		<LoginFormWrapper>
			<p className='google'>
				<GoogleAuth />
			</p>

			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validateSchema}
				isInitialValid={false}
				onSubmit={values => {
					onHandleSubmit(values);
				}}>
				{({ values, isValid, dirty, isSubmitting, handleSubmit }) => (
					<Form>
						<section className='form'>
							<label className='formLabel'>
								<p className='formLabelText'>
									Електронна адреса <span className='text'>*</span>
								</p>

								<Field
									className='formInput'
									type='email'
									name='email'
									value={values.email}
									placeholder='your@email.com'
								/>

								<ErrorMessage className='error' name='email' component='section' />
							</label>

							<label className='formLabel'>
								<p className='formLabelText'>
									Пароль <span className='text'>*</span>
								</p>

								<Field
									className='formInput'
									type='password'
									name='password'
									value={values.password}
									placeholder='Пароль'
								/>

								<ErrorMessage className='error' name='password' component='section' />
							</label>
						</section>

						<button
							onClick={handleSubmit}
							className='formBtn'
							disabled={(!isValid && !dirty) || isSubmitting}
							type='submit'>
							<span>Увійти</span>
						</button>

						<p className='formLink'>
							<a className='registr' href='/register'>
								Реєстрація
							</a>
						</p>
					</Form>
				)}
			</Formik>
		</LoginFormWrapper>
	);
};

export default LoginForm;