import Home from './components/Home'
import Portofolio from './components/portofolio/Portofolio'
import Stocks from './components/stocks/Stocks'

export const routes = [
    { path: '/', component: Home },
    { path: '/portofolio', component: Portofolio },
    { path: '/stocks', component: Stocks }
]