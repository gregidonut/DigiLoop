import { component$ } from "@builder.io/qwik";
import Header from "~/components/Header/Header";

export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <h2>Team</h2>
            </main>
        </>
    );
});
