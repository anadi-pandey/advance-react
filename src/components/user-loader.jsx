import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserLoader = ({ userId, children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            console.log('Fetch User',userId)
            const response = await axios.get(`/users/${userId}`)
            console.log(response?.data)
            setUser(response?.data)
        })()
    }, [userId])

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child
            })}
        </>
    )
}

export default UserLoader