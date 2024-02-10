export const saveUserToDB = async data => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return await res.json();
}

export const isUserExist = async email => {
    const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/isUserExist?email=${email}`)
    return await res.json();
}