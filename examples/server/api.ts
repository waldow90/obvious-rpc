export async function hello(name: string) {
    console.log('hello to', name)
    return [
        {
            message: 'hello ' + name,
            author: 'bob',
            to: name,
        },
    ]
}