
const getData = async ( number:number) => {
    const API_URL = process.env.API_BASE 
    let res = await fetch(`${API_URL}/${number}`)
    if (!res.ok) {
        throw  { message: res.statusText,
        status: 'Error',
        code: res.status
        }
    }
    return await res.json()
} 

export {
    getData
}