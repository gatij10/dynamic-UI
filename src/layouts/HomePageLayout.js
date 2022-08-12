import React from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import CardGroups from '../components/cardgroups/CardGroups';
import Header from '../components/header/Header';
import { HomepageContainer, Error } from './HomePageLayout.styles';
import useAPIResolver from '../hooks/useAPIResolver';

const HomePageLayout = () => {
    const [
        cardsGroups,
        error,
        handleRefresh,
    ] = useAPIResolver();

    return (
        <div>
            <Header />
            {
                error ? (
                    <Error>{error}</Error>
                ) : (
                    <HomepageContainer>
                        <PullToRefresh onRefresh={handleRefresh}>
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
                        </PullToRefresh>
                    </HomepageContainer>
                )
            }
        </div>
    );
};

export default HomePageLayout;
