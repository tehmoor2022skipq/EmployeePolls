import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar';
import Poll from '../components/Poll';
import { store } from '../index'
import Login from '../components/Login';



describe('Testing DOM elements', () => {
    it('will create check presence of element', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        );
        const td_User = component.getByTestId('Users')
        expect(td_User).toBeInTheDocument()
        const td_Ans = component.getByTestId('Answered')
        expect(td_Ans).toBeInTheDocument()
        const td_Created = component.getByTestId('Created')
        expect(td_Created).toBeInTheDocument()
    })

    it('will create create snapshot', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    })

    it('Test Navbar', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </MemoryRouter>
        );

        const nav1 = component.getByTestId('dashboard')
        expect(nav1).toBeInTheDocument()

        const nav2 = component.getByTestId('leaderboard')
        expect(nav2).toBeInTheDocument()

        const nav3 = component.getByTestId('createPoll')
        expect(nav3).toBeInTheDocument()

        const logoutBtn = component.getByTestId('logout')
        expect(logoutBtn).toBeInTheDocument()
    })

    it('Login Button Test', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const drop = component.getByTestId('dropdown')
        expect(drop).toBeInTheDocument()

        const login = component.queryAllByTestId('login')
        expect(login.length).toEqual(0)
    })

    it('Event on login button test', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const drop = component.getByTestId('dropdown')
        fireEvent.change(drop, { target: { value: 'mtsamis' } })
        const login = component.getByTestId('login')
        expect(login).toBeInTheDocument()
    })

    it('Page not found test', () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Poll />
                </Provider>
            </MemoryRouter>
        );
        const err = component.getByTestId('404')
        expect(err).toBeInTheDocument()
    })
});