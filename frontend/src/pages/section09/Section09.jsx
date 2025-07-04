import styles from './Section09.module.css';
import ProblemCard from '../../components/section09/ProblemCard';
import Tooltip from '../../components/section09/Tooltip';

const Section09 = () => {
    return (
        <div className={styles.container}>
            <ProblemCard title="Problem 1: Save and display last visit time in the footer">
                <strong>Solution:</strong>
                <Tooltip text="Scroll down to the bottom of the page to see the footer. The 'Last visit' section will be highlighted in yellow when you click this link.">
                    <a
                        href="#footer-last-visit"
                        className={styles.footerLink}
                        onClick={() => {
                            const footer = document.querySelector("footer.footer");
                            if (footer) {
                                footer.scrollIntoView({ behavior: "smooth" });
                                const span = footer.querySelector("span");
                                if (span) {
                                    span.style.background = "#ffd54f";
                                    setTimeout(() => {
                                        span.style.background = "";
                                    }, 1500);
                                }
                            }
                        }}
                    >
                        See the last visit display in the footer
                    </a>
                </Tooltip>
            </ProblemCard>

            <ProblemCard title="Problem 2: Check and debug /api/products API using DevTools">
                <strong>Solution:</strong> Use DevTools to inspect the /api/products API. You can open DevTools by pressing F12, then select the Network tab and type '/api/products' in the filter box to view requests to this API.
                <br />
                <Tooltip text={"1. Press F12 to open DevTools.\n2. Select the Network tab.\n3. Type '/api/products' in the filter box."}>
                    <a className={styles.devtoolsLink}>Guide to checking Network for /api/products</a>
                </Tooltip>
            </ProblemCard>
        </div>
    );
};

export default Section09;