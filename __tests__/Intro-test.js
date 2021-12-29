import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '@Tests/Intro';
import { FlatList,Text } from 'react-native';

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Test some flatlist.
test('renders the flatlist component',()=>{
    const tree = renderer.create(<FlatList data={['item 1','item 2','item 3']} keyExtractor={item=>item} renderItem={({item})=><Text>{`test_${item}`}</Text>}></FlatList>)
    expect(tree).toMatchSnapshot();
})