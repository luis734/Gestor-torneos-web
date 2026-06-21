import { useEffect, useRef, useState } from "react";
import { TrophyIcon } from "../../../assets/icons";
import { PageStyles } from "./PageHeader.styles";
import { type PageProps } from "./PageHeader.types";

export function PageHeader({pageTitle}:PageProps) {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Guardamos la altura original del header
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight)
        }

        function handleScroll() {
            setIsSticky(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headerHeight]);

    return (
        <>
          {/* Placeholder invisible que mantiene el espacio cuando el header es fixed */}
          {isSticky && <div style={{ height: headerHeight }} />}
    
          <header
            ref={headerRef}
            className={`${ PageStyles.container } ${PageStyles.transitions} ${ isSticky ? PageStyles.isSticky : PageStyles.noSticky }
            `}
          >
            <div className="flex w-xl gap-3">
                <div className={`${PageStyles.icon} ${isSticky ? "h-5 w-5" : "h-7 w-7"}`}>
                    <TrophyIcon className={`${PageStyles.transitions} ${isSticky ? "h-3 w-3" : "h-4 w-4"}`}/>
                </div>
                <span className={PageStyles.transitions}>
                    {pageTitle}
                </span>
            </div>
          </header>
        </>
      );
}