import './css/bootstrap.min.css'
import './index.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'
import reducer from './reducers/'

const store = createStore(reducer)

store.subscribe(_ => console.log(store.getState()))


render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
)
