import React, { forwardRef } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

type CustomFlatListProps<T> = {
    data: T[];
    renderItem: ListRenderItem<T>;
    keyExtractor: (item: T, index: number) => string;
    onMomentumScrollEnd?: (event: { nativeEvent: { contentOffset: { x: number } } }) => void;
    horizontal?: boolean;
    pagingEnabled?: boolean;
    showsHorizontalScrollIndicator?: boolean;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
    refreshControl?: React.ReactElement;
};

const CustomFlatList = forwardRef<FlatList<any>, CustomFlatListProps<any>>(({
    data,
    renderItem,
    keyExtractor,
    onMomentumScrollEnd,
    horizontal = true,
    pagingEnabled = true,
    showsHorizontalScrollIndicator = false,
    onEndReached,
    onEndReachedThreshold,
    ListFooterComponent,
    refreshControl
}, ref) => {
    return (
        <FlatList
            ref={ref}
            data={data}
            horizontal={horizontal}
            pagingEnabled={pagingEnabled}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            refreshControl={refreshControl}
            ListFooterComponent={ListFooterComponent}
        />
    );
});

export default CustomFlatList;
