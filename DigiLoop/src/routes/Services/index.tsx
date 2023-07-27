import { component$ } from "@builder.io/qwik";

import Header from "~/components/Header/Header";

export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <h2>Services</h2>
            </main>
        </>
    );
});
