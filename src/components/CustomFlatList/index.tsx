import React, {forwardRef} from 'react';
import { FlatList, ListRenderItem } from 'react-native';

type TutorialItem = {
    key: string;
    image: string;
    title: string;
    description: string;
};

type CustomFlatListProps = {
    data: TutorialItem[];
    renderItem: ListRenderItem<TutorialItem>;
    keyExtractor: (item: TutorialItem, index: number) => string;
    onMomentumScrollEnd: (event: { nativeEvent: { contentOffset: { x: number } } }) => void;
};

const CustomFlatList= forwardRef<FlatList<TutorialItem>, CustomFlatListProps>(({
    data,
    renderItem,
    keyExtractor,
    onMomentumScrollEnd,
    // getItemLayout
}, ref) => {
    return (
        <FlatList
            ref={ref}
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onMomentumScrollEnd={onMomentumScrollEnd}
        />
    );
});

export default CustomFlatList;
