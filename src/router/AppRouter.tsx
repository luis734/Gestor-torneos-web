import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TournamentHomePage } from "../features/tournament-home-page";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { AppLayout } from "../layouts/app-layout";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<TournamentHomePage />} />
                    <Route path="create" element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}