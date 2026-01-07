import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'  // Add this line
import { Provider } from 'react-redux'
import store from './redux/store'
import {SnackbarProvider} from "notistack"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={3000}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
)