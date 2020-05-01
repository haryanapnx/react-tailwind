import React from 'react'

const NavBar = ({ sortList }) => {
    return (
        <nav className={'navbar container'}>
            <div className={'navbar__logo'}><span>qoala</span> test</div>
            <div className={'navbar__buttons'}>
                <button className={'btn btn--orange'}
                    onClick={() => sortList('age')}
                ><i className={'fas fa-tint'}></i> color</button>
                <button className={'btn btn--blue'}
                    onClick={() => sortList('city')}
                ><i className={'fas fa-city'}></i> city</button>
            </div>
        </nav>
    )
}

export default NavBar;
