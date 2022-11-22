export interface Post extends RawPost {
    id: number
}

export interface RawPost {
    title: string
    body: string
}

export interface Options {
    value: string
    name: string
}