import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';

import { AboutItemI } from '@/types/types';

import Box from '../Box/Box';

import AboutItem from './AboutItem/AboutItem';

import styles from './About.module.scss';

const About = () => {
    const t = useTranslations('AboutT');

    const birthday = dayjs().diff(dayjs('1994-01-29'), 'year');

    const data: AboutItemI[] = [
        {
            text: t('about1', { years: birthday }),
        },
        {
            text: t('about2'),
        },
        {
            text: t('about3'),
        },
        {
            text: t('about4'),
        },
        {
            text: t('about5'),
            bold: true,
        },
    ];

    return (
        <Box corners={['topRight']} height100percent title={t('title')}>
            <div className={styles.list}>
                <ul className={styles.ul}>
                    {data.map((item, index) => (
                        <AboutItem
                            key={index}
                            text={item.text}
                            bold={item.bold}
                        />
                    ))}
                </ul>
            </div>
        </Box>
    );
};

export default About;
