import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDreamAuth } from '@dream.mf/oidc';

const LogoutPage = () => {
    const auth = useDreamAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        auth.handleLogout(() => { navigate('/'); }, true);
    }, []);

    return (
        <div className="p-2 text-center">
            Logging you out...
        </div>
    );
};

export default LogoutPage;