import { Outlet } from "react-router-dom";
import { PageHeader } from "../../components/ui/pageHeader";
import { LayoutStyles } from "./AppLayout.styles";

export function AppLayout() {
    return (
        <div className={LayoutStyles.container}>
            <PageHeader pageTitle="TablePoints"/>
            <section id="content" className="w-full max-w-xl p-4 flex-1">
                <Outlet />
                {/* { children } */}
            </section>
        </div>
    );
}