import {component$, useStyles$} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
    useStyles$(styles);
    return (
        <header>
            <nav>
                <h1>
                    <Link href={"/"}>DigiLoop</Link>
                </h1>
                <ul>
                    <li>
                        <Link href={"/Team"}>Team</Link>
                    </li>
                    <li>
                        <Link href={"/Services"}>Services</Link>
                    </li>
                    <li>
                        <Link href={"/Contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});
