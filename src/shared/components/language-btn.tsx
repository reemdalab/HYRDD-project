import { Button } from "antd";
import router, { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import styles from '../../styles/page.module.scss';

interface Props {
    dir: string;
}

export default function Btn({ dir }: Props) {
    const { locales, locale } = useRouter();
    const [buttonText, setButtonText] = React.useState("العربية");

    const toggleLanguage = () => {
        if (buttonText === "English") {
            setButtonText("العربية");
        } else {
            setButtonText("English");
        }
        const newLocale = locale === "ar" ? "en" : "ar";
        router.push(router.asPath, router.asPath, { locale: newLocale });
    };

    return (
        <div>
            <div>
                <Button className={styles.lang} onClick={toggleLanguage}>
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}

