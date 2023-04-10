import { NextPage } from 'next';
import styles from '../../styles/job.module.scss';
import { Button, Card, Col, ConfigProvider, Divider, Row } from 'antd';
import 'remixicon/fonts/remixicon.css'
import MyCard from '@/shared/components/cards';
import { useEffect, useState } from 'react';

interface Props {
    cards: MyCard[];
}

const Job: NextPage<Props> = ({ cards }) => {
    const [myCards, setCards] = useState(cards);
    const [request, setRequest] = useState('Not Requested')
    const handleClick = () => {
        setRequest('Requested')
    }
    const onDelete = (id: number) => {
        setCards(myCards.filter((card) => card.id !== id));
                console.log("myCards", myCards);
    };

    useEffect(() => {
        const updateCards = async () => {
            const response = await fetch('/jobs', {
                method: 'POST',
                body: JSON.stringify({ cards }),
            });
            if (response.ok) {
                console.log('Cards updated successfully');
            } else {
                console.error('Failed to update cards');
            }
        };
        updateCards();
        console.log("updateCards", updateCards);
    }, [cards]);

    console.log("cards", cards);
    return (
        <div className={styles.cards}>
            {cards?.map((card) => (
                <Card key={card.id} title={<div>
                    <span className={styles.span1}>
                        #{card.id}:
                    </span>
                    <span className={styles.span2}>
                        {card.jobType}
                    </span>
                </div>}
                    bordered={false}
                    extra={
                        <div className={styles.buttons}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#7b67fe',
                                    },
                                }} >
                                <Button type="primary" className={styles.rqsBtn}
                                onClick={handleClick}
                                ><span>Request Job</span></Button>
                            </ConfigProvider>
                            <Button className={styles.iconsBtn} icon={<i className="ri-more-2-fill"></i>} />
                            <Button className={styles.iconsBtn} icon={<i className="ri-pencil-fill"></i>} />
                            <Button danger className={styles.iconsBtn}
                            onClick={() => onDelete(card.id)}
                            // onClick={() => handleDelete(card.id)}
                            icon={<i className="ri-delete-bin-line"></i>} />

                        </div>} >
                    <Row className={styles.cardContent}>
                        <Col lg={6} >
                            <div className={styles.cardLeftSide}>
                                <div>
                                    <h5>
                                        Requisition Type
                                    </h5>
                                    <span>
                                        {card.RequisitionType}
                                    </span>
                                </div>
                                <div>
                                    <h5 className={styles.org}>
                                        Organization Structure
                                    </h5>
                                    <span>
                                        {card.OrganizationStructure}
                                    </span>
                                </div>
                                <div>
                                    <h5>
                                        Units
                                    </h5>
                                    <span>
                                        {card.units}
                                    </span>
                                </div>
                            </div>
                            <Divider className={styles.divider} />
                            <div className={styles.managers}>
                                <h5>
                                    Hiring Managers
                                </h5>
                                <div>
                                    <span>
                                        {card.managers[0]}
                                    </span>
                                    <span>
                                        {card.managers[1]}
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={15} >
                            <div className={styles.cardRightSide}>
                                <span className={styles.rightSideSpan1}>
                                    Current Requisition Status
                                </span>
                                <span className={styles.rightSideSpan2}>
                                    {request}
                                </span>
                                <span className={styles.rightSideSpan3}>
                                    View Details
                                </span>
                            </div>
                            <div className={styles.infoDiv} >
                                <div className={styles.info}>
                                    <h5>
                                        {card.TotalBudgetVacancies}
                                    </h5>
                                    <span>
                                        Total Budget Vacancies
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <h5 className={styles.open}>
                                        {card.VacanciesstillOpen}
                                    </h5>
                                    <span>
                                        Vacancies still Open
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <h5 className={styles.filled}>
                                        {card.VacanciesFilled}
                                    </h5>
                                    <span>
                                        Vacancies Filled
                                    </span>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Card>
            ))}

        </div>
    );
};

export default Job;

export const getStaticProps = async () => {
    const data = await import('../../pages/cards.json');
    const cards = data.cards;
    return { props: { cards } };
};
function onDelete(id: any) {
    throw new Error('Function not implemented.');
}

