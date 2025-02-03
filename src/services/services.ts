
const getData = async ( number:number) => {
    
    let res = await fetch(`${process.env.API_BASE}/${number}`)
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