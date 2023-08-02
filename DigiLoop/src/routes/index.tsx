import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";

export default component$(() => {
    return (
        <>
            <Header />
            <main>
                <p class="short-description">
                    Unlock the true potential of your business with our cutting-edge Virtual Assistant services. Our
                    team of skilled and dedicated professionals is here to provide you with a seamless experience that
                    will elevate your brand to new heights. Whether you are an established enterprise or a budding
                    entrepreneur, our comprehensive suite of services is designed to cater to all your needs.
                </p>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "Digiloop",
    meta: [
        {
            name: "description",
            content:
                "Unlock the true potential of your business with our cutting-edge Virtual Assistant services. " +
                "Our team of skilled and dedicated professionals is here to provide you with a seamless experience " +
                "that will elevate your brand to new heights. Whether you are an established enterprise or a budding " +
                "entrepreneur, our comprehensive suite of services is designed to cater to all your needs.",
        },
    ],
};
