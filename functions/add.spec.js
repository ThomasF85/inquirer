import {render, screen} from '@testing-library/react'
import add from './add.js'
      
describe('add', () => {
    it('renders', () => {
        render(<add />)
        expect(screen.getByText('add')).toBeInTheDocument()
    })
})