// Components
import Home from './routes/Home.svelte'
import Stock from './routes/Stock.svelte'
import User from './routes/Users.svelte'
import Holding from './routes/Holdings.svelte'
import Settings from './routes/UserSettings.svelte'
import NotFound from './routes/NotFound.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,

    // Using named parameters, with last being optional
    '/stock/:symbol/': Stock,

    '/user/:symbol/:name/': Holding,

    '/user/:name/': User,

    '/settings/:user/': Settings,

    // Catch-all, must be last
    '*': NotFound,
}
