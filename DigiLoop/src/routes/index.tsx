import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";

export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <h2>Front</h2>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "Digiloop",
    meta: [
        {
            name: "description",
            content: "A Virtual Assistant Company",
        },
    ],
};
