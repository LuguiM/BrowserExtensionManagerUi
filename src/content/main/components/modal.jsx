import '../styles/modal.css';
import { useEffect } from 'react';

 const modal = ({
    open,
    closeIcon,
    content,
    titleContent,
    className,
    actions
}) => {

    if (!open) return null;

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                {titleContent && (
                    <div className="title">
                        {titleContent}
                        {/* <div className="titleCloseBtn">
                            <button>{closeIcon ?? 'X'}</button>
                        </div> */}
                    </div>
                )}

                <div className="body">
                    {content}
                </div>

                <div className="footer">
                    {actions && actions}
                </div>
            </div>
        </div>
    )
}

export default modal;