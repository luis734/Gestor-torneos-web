import { PageHeader } from "../../components/ui/pageHeader";
import { LayoutStyles } from "./AppLayout.styles";
import type { LayoutProps } from "./AppLayout.type";

export function AppLayout({headerTitle, children}:LayoutProps) {
    return (
        <div className={LayoutStyles.container}>
            <PageHeader pageTitle={headerTitle}/>
            <div id="content" className="w-full p-4">
                { children }
            </div>
        </div>
    );
}