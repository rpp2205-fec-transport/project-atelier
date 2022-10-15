import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../QnA.jsx';
import App from '/Users/chuck/project-atelier/client/src/index.jsx';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("App", () => {
  test('renders App component', async () => {
    render(<App />)
    await screen.findByRole('heading')
    expect(screen.getByRole('heading')).toHaveTextContent('Project Atelier')
  })
})

describe("Q&A", () => {
  test('loads and displays greeting', async () => {
    render (<QnA />)
    await screen.findByRole('heading')
    expect(screen.getByRole('heading').toHaveTextContent('Question'))
  })
})


