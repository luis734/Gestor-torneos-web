import { TrophyIcon, ArrowLeftIcon } from "../../../assets/icons";
import { PageStyles } from "./PageHeader.styles";
import { routes, routeTitles } from "../../../router/routes";
import { useLocation, useNavigate } from "react-router-dom";

export function PageHeader() {
    const navigate = useNavigate();
    const { pathname } = useLocation();


    function navigateBackwards() {
        navigate(-1);
    }

    return (
        <>
    
          <header
            className={`${ PageStyles.container }`}>
            <div className="flex w-[1280px] gap-3">
                {
                    pathname !== routes.home ?
                    <button onClick={navigateBackwards}>
                        <ArrowLeftIcon></ArrowLeftIcon>
                    </button>
                    :
                    <div className={`${PageStyles.icon} "h-7 w-7"`}>
                        <TrophyIcon className="h-4 w-4"/>
                    </div>
                }
                <span>
                    {routeTitles[pathname]}
                </span>
            </div>
          </header>
        </>
      );
}