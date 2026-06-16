import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme/index.css'
import App from './App.tsx'
import { ToastProvider } from './components/ui/toast/ToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <ToastProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </ToastProvider>
)
