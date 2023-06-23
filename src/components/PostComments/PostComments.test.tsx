import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
     test('Deve renderizar o componente Post corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
    test('Deve renderizar o PostComment corretamenta e verificar inserção de 2 comentarios', () => {
        const { debug } = render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'linda miniatura'
            }
        })
        fireEvent.click((screen.getByTestId('comentar')))

        fireEvent.change(screen.getByTestId('comentario'), {
            target: {
                value: 'ameiiii'
            }
        })
        fireEvent.click((screen.getByTestId('comentar')))


        const comentarios = screen.queryAllByRole('listitem')
        debug()
        expect(comentarios).toHaveLength(2)
       
    })
    
});