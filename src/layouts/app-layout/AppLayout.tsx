import { PageHeader } from "../../components/ui/pageHeader";
import { LayoutStyles } from "./AppLayout.styles";
import type { LayoutProps } from "./AppLayout.type";

export function AppLayout({headerTitle, children}:LayoutProps) {
    return (
        <div className={LayoutStyles.container}>
            <PageHeader pageTitle={headerTitle}/>
            <div id="content" className="w-full max-w-xl p-4 flex-1">
                { children }
            </div>
        </div>
    );
}