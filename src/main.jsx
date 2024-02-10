import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App'
import AuthProvider from './contexts/AuthProvider'
import './styles/index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import SearchProvider from './contexts/SearchProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SearchProvider>
          <App />
          <Toaster />
        </SearchProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
