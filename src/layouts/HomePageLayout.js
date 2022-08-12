import React from 'react';
import CardGroups from '../components/cardgroups/CardGroups';
import Header from '../components/header/Header';
import { HomepageConatiner } from './HomePageLayout.styles';
import useAPIResolver from '../hooks/useAPIResolver';

const HomePageLayout = () => {
    const [
        cardsGroups,
    ] = useAPIResolver();

    return (
        <div>
            <Header />
            <HomepageConatiner>
                {
                    cardsGroups.map((cardGroup) => (
                        <CardGroups
                            cards={cardGroup?.cards}
                            key={cardGroup?.id}
                            cardType={cardGroup?.design_type}
                            isScrollable={cardGroup?.is_scrollable}
                            height={cardGroup.height ? cardGroup.height : null}
                        />
                    ))
                }
            </HomepageConatiner>
        </div>

    );
};

export default HomePageLayout;
