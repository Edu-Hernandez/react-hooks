export interface User {
    id: number
    name: string
    location: string
    role: string
}

export const getUser = async (id: number): Promise<User> => {
    console.log('funcion llamada a la api')
    await new Promise(resolve => setTimeout(resolve, 2000))

    return {
        id: id,
        name: 'Hernandez',
        location: 'Lince',
        role: 'Admin'
    }
}