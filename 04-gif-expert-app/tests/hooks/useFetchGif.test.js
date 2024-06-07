import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing custom hooks useFetchGif', () => {
  
  test('should return initial state', () => {
    
    const { result } = renderHook(() => useFetchGifs('Kaliman'));

    const { images, isLoading } = result.current;
    
    // Validar el estado inicial
    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
    
  });
  
  test('should return images array and isLoading false', async() => {
    
    const { result } = renderHook(() => useFetchGifs('Kaliman'));

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    
    // Validar el estado final
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();

  });
  
})
