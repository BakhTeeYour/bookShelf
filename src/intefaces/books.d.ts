declare namespace IBooks {
    export interface IBook {
        totalItems: number
        items: Item[]
    }
    export interface Item {
        volumeInfo: VolumeInfo
    }
    export interface VolumeInfo {
        title: string
        subtitle?: string
        authors: string[]
        publisher: string
        description: string
        pageCount: number
        printType: string
        categories: string[]
        imageLinks?: ImageLinks
        previewLink: string
        infoLink: string
    }
    export interface ImageLinks {
        smallThumbnail: string
        thumbnail: string
    }
}