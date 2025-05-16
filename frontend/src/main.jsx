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
import { DetailsProvider } from './contex/tripDetails-contex/DetailsProvider.jsx'
import { ActionProvider } from './contex/user-actions.jsx/ActionProvider.jsx'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CategoryContex>
            <DateContex>
                <FilterProvider>
                    <AuthProvider>
                        <WishListProvider>
                            <DetailsProvider>
                                <ActionProvider>
                                    <App/>
                                </ActionProvider>
                            </DetailsProvider>
                        </WishListProvider>
                    </AuthProvider>
                </FilterProvider>
            </DateContex>
        </CategoryContex>
    </BrowserRouter>

)
