import React from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import CardGroups from '../components/cardgroups/CardGroups';
import Header from '../components/header/Header';
import { HomepageContainer, StatusLabel } from './HomePageLayout.styles';
import useAPIResolver from '../hooks/useAPIResolver';

const HomePageLayout = () => {
    const [
        cardsGroups,
        error,
        handleRefresh,
        onClickRemindLater,
        onClickDismiss,
        isLoading,
    ] = useAPIResolver();

    const renderBody = error ? (
        <StatusLabel color="#FF0000">{error}</StatusLabel>
    ) : (
        <HomepageContainer>
            <PullToRefresh onRefresh={handleRefresh}>
                {
                    cardsGroups.map((cardGroup) => (
                        <CardGroups
                            key={cardGroup?.id}
                            cards={cardGroup?.cards}
                            cardType={cardGroup?.design_type}
                            isScrollable={cardGroup?.is_scrollable}
                            height={cardGroup.height ? cardGroup.height : null}
                            onClickRemindLater={onClickRemindLater}
                            onClickDismiss={onClickDismiss}
                        />
                    ))
                }
            </PullToRefresh>
        </HomepageContainer>
    );

    return (
        <div>
            <Header />
            {
                isLoading ? (
                    <StatusLabel>Loading ...</StatusLabel>
                ) : (
                    <div>
                        {renderBody}
                    </div>
                )
            }
        </div>
    );
};

export default HomePageLayout;
