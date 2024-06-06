import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Testing <GifGrid/>', () => {
  
  const category = 'Kaliman';

  test('should show loading message', () => {
    
    render( <GifGrid category={ category }/> );
    expect( screen.getByText('Loading...') );
    expect( screen.getByText( category ) );
    //screen.debug();
  });

  
  test('should ', () => {
    
  })
  
})
