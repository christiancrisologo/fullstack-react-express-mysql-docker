// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  reducers, { initialState } from './redux/reducers'

function render(
  ui,
  {
    initialState,
    reducer,
    ...renderOptions
  } = {}
) {
    const dummy = ()=> {};
    const store =  createStore( reducer || dummy, initialState)
    console.log('#CC store ',store.getState());
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }