import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme/index.css'
import { ToastProvider } from './components/ui/toast/ToastProvider.tsx'
import { AppRouter } from './router/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
    <ToastProvider>
        <StrictMode>
            <AppRouter />
        </StrictMode>
    </ToastProvider>
)
