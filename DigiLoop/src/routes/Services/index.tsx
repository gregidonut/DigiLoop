import {component$} from "@builder.io/qwik";

import Header from "~/components/Header/Header";

export default component$(() => {
    return (
        <>
            <Header/>
            <main>
                <h2>Services</h2>
                <section>
                    <ul>
                        <li>
                            Social media management
                        </li>
                        <li>
                            Social media ads
                        </li>
                        <li>
                            Branding
                        </li>
                        <li>
                            Web design
                        </li>
                        <li>
                            Film Production
                        </li>
                        <li>
                            3d design
                        </li>
                        <li>
                            Game development
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
});
