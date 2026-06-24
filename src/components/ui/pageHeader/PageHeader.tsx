import { useEffect, useRef, useState } from "react";
import { TrophyIcon, ArrowLeftIcon } from "../../../assets/icons";
import { PageStyles } from "./PageHeader.styles";
import { routes, routeTitles } from "../../../router/routes";
import { useLocation, useNavigate } from "react-router-dom";

export function PageHeader() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
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

    function navigateBackwards() {
        navigate(-1);
    }

    return (
        <>
          {/* Placeholder invisible que mantiene el espacio cuando el header es fixed */}
          {isSticky && <div style={{ height: headerHeight }} />}
    
          <header
            ref={headerRef}
            className={`${ PageStyles.container } ${PageStyles.transitions} ${ isSticky ? PageStyles.isSticky : PageStyles.noSticky }
            `}
          >
            <div className="flex w-2xl gap-3">
                {
                    pathname !== routes.home ?
                    <button onClick={navigateBackwards}>
                        <ArrowLeftIcon></ArrowLeftIcon>
                    </button>
                    :
                    <div className={`${PageStyles.icon} ${isSticky ? "h-5 w-5" : "h-7 w-7"}`}>
                        <TrophyIcon className={`${PageStyles.transitions} ${isSticky ? "h-3 w-3" : "h-4 w-4"}`}/>
                    </div>
                }
                <span className={PageStyles.transitions}>
                    {routeTitles[pathname]}
                </span>
            </div>
          </header>
        </>
      );
}