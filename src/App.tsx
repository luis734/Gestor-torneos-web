// import { DashboardPage } from './features/dashboard/DashboardPage'
import { TournamentHomePage } from "./features/tournament-home-page"
import { AppLayout } from "./layouts/app-layout"


function App() {
//   return <DashboardPage/>
    return (
        <AppLayout headerTitle="TablePoints">
            <TournamentHomePage></TournamentHomePage>
        </AppLayout>
    )
}

export default App
