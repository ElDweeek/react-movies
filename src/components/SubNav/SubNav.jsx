import React from 'react'
import { useSelector } from 'react-redux'
import './SubNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap'

const SubNav = () => {
    const myWishList = useSelector((state) => state.wishList)

    return (
        <>
            <div className='sub-nav d-flex justify-content-evenly'>

                <h3>Enjoy Watching Movies</h3>
                <span className='position-relative d-flex align-items-center'>
                    <FontAwesomeIcon icon={faHeart} size='xl' />
                    <Badge pill bg="danger" className='position-absolute badge'>
                        {myWishList}
                    </Badge>
                </span>
            </div>
        </>
    )
}

export default SubNav;
