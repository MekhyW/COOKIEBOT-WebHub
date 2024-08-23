import styles from '../styles/Home.module.scss';

import { FormattedMessage } from "react-intl";

export default function Home() {
    return (
        <>
            <main className={styles.home}>
                <div className={styles.home__content}>
                    <FormattedMessage id="home.welcome" />
                </div>

            </main>
        </>
    )
}