import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryContex } from './contex/CategoryContex.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DateContex } from './contex/date-contex/DateContex.jsx'
import { FilterProvider } from './contex/filter-contex/FilterProvider.jsx'
import { AuthProvider } from './contex/auth-contex/AuthProvider.jsx'
import { WishListProvider } from './contex/wishList-contex/WishListProvider.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CategoryContex>
            <DateContex>
                <FilterProvider>
                    <AuthProvider>
                        <WishListProvider>
                            <App/>
                        </WishListProvider>
                    </AuthProvider>
                </FilterProvider>
            </DateContex>
        </CategoryContex>
    </BrowserRouter>

)
