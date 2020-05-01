import React, { Component } from 'react'
import axios                from 'axios'
import _                    from 'lodash'
import { Card, NavBar }     from '../components/Components'

class App extends Component {
    state = {
        users: []
    }

    loadUser = () => {
        const { users } = this.state
        const url = 'https://randomuser.me/api/?results=10'
        axios.get(url)
            .then(response => {
                this.setState({
                    users: [...users, ...response.data.results]
                })
                localStorage.setItem('initialUsers', JSON.stringify(this.state.users))
            })
            .catch(err => {
                console.log(err)
            })
    }

    loadMore = () => {
        if (this.state.users.length !== 100) {
            this.loadUser()
            localStorage.setItem('initialUsers', JSON.stringify(this.state.users))
        }
    }

    handleScrollMobile = () => {
        let lastData        = document.querySelector('div.cards > div.card:last-child')
        let lastDataOffset  = lastData.offsetTop + lastData.clientHeight
        let pageOffset      = window.pageYOffset + window.innerHeight

        if (pageOffset > lastDataOffset) {
            this.loadMore()
        }
    }

    handleScrollWeb = () => {
        let lastData        = document.querySelector('div.cards > div.card:last-child')
        let lastDataOffset  = lastData.offsetLeft + lastData.clientWidth
        let pageOffset      = window.pageXOffset + window.innerWidth

        if (pageOffset > lastDataOffset) {
            this.loadMore()
        }
    }

    componentDidMount() {
        let initialUsers = JSON.parse(localStorage.getItem('initialUsers'));
        if (!initialUsers || initialUsers.length < 1) {
            this.loadUser()
        } else {
            this.setState({
                users: initialUsers
            })
        }

        if (window.innerWidth >= 768) {
            this.scrollListener = window.addEventListener('scroll', e => {
                this.handleScrollWeb(e)
            })
        } else {
            this.scrollListener = window.addEventListener('scroll', e => {
                this.handleScrollMobile(e)
            })
        }
    }

    defineCardColor = (age) => {
        if (age < 21) {
            return 'red'
        } else if (age > 56) {
            return 'blue'
        } else {
            return 'green'
        }
    }

    sortList = (key) => {
        let arrayCopy = [...this.state.users]
        if (key === 'city') {
            const myOrderedArray = _.sortBy(arrayCopy, `location.${key}`)
            this.setState({ users: myOrderedArray }, () => {
                localStorage.setItem('initialUsers', JSON.stringify(this.state.users))
            })
        } else {
            const myOrderedArray = _.sortBy(arrayCopy, `dob.${(key)}`)
            this.setState({ users: myOrderedArray }, () => {
                localStorage.setItem('initialUsers', JSON.stringify(this.state.users))
            })
        }
    }

    render() {
        const { users } = this.state
        return (
            <div className={'app'}>
                <NavBar sortList={this.sortList} />
                <div className={'home container'}>
                    <div className={'cards'}>
                        {
                            users.map(user => (
                               <Card user={user} defineColor={this.defineCardColor} key={user.login.username}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App
