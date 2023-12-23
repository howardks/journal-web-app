'use client';

import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className="px-3">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    Web Journal
                </div>

                <div className="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Sign-up</button>
                    <button type="button" class="btn btn-primary">Login</button>
                </div>
            </header>
        </div>
    );
};