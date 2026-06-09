import { Button } from ".";

export function DashboardPage() {
    return (
        <div className="bg-background p-8 min-h-dvh">
            <div className="flex flex-col gap-y-[1rem]">
                <h1 className="text-4x1 font-bold text-text-primary">
                    Tournament Dashboard
                </h1>

                <div className="flex gap-[1rem]">
                    <Button onClick={() => console.log("Primary")}>
                        Test primary
                    </Button>
                    <Button onClick={() => console.log("Primary disabled")} disabled>
                        Disabled
                    </Button>
                </div>

                <div className="flex gap-[1rem]">
                    <Button onClick={() => console.log("Secondary")} variant="secondary">
                        Test secondary
                    </Button>
                    <Button onClick={() => console.log("Secondary disabled")} variant="secondary" disabled>
                        Disabled
                    </Button>
                </div>

                <div className="flex gap-[1rem]">
                    <Button onClick={() => console.log("Ghost")} variant="ghost">
                        Test ghost
                    </Button>
                    <Button onClick={() => console.log("Ghost disabled")} variant="ghost" disabled>
                        Disabled
                    </Button>
                </div>

                <div className="flex gap-[1rem]">
                    <Button onClick={() => console.log("Danger")} variant="danger">
                        Test danger
                    </Button>
                    <Button onClick={() => console.log("Danger")} variant="danger" disabled>
                        Disabled
                    </Button>
                </div>

                <div className="flex gap-[1rem]">
                    <Button onClick={() => console.log("Small")} size="sm">
                        Small with large texrt
                    </Button>
                    <Button onClick={() => console.log("Medium")}>
                        Medium
                    </Button>
                    <Button onClick={() => console.log("Large")} size="lg">
                        Large
                    </Button>
                </div>
            </div>
        </div>
    );
}