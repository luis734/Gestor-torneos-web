import { Outlet } from "react-router-dom";
import { PageHeader } from "../../components/ui/pageHeader";
import { LayoutStyles } from "./AppLayout.styles";

export function AppLayout() {
    return (
        <div className={LayoutStyles.container}>
            <PageHeader/>
            <section id="content" className="flex-1 max-w-[1280px] w-full min-h-0">
                <Outlet />
                {/* { children } */}
            </section>
        </div>
    );
}