import { render, screen } from '@testing-library/react'
import Component from './index'

const testData = {
  name: 'Hello World - Text component',
}

test('Atoms - Text - renders text', () => {
  render(<Component text={testData.name} />)
  const text = screen.getByText(testData.name)
  expect(text).toBeInTheDocument()
})
