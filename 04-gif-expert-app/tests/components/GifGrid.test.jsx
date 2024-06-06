import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

/**
 * Para hacer un mock de la funcionalidad
 */
jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid/>', () => {
  
  const category = 'Kaliman';

  test('should show loading message', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render( <GifGrid category={ category }/> );
    expect( screen.getByText('Loading...') );
    expect( screen.getByText( category ) );
    //screen.debug();
  });

  
  test('should show items when loading images using useFetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Kaliman',
        url: 'https://localhost/kalima.jpg'
      },
      {
        id: 'A5322ddBC',
        title: 'Arandú',
        url: 'https://localhost/arandu.jpg'
      }
    ];
    
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    });

    render( <GifGrid category={ category }/>);

    //screen.debug();

    expect( screen.getAllByRole('img').length ).toBe(2);
  })
  
})
