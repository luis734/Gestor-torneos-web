import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TournamentHomePage } from "../features/tournament-home-page";
import { CreateTournament } from "../features/create-tournament";
import { AppLayout } from "../layouts/app-layout";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<TournamentHomePage />} />
                    <Route path="create" element={<CreateTournament />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}